import React, { useContext, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  CssBaseline,
  useScrollTrigger,
  Slide,
  Popover,
  IconButton,
  MenuItem,
  Grid,
} from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useStyles } from "./styles/appbar";
import { signout } from "../helpers/auth";
import { Context } from "../_store/StoreProvider";
import { useHistory } from "react-router-dom";

function HideOnScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const AppBars = (props) => {
  let history = useHistory();
  const classes = useStyles();
  const [state] = useContext(Context);
  const { authenticated, user, loading } = state;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleHome = () => {
    history.push("/");
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const SignOuts = (event) => {
    setAnchorEl(null);
    signout();
  };

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography
              variant="h6"
              className={classes.title}
              onClick={handleHome}
            >
              OneShopin
            </Typography>
            {loading === true ? (
              "Loading..."
            ) : (
              <>
                {authenticated === true ? (
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Typography variant="subtitle2" component="p">
                      {user.displayName === null
                        ? user.email
                        : user.displayName}
                    </Typography>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Grid>
                ) : (
                  <Grid
                    container
                    direction="row"
                    justify="flex-end"
                    alignItems="center"
                  >
                    <Typography variant="subtitle2" component="p">
                      Guest
                    </Typography>
                    <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      onClick={handleMenu}
                      color="inherit"
                    >
                      <AccountCircle />
                    </IconButton>
                  </Grid>
                )}
              </>
            )}
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
              onClose={handleClose}
            >
              {authenticated === true ? (
                <>
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={SignOuts}>Logout</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem onClick={handleClose}>What do you want ?</MenuItem>
                </>
              )}
            </Popover>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
};

export default AppBars;
