import React, { useState, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import {
  Container,
  InputBase,
  Typography,
  Toolbar,
  AppBar,
  IconButton,
  Popover,
  MenuItem,
} from "@material-ui/core";
import { styles } from "./styles/appbar";

import { AccountCircle, ShoppingCart } from "@material-ui/icons";
import { signout } from "../helpers/firebaseAPI";
import { Context } from "../_store/StoreProvider";
import { useHistory } from "react-router-dom";

export default function SearchAppBar() {
  const [state] = useContext(Context);
  const classes = styles();
  const history = useHistory();

  const { authenticated, loading } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const gotoHome = () => history.push("/");
  const gotoProfile = () => history.push("/profile");

  const SignOuts = () => {
    setAnchorEl(null);
    signout();
  };

  const gotoTest = () => history.push("/test");
  return (
    <AppBar position="static">
      <Container>
        <Toolbar disableGutters>
          <Typography
            onClick={gotoHome}
            className={classes.title}
            variant="h6"
            noWrap
          >
            OneShopin
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          {loading === true ? (
            "Loading..."
          ) : (
            <>
              {authenticated === true ? (
                <>
                  {/* <Typography variant="subtitle2" component="p">
                    {user.displayName === null ? user.email : user.displayName}
                  </Typography> */}
                  <IconButton onClick={gotoTest} color="inherit">
                    <ShoppingCart />
                  </IconButton>
                  <IconButton
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton onClick={gotoTest} color="inherit">
                    <ShoppingCart />
                  </IconButton>
                  <IconButton
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
                </>
              )}
            </>
          )}
        </Toolbar>
        <Popover
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          open={open}
          onClose={() => setAnchorEl(null)}
        >
          {authenticated === true ? (
            <>
              <MenuItem onClick={gotoProfile}>Profile</MenuItem>
              <MenuItem onClick={SignOuts}>Logout</MenuItem>
            </>
          ) : (
            <>
              <MenuItem onClick={() => setAnchorEl(null)}>
                What do you want ?
              </MenuItem>
            </>
          )}
        </Popover>
      </Container>
    </AppBar>
  );
}
