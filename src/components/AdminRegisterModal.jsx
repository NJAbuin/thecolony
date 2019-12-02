import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import axios from "axios";
import {
  labelInputCreator,
  validateEmail,
  validateFullName,
  validatePass,
  ERROR_EMAIL,
  ERROR_PASSWORD,
  ERROR_FULLNAME
} from "../../utils/formLoginRegister";

export default function AdminRegisterModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [fullName, setfullName] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setfullName("");
    setPassword("");
    setWarningMessage("");
  };

  React.useEffect(() => setWarningMessage(null), [password, fullName, email]);

  const validateAndRegister = (email, password, fullName) => {
    if (!validateEmail(email)) return setWarningMessage(ERROR_EMAIL);
    if (!validatePass(password)) return setWarningMessage(ERROR_PASSWORD);
    if (!validateFullName(fullName)) return setWarningMessage(ERROR_FULLNAME);

    return registerUser(email, password, fullName);
  };

  const registerUser = (email, password, fullName) => {
    axios
      .post("/api/admin/register", { email, password, fullName })
      .then(res =>
        res.data.alreadyInDB
          ? setWarningMessage("Este email ya esta registrado")
          : (alert("Successfully registered!"), handleClose())
      )
      .catch(console.error());
  };

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Registrate
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
              <br />
              <p style={{ color: "red" }}>{warningMessage}</p>
              <button
                onClick={event => {
                  event.preventDefault();
                  validateAndRegister(email, password, fullName);
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
