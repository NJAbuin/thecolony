import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import axios from "axios";
import { labelInputCreator } from "../../utils";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    }
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

export default function AdminRegisterModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setfullName] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const registerUser = (email, password, fullName) => {
    axios
      .post("/api/admin/register", { email, password, fullName })
      .then(user => console.log(user.config.data))
      .catch(console.error());
  };

  const validateRegister = (email, pass) => {
    if (!validateEmail(email) || pass == "") {
      setWarningMessage("Usuario o contraseña invalidos");
    } else {
      setWarningMessage("");
    }
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Registrate (Admin)
      </button>
      <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <form>
              <h2 id="spring-modal-title">
                Ingrese sus datos para registrarse
              </h2>
              {labelInputCreator("Email", setEmail)}
              {labelInputCreator("Password", setPassword)}
              {labelInputCreator("Nombre Completo", setfullName)}
              <button
                onClick={e => {
                  e.preventDefault();
                  registerUser(email, password, fullName);
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
