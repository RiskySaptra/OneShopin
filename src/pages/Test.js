import React from "react";

import { data } from "./dummy";

import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import Paper from "@material-ui/core/Paper";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Checkbox from "@material-ui/core/Checkbox";

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

function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value.value}
        onChange={e => setValue({label: e.target.value, value: e.target.value})}
      />
    </form>
  );
}

const Test = () => {
  const classes = useStyles();

  const [filter, setFilter] = React.useState([
    // {label: '25 tahun', value: 25}
  ]);

  const addTodo = text => {
    console.log(text);
    const newFilter = [...filter,  text ];
    setFilter(newFilter);
  };


  const [datass, setDatass] = React.useState([])

  const handleDelete = (chipToDelete) => () => {
    setFilter(() =>
    filter.filter((chip) => chip.key !== chipToDelete.key)
    );
  };


  const filters = () => {
    if (filter.length > 0){
      setDatass(data.filter(item => filter.some(itm => itm.value === item.age)))
    } else {
      setDatass(data)
    }
  }
  
  React.useEffect(() => {
    filters()
  }, [filter]);



  return (
    <>
      <Paper component="ul" className={classes.root}>
        {filter.map((data) => {
          let icon;
          return (
            <li >
              <Chip
                icon={icon}
                label={data.label}
                onDelete={
                 handleDelete(data)
                }
                className={classes.chip}
              />
            </li>
          );
        })}
      </Paper>
      <TodoForm addTodo={addTodo} />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell component="th" scope="row" padding='checkbox'>
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
          <TableBody>
            {datass.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row" padding='checkbox'>
                <Checkbox
                  checked={false}
                  // onChange={handleChange}
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
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Test;
