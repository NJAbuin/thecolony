/* eslint-disable react/prop-types */
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import { useSpring, animated } from "react-spring/web.cjs"; // web.cjs is required for IE 11 support
import axios from "axios";

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

export default function SpringModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const loginUser = (email, password) => {
    axios
      .post("/admin/login", { email, password })
      .then(user => res.json(user))
      .catch(console.error());
  };

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
              <h2 id="spring-modal-title">
                Ingrese sus credenciales para ingresar
              </h2>
              <br />
              <label>
                Email:{" "}
                <input
                  onChange={e => {
                    setEmail(e.target.value);
                  }}
                  type="text"
                />
              </label>
              <br />
              <label>
                Password:{" "}
                <input
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                />
              </label>
              <button
                onClick={e => {
                  e.preventDefault();
                  loginUser(email, password);
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
