import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function DataTable({data}) {
    const classes = useStyles();
    const columns = data[0] && Object.keys(data[0]);
    return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead >
          <TableRow>
          {data[0] && columns.map((heading) => <TableCell style={{backgroundColor:"#3f51b5", color:"#ffffff"}}><b>{heading.toUpperCase()}</b></TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
        {data.map((row) => (
          <TableRow>
            {columns.map((column) => (
              <TableCell>{row[column]}</TableCell>
            ))}
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}
