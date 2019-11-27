import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import { labelInputCreator, validateEmail } from "../../utils";
import { connect } from "react-redux";
import { sessionLogIn } from "../store/actions/session";

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

const inputStyle = {
  width: "100%"
};

function LoginModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  }

  const validateLogin = (email, pass) => {
    if (!validateEmail(email) || !pass) {
      setWarningMessage("Usuario o contraseña invalidos");
      return false;
    } else {
      setWarningMessage("");
      return true;
    }
  };

  function validateAndClose(routeToPost, email, password, validateLogin) {
    if (validateLogin(email, password)) {
      console.log("siempre valida")
      props.sessionLogIn(routeToPost, email, password);
      handleClose();
    }
  }

  let routeToPost;
  if (props.role === "Recruiter") routeToPost = "/api/recruiter/login";
  if (props.role === "Client") routeToPost = "/api/client/login";
  if (props.role === "Admin") routeToPost = "/api/admin/login";

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Login
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
              <h2 id="spring-modal-title">Ingrese sus credenciales</h2>
              {labelInputCreator("Email", setEmail)}
              {labelInputCreator("Password", setPassword)}
              <br />
              <p style={{ color: "red" }}>{warningMessage}</p>
              <button
                onClick={e => {
                  e.preventDefault();
                  validateAndClose(routeToPost, email, password, validateLogin);
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

const mapDispatchToProps = {
  sessionLogIn
};

export default connect(null, mapDispatchToProps)(LoginModal);
