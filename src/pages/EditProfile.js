import React, { useContext, useState } from "react";
import { Grid, Paper, Avatar, Button, Container } from "@material-ui/core";
import { Context } from "../_store/StoreProvider";

import { updatingProfile } from "../helpers/firebaseAPI";

const EditProfile = () => {
  const [state, dispatch] = useContext(Context);
  const { user } = state;

  const [form, setForm] = useState({
    displayName: null,
    file: {
      name: null,
      image: null,
      file: null,
    },
  });

  const handleChange = (event) => {
    if (event.target.files[0]) {
      const blob = new Blob([event.target.files[0]], { type: "image/jpeg" });
      const image = URL.createObjectURL(event.target.files[0]);
      setForm({
        ...form,
        file: {
          name: event.target.files[0].name,
          [event.target.name]: image,
          file: blob,
        },
      });
    } else {
      setForm({
        ...form,
        file: {
          name: null,
          [event.target.name]: null,
          file: null,
        },
      });
    }
  };

  const handleSubmit = async () => {
    try {
      const response = await updatingProfile(form);
      console.log(response);
    } catch (err) {
      dispatch({
        type: "SET_ERROR",
        payload: { errorStatus: true, errorMsg: err },
      });
    }
  };

  return (
    <>
      <Container>
        <Paper style={{ padding: "30px", marginTop: "50px" }} elevation={5}>
          <h3>My Account</h3>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid>
              <p>ID: {user.uid === null ? "kosong" : user.uid}</p>
              <p>
                Username:{" "}
                {user.displayName === null ? "kosong" : user.displayName}
              </p>
              <p>Email : {user.email === null ? "kosong" : user.email}</p>
              <p>
                Terverifikasi : {user.emailVerified === false ? "Tidak" : "Ya"}
              </p>
              <p>
                Nomor Handpone :{" "}
                {user.phoneNumber === null ? "kosong" : user.phoneNumber}
              </p>
            </Grid>
            <Grid>
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
              >
                <Avatar
                  style={{ width: 150, height: 150, marginBottom: "15px" }}
                  alt={user.displayName}
                  src={form.file.image || user.photoURL}
                />
                <input
                  style={{ marginTop: "15px" }}
                  name="image"
                  type="file"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
          </Grid>
          <Button onClick={handleSubmit} variant="contained" color="primary">
            submit
          </Button>
        </Paper>
      </Container>
    </>
  );
};

export default EditProfile;
