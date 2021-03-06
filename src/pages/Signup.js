import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { TextField, Grid, Button, Paper } from "@material-ui/core";
import { signup } from "../helpers/firebaseAPI";
import { Context } from "../_store/StoreProvider";

const Singup = () => {
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
      await signup(form);
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
