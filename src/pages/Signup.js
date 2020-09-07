import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Grid,
  Button,
  IconButton,
  Collapse,
  Paper,
} from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import CloseIcon from "@material-ui/icons/Close";
import { signup } from "../helpers/auth";

const Singup = () => {
  const [error, setError] = useState({
    msg: "",
    alert: false,
  });
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signup(form.email, form.password);
    } catch (error) {
      setError({ ...error, msg: error.message, alert: true });
    }
  };

  return (
    <>
      <Collapse in={error.alert}>
        <Alert
          severity="warning"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setError({ ...error, alert: false });
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {error.msg}
        </Alert>
      </Collapse>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <h1>Sign Up</h1>
        {/* <p>Fill in the form below to create an account.</p> */}
        <Paper elevation={3}>
          <form onSubmit={handleSubmit} style={{ margin: "30px" }}>
            <Grid>
              <TextField
                margin="dense"
                label="Email"
                variant="outlined"
                placeholder="Email"
                name="email"
                type="email"
                onChange={handleChange}
              />
            </Grid>
            <Grid>
              <TextField
                margin="dense"
                label="Password"
                variant="outlined"
                placeholder="Password"
                name="password"
                type="password"
                onChange={handleChange}
              />
            </Grid>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
            <Button variant="contained" color="primary" type="submit">
              Signup
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Singup;
