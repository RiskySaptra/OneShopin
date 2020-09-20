import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TextField, Grid, Button, Paper } from "@material-ui/core";
import { signin } from "../helpers/firebaseAPI";
import { Context } from "../_store/StoreProvider";

const Login = () => {
  const [, dispatch] = useContext(Context);
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
      await signin(form);
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: { errorStatus: true, errorMsg: err },
      });
    }
  };

  return (
    <>
      <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
        <h1>Login to OneShopin</h1>
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
              Do not have any account? <Link to="/signup">Signup</Link>
            </p>
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
};

export default Login;
