import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import {
  labelInputCreator,
  validateEmail,
  ERROR_LOGIN,
  ERROR_PERMISSIONS
} from "../../utils/formLoginRegister";
import { connect } from "react-redux";
import { sessionLogIn } from "../store/actions/session";
import { Button } from "../templates/Button";

function LoginModal(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [warningMessage, setWarningMessage] = React.useState(null);

  let routeToPost;
  if (props.role === "recruiter") routeToPost = "/api/session/recruiter/login";
  if (props.role === "client") routeToPost = "/api/session/client/login";
  if (props.role === "admin") routeToPost = "/api/session/admin/login";

  const handleOpen = () => setOpen(true);

  function handleClose() {
    setOpen(false);
    setEmail("");
    setPassword("");
    setWarningMessage("");
  }

  React.useEffect(() => {
    setWarningMessage(null);
  }, [password, email]);

  const goLogIn = (routeToPost, email, password) =>
    props.sessionLogIn(routeToPost, email, password).then(result => {
      if (result && result.credentials === "pendiente")
        return setWarningMessage(ERROR_PERMISSIONS);
      else if (!result) return setWarningMessage(ERROR_LOGIN);
      else return handleClose();
    });

  function validateAndLogIn(routeToPost, email, password) {
    if (!validateEmail(email) || !password)
      return setWarningMessage(ERROR_LOGIN);
    else setWarningMessage("");
    return goLogIn(routeToPost, email, password);
  }

  return (
    <div>
      <Button type="button" onClick={handleOpen}>
        {props.role === "admin" ? "Login As Admin" : "Login"}
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
              <h2 id="spring-modal-title">Ingrese sus credenciales</h2>
              {labelInputCreator("Email", setEmail)}
              {labelInputCreator("Password", setPassword, "password")}
              <br />
              <p style={{ color: "red" }}>{warningMessage}</p>
              <Button
                onClick={e => {
                  e.preventDefault();
                  validateAndLogIn(routeToPost, email, password);
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.session.user
});

const mapDispatchToProps = {
  sessionLogIn
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginModal);

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
