import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Image0 from '../img/00.jpg';
import Weather from './Weather';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(Itinerary, Days, Altitude, Time) {
  return { Itinerary, Days, Altitude, Time };
}

const rows = [
  createData('Arrive Ktm',1, '1350 M', 'Your Time'),
  createData('Drive to Tatopani',2, '1020 M', '7-9 hrs'),
  createData('Trek to Banskharka',3, '1234 M', '5-7 hrs'),
  createData('Trek to Nagi',4,'2230M', '6hrs'),
  createData('Trek to Mohare Dhada',5,'3300 M','7hrs'),
  createData('Departure to Ktm',6, '1350 M', '10-14 hrs'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <div className="section" style={{ width: "100%", height:"auto", float:"left"}}>
    <div className="head">
        <h1 className="tree">Mohare Dada Trek Itinerary</h1>
    </div>


    <TableContainer component={Paper} style={{ width: "60%", height:"auto", float: "left"}}>
      <Table className={classes.table} aria-label="customized table" style={{ width: "100%", height:"auto", justifyContent:"center", marginTop:"30px"}}>
        <TableHead>
          <TableRow>
            <StyledTableCell>Itinerary</StyledTableCell>
            <StyledTableCell align="right">Days</StyledTableCell>
            <StyledTableCell align="right">Altitude</StyledTableCell>
            <StyledTableCell align="right">Time</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.Itinerary}>
              <StyledTableCell component="th" scope="row">
                {row.Itinerary}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Days}</StyledTableCell>
              <StyledTableCell align="right">{row.Altitude}</StyledTableCell>
              <StyledTableCell align="right">{row.Time}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

    <div className="right-side" style={{ width: "40%", height:"auto", float:"right" }}>
    <Weather />
    </div>
    </div>
  );
}
