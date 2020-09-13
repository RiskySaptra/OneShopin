import React, { useContext } from "react";
import Alert from "@material-ui/lab/Alert";
import { Collapse, IconButton } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { Context } from "../_store/StoreProvider";

const ColapseAlert = () => {
  const [state, dispatch] = useContext(Context);
  const { error, errorMsg } = state;
  return (
    <Collapse in={error}>
      <Alert
        severity="error"
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            size="small"
            onClick={() => {
              dispatch({ type: "SET_ERROR", payload: false });
            }}
          >
            <CloseIcon fontSize="inherit" />
          </IconButton>
        }
      >
        {error === true ? errorMsg.message : ""}
      </Alert>
    </Collapse>
  );
};
export default ColapseAlert;
