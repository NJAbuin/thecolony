import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { Button } from "../templates/Button";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import axios from "axios";
import {
  labelInputCreator,
  validateEmail,
  validateFullName,
  validatePass,
  ERROR_EMAIL,
  ERROR_PASSWORD,
  ERROR_PASSWORD_CHECK,
  ERROR_FULLNAME
} from "../../utils/formLoginRegister";

export default function RegisterModalRecrClient(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [fullName, setfullName] = useState("");
  const [logoURL, setLogoURL] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [warningMessage, setWarningMessage] = useState(null);

  let routeToPost;
  if (props.role === "client") routeToPost = "/api/session/client/register";
  if (props.role === "recruiter")
    routeToPost = "/api/session/recruiter/register";

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setEmail("");
    setfullName("");
    setPassword("");
    setWarningMessage("");
  };

  React.useEffect(() => {
    setWarningMessage(null);
  }, [password, passwordCheck, fullName, email]);

  const validateAndRegister = (email, password, fullName) => {
    if (!validateFullName(fullName)) return setWarningMessage(ERROR_FULLNAME);
    if (!validateEmail(email)) return setWarningMessage(ERROR_EMAIL);
    if (!validatePass(password)) return setWarningMessage(ERROR_PASSWORD);
    if (password !== passwordCheck)
      return setWarningMessage(ERROR_PASSWORD_CHECK);

    return registerUser(email, password, fullName, phone, logoURL, website);
  };

  const registerUser = (email, password, fullName, phone, logoURL, website) => {
    axios
      .post(routeToPost, { email, password, fullName, phone, logoURL, website })
      .then(res =>
        res.data.alreadyInDB
          ? setWarningMessage("Este email ya esta registrado")
          : (alert("Successfully registered!"), handleClose())
      )
      .catch(() => console.error("error"));
  };

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        Crear Usuario
      </Button>
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
              {labelInputCreator("Nombre Completo", setfullName)}
              {labelInputCreator("Email", setEmail)}
              {labelInputCreator("Password", setPassword, "password")}
              {labelInputCreator(
                "Confirma tu password",
                setPasswordCheck,
                "password"
              )}
              {labelInputCreator("Logo URL", setLogoURL)}
              {labelInputCreator("Phone", setPhone)}
              {labelInputCreator("Website", setWebsite)}
              <p style={{ color: "red" }}>{warningMessage}</p>
              <button
                onClick={event => {
                  event.preventDefault();
                  validateAndRegister(
                    email,
                    password,
                    fullName,
                    phone,
                    logoURL,
                    website
                  );
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
