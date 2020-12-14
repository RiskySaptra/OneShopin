import React from "react";

import { Button, Grid, TextField } from "@material-ui/core";

// add new object for new filter label (NOTE: (label = object key) and (value = object value) )
const fields = [
  { label: "Universitas", name: "universitas", type: "text" },
  { label: "Jurusan", name: "jurusan", type: "autoselect" },
  { label: "Ipk", name: "ipk", type: "text" },
  { label: "Umur", name: "age", type: "number" },
];

const FilterForm = ({ addFilters }) => {
  const [value, setValue] = React.useState([]);

  const handleChange = (index, e) => {
    let newArr = [...value];
    newArr[index] = {
      label: e.target.name,
      value: e.target.name === "age" ? Number(e.target.value) : e.target.value,
    };
    setValue(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addFilters(value);
    setValue([]);
  };

  return (
    <Grid
      container
      direction="column"
      justify="center"
      alignItems="center"
      //   style={{ marginLeft: "5%", marginBottom: "5%" }}
    >
      <h2>Filters</h2>
      {fields.map((field, index) => (
        <>
          {/* NOTE: textfield can be anything. just add identity to your field and
          careful with date and float range. */}
          <p style={{ marginBottom: "0" }}>{field.label}</p>
          <TextField
            // label={field.label} this shit buging
            name={field.name}
            key={index}
            type={field.type}
            value={value.length > 0 ? value.value : ""}
            onChange={(e) => handleChange(index, e)}
            variant="outlined"
            margin="dense"
          />
        </>
      ))}
      <Button
        variant="contained"
        color="primary"
        disableElevation
        onClick={handleSubmit}
        margin="dense"
        style={{ marginTop: "2%" }}
      >
        Add Filter
      </Button>
    </Grid>
  );
};

export default FilterForm;
