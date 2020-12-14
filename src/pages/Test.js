import React from "react";

import { data } from "./dummy";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";

// form filter component
import FilterForm from "./FilterForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "start",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0),
    margin: 7,
  },
  chip: {
    margin: theme.spacing(0.3),
    marginLeft: 20,
  },
}));

const Test = () => {
  const classes = useStyles();
  const [filterTable, setFilterTable] = React.useState([
    // contoh filter
    { label: "age", value: 25 },
  ]);
  const [datass, setDatass] = React.useState([]);

  const addFilters = (newArr) => {
    const cleanArr = newArr.filter((arr) => arr); // remove empty element
    const newFilter = [...filterTable, ...cleanArr];
    setFilterTable(newFilter);
  };

  const handleDelete = (chipToDelete) => () => {
    setFilterTable(() =>
      filterTable.filter((chip) => chip.value !== chipToDelete.value)
    );
  };

  React.useEffect(() => {
    if (filterTable.length > 0) {
      setDatass(
        data.filter((item) =>
          filterTable.every((itm) => {
            return itm.value === item[itm.label];
          })
        )
      );
    } else {
      setDatass(data);
    }
  }, [filterTable]);

  return (
    <>
      <Paper component="ul" className={classes.root} elevation="0">
        <h2 style={{ margin: "0" }}>filter : </h2>
        {filterTable.map((data) => {
          let icon;
          return (
            <li>
              <Chip
                icon={icon}
                label={`${data.label} ${data.value}`}
                onDelete={handleDelete(data)}
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={2}>
          <FilterForm addFilters={addFilters} />
        </Grid>
        <Grid item xs={10}>
          {datass.length > 0 ? (
            <TableContainer component={Paper}>
              <Table className={classes.table} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell component="th" scope="row" padding="checkbox">
                      <Checkbox
                        checked={false}
                        // onChange={handleChange}
                        inputProps={{ "aria-label": "primary checkbox" }}
                      />
                    </TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>NIk</TableCell>
                    <TableCell>Umur</TableCell>
                    <TableCell>Tempat tgl beraks</TableCell>
                    <TableCell>uni</TableCell>
                    <TableCell>jurusan</TableCell>
                    <TableCell>ippk</TableCell>
                  </TableRow>
                </TableHead>
                {datass.map((row) => (
                  <TableBody>
                    <TableRow key={row.id}>
                      <TableCell component="th" scope="row" padding="checkbox">
                        <Checkbox
                          checked={false}
                          inputProps={{ "aria-label": "primary checkbox" }}
                        />
                      </TableCell>

                      <TableCell component="th" scope="row">
                        {row.nama}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.nik}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {`${row.age} tahun`}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {`${row.birthplace} ${row.date}`}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.universitas}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.jurusan}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {row.ipk}
                      </TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  </TableBody>
                ))}
              </Table>
            </TableContainer>
          ) : (
            <div style={{ width: "400px" }}>
              <h1> Kosong / tidak ditemukan </h1>
            </div>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Test;
