import React, { useState, useEffect } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { auth } from "./config";
import { Home, Signup, Login, Test } from "./pages/Index.js";
import { PublicRoute, PrivateRoute } from "./routing/Index.js";
import { AppBars } from "./componets/Index";

const NotFound = () => <h1>Kemana Bro 404</h1>;

const App = () => {
  const [authenticated, setAuthenticated] = useState({
    auth: false,
    laoding: true,
  });

  useEffect(() => {
    auth().onAuthStateChanged((user, authenticated) => {
      user
        ? setAuthenticated({ ...authenticated, auth: true, loading: false })
        : setAuthenticated({ ...authenticated, auth: false, loading: false });
    });
  }, []);

  return (
    <>
      <AppBars authenticated={authenticated.auth} />
      {authenticated.loading === true ? (
        <h2>Loading...</h2>
      ) : (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute
              path="/test"
              authenticated={authenticated.auth}
              component={Test}
            />
            <PublicRoute
              path="/signup"
              authenticated={authenticated.auth}
              component={Signup}
            />
            <PublicRoute
              path="/login"
              authenticated={authenticated.auth}
              component={Login}
            />
            <Route component={NotFound} />
          </Switch>
        </Router>
      )}
    </>
  );
};

export default App;
