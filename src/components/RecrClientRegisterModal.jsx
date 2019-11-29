import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import axios from "axios";
import {
  labelInputCreator,
  validateEmail,
  validateDNI,
  validateFullName
} from "../../utils";

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

var submitted = false;

export default function RecrClientRegisterModal(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [warningMessage, setWarningMessage] = useState(null);
  let [warningMessageBackend, setWarningMessageBackend] = useState(null);
  const [password, setPassword] = useState("");
  const [fullName, setfullName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

  React.useEffect(() => {
    if (warningMessage === "") {
      registerUser(email, password, fullName, logoURL, phone, website);
    }
    if (warningMessageBackend === "") {
      handleClose();
    }
  }, [warningMessage, warningMessageBackend]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setPassword("");
    setfullName("");
    setWarningMessage("");
    setWarningMessageBackend("");
    if (email !== "" && password !== "" && fullName !== "" && submitted) {
      submitted = false;
      alert("Cuenta registrada con exito! Log in para empezar a navegar");
    }
  };

  const handleClick = e => {
    e.preventDefault();
    validateRegister(email, password, fullName, logoURL, phone, website);
  };

  const validateRegister = (email, pass, fullName) => {
    const passwordLength = 2;
    if (!validateEmail(email)) {
      setWarningMessage("Ingrese un email valido");
    } else if (pass.length < passwordLength) {
      setWarningMessage(
        `La contraseña debe tener al menos ${passwordLength} caracteres`
      );
    } else if (!validateFullName(fullName)) {
      setWarningMessage("Ingrese un nombre completo valido");
    } else {
      setWarningMessage("");
      setWarningMessageBackend(null);
    }
  };

  let routeToPost;
  if (props.role === "Client") routeToPost = "/api/client/register";
  if (props.role === "Recruiter") routeToPost = "/api/recruiter/register";

  const registerUser = (email, password, fullName, phone, logoURL, website) =>
    axios
      .post(routeToPost, { email, password, fullName, phone, logoURL, website })
      .then(res => {
        console.log(res.data);
        if (res.data === "Este email ya esta registrado.")
          setWarningMessageBackend(res.data);
        else {
          setWarningMessageBackend("");
        }
      })
      .then(() => {
        submitted = true;
      })
      .catch(() => {
        console.error("error");
      });

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
              {labelInputCreator("Logo URL", setLogoURL)}
              {labelInputCreator("Phone", setPhone)}
              {labelInputCreator("Website", setWebsite)}
              <p style={{ color: "red" }}>
                {warningMessage}
                {warningMessageBackend}
              </p>

              <button
                onClick={e => {
                  handleClick(e);
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
