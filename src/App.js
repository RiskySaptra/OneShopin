import React, { useEffect, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import { Home, Signup, Login, Profile, Test } from "./pages/Index.js";
import { PublicRoute, PrivateRoute } from "./routing/Index.js";
import { AppBars, Loading } from "./componets/Index";
import { Context } from "./_store/StoreProvider";
import { auth } from "./config";

const NotFound = () => <h1>Kemana Bro 404</h1>;

const App = () => {
  const [state, dispatch] = useContext(Context);
  const { authenticated, loading } = state;

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      user
        ? dispatch({ type: "SET_AUTH", payload: user })
        : dispatch({ type: "SET_NO_AUTH", payload: null });
    });
  }, [dispatch]);

  return (
    <>
      <AppBars />
      {loading === true ? (
        <Loading />
      ) : (
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute
            path="/profile"
            authenticated={authenticated}
            component={Profile}
          />
          <PrivateRoute
            path="/test"
            authenticated={authenticated}
            component={Test}
          />
          <PublicRoute
            path="/signup"
            authenticated={authenticated}
            component={Signup}
          />
          <PublicRoute
            path="/login"
            authenticated={authenticated}
            component={Login}
          />
          <Route component={NotFound} />
        </Switch>
      )}
    </>
  );
};

export default App;
