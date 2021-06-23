import { Divider,Typography, Input,Button,TextField} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';
import InputAdornment from '@material-ui/core/InputAdornment';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Notifications from '@material-ui/icons/Notifications'
import gray from '@material-ui/core/colors/grey'
import green from '@material-ui/core/colors/green'
import Pagination from '@material-ui/lab/Pagination';


const StyledTableCell = withStyles((theme) => ({
  head: {
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



const StyledView=styled.div`
width: 100%;
min-height: 60vh;
background-color:transparent;
.header{
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    
}

`;

const rows = [
{id:'001',name:'Mubarak Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'002',name:'Musa Ibrahim',section:'Junior',classs:'JSS1',statuss:'Active'},
{id:'003',name:'Nibrass Koltal',section:'Play Class',classs:'NURSERY',statuss:'Active'},
{id:'004',name:'Mutafa dotzee',section:'Drop Out',classs:'DROP OUT',statuss:'NOT Active'}
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});
export default function ViewStaff() {
  const classes = useStyles();
    return (
      <StyledView>
        <Typography style={{marginLeft:'10px'}} variant="button" display="block" gutterBottom>
        Payment Details
      </Typography>
          <Divider></Divider>
          <div className='header'>
          <Typography style={{marginLeft:'10px'}} variant="caption" display="block" gutterBottom>
      Show
      </Typography>
      <Input style={{width:'40px',height:'30px',marginLeft:'20px'}} color='primary' type='number'></Input>
      <Typography style={{marginLeft:'10px'}} variant="caption" display="block" gutterBottom>
      entries
      </Typography>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}} variant="contained" color="primary">
  PDF
</Button>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}}  variant="contained" color="primary">
  EXCELL
</Button>
<Button style={{backgroundColor:'#1E7F95',marginLeft:'20px',height:'30px'}}  variant="contained" color="primary">
  csv
</Button>
<TextField
        color='#FFC305'
        style={{marginLeft:'30px',width:'40%',marginRight:'10px',marginTop:'5px'}}
        id="input-with-icon-adornment"
        type='search'
        label="Search By Id or Name"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <SearchIcon></SearchIcon>
            </InputAdornment>
          ),
        }}
      />
          </div>
          <TableContainer style={{marginTop:'20px'}} component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow style={{backgroundColor:gray[500]}} >
            <StyledTableCell>S/N</StyledTableCell>
            <StyledTableCell align="right">ID NUMBER</StyledTableCell>
            <StyledTableCell align="right">NAME</StyledTableCell>
            <StyledTableCell align="right">SECTION</StyledTableCell>
            <StyledTableCell align="right">CLASS</StyledTableCell>
            <StyledTableCell align="right">STATUS</StyledTableCell>
            <StyledTableCell align="right">ACTIONS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,ind) => (
            <StyledTableRow key={ind}>
              <StyledTableCell component="th" scope="row">
                {ind+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.id}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">{row.section}</StyledTableCell>
              <StyledTableCell align="right">{row.classs}</StyledTableCell>
              <StyledTableCell align="right">{row.statuss}</StyledTableCell>
              <StyledTableCell align="right">
             <Button style={{backgroundColor:green[400],color:'white'}} variant='outlined'>Reciept</Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    

      </StyledView>
    )
}
