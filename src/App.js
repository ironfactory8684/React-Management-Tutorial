import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop : theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  },
  canvas: {
    width:500,
    height:343,
    background: 'blue'
  }
})

const customers = [{
  'id':1,
  'image':'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday': '961122',
  'gender': '남자',
  'job': '대학생',
},
{
  'id':2,
  'image':'https://placeimg.com/64/64/2',
  'name' : '신사임당',
  'birthday': '940627',
  'gender': '여자',
  'job': '교수',
},
{
  'id':3,
  'image':'https://placeimg.com/64/64/3',
  'name' : '별주부',
  'birthday': '980231',
  'gender': '간성',
  'job': '교직원',
}]
class App extends Component {
  render() {
    const {classes} = this.props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell>img</TableCell>
            <TableCell>name</TableCell>
            <TableCell>gender</TableCell>
            <TableCell>birthday</TableCell>
            <TableCell>job</TableCell>
          </TableRow>

        </TableHead>
      <TableBody>
      {customers.map(c => {return (<Customer key={c.id} id={c.id} img={c.image} name={c.name}
            birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
      </TableBody>    
      </Table>
      <canvas id="myCanvas" class="canvas"></canvas>
    </Paper>
  );
}
}

export default withStyles(styles)(App);
