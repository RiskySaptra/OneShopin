import React, { useContext } from "react";
import { useHistory, useRouteMatch, Switch, Route } from "react-router-dom";
import { Grid, Paper, Avatar, Button } from "@material-ui/core";
import { Context } from "../_store/StoreProvider";
import { EditProfile } from "./Index";

const Profile = () => {
  const [state] = useContext(Context);
  const { user } = state;

  const { path, url } = useRouteMatch();
  const history = useHistory();
  const gotoEditProfile = () => {
    history.push(`${url}/editProfile`);
  };

  return (
    <Switch>
      <Route exact path={path}>
        <Grid
          container
          direction="column"
          justify="flex-start"
          alignItems="center"
        >
          <Paper style={{ padding: "30px", marginTop: "15px" }}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Grid item>
                <p>ID: {user.uid === null ? "kosong" : user.uid}</p>
                <p>
                  Username:{" "}
                  {user.displayName === null ? "kosong" : user.displayName}
                </p>
                <p>Email : {user.email === null ? "kosong" : user.email}</p>
                <p>
                  Terverifikasi :{" "}
                  {user.emailVerified === false ? "Tidak" : "Ya"}
                </p>
                <p>
                  Nomor Handpone :{" "}
                  {user.phoneNumber === null ? "kosong" : user.phoneNumber}
                </p>
              </Grid>
              <Grid item style={{ marginLeft: "40px" }}>
                <Avatar
                  style={{ width: 180, height: 180 }}
                  alt={user.displayName}
                  src={state.photoURL || ""}
                />
              </Grid>
            </Grid>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
            >
              <Button
                style={{ marginTop: "30px" }}
                onClick={gotoEditProfile}
                variant="contained"
                color="primary"
              >
                EditProfile
              </Button>
            </Grid>
          </Paper>
        </Grid>
      </Route>
      <Route path={`${path}/editProfile`}>
        <EditProfile />
      </Route>
    </Switch>
  );
};

export default Profile;
