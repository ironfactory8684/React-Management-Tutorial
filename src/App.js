import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

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
  return (
    <div>
      {customers.map(c => {  return (<Customer key={c.id} id={c.id} img={c.image} name={c.name}
            birthday={c.birthday} gender={c.gender} job={c.job}/>)})}
    </div>
  );
}
}

export default App;
