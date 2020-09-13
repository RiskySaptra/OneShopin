import React from "react";
import { TextField } from "@material-ui/core";

const Test = () => {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField
          margin="dense"
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
        />
      </form>
    </>
  );
};

export default Test;
