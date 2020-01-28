import React, { Component } from 'react';
import './App.css';

/*
const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
];
*/

class App extends Component {
  render() {
    const numbers = [1,2,3,4,5];
    const doubleNumbers = numbers.map((number) => number*2)
    const listDobule = doubleNumbers.map((double) =>
      <li>{double}</li>
    )
    return (
      <div className="App">
        <ul>{listDobule}</ul>
        {/* <ul>
          {doubleNumbers.map((item) =>
            //console.log(item);
            <li>{item}</li>
          )} 
        </ul> */}
      </div>
    )
  }
}


export default App;
