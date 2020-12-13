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

import FilterForm from "./FilterForm";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    listStyle: "none",
    padding: theme.spacing(0.5),
    margin: 0,
  },
  chip: {
    margin: theme.spacing(0.5),
  },
}));

const Test = () => {
  const classes = useStyles();

  const [filterTable, setFilterTable] = React.useState([
    // { label: "universitas", value: "memek" },
    // { label: "nama", value: "asrool" },
  ]);

  const addFilters = (newArr) => {
    const cleanArr = newArr.filter((arr) => arr); // remove empty element
    const newFilter = [...filterTable, ...cleanArr];
    setFilterTable(newFilter);
  };

  const [datass, setDatass] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setFilterTable(() =>
      filterTable.filter((chip) => chip.value !== chipToDelete.value)
    );
  };

  const filters = () => {
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
  };

  React.useEffect(() => {
    filters();
  }, [filterTable]);

  return (
    <>
      <Paper component="ul" className={classes.root} elevation="0">
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
      <FilterForm addFilters={addFilters} />
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
    </>
  );
};

export default Test;
