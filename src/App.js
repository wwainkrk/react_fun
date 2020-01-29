import React, { Component } from 'react';
import './App.css';

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
  //const doubleNumbers = numbers.map((number) => number*2);
  //const listDobule = doubleNumbers.map((double) =>
  // const listNumbers = numbers.map((number) =>
  //   <ListItem key={number.toString()} value={number*2} />
  // );
  // return (
  //   <ul>{listNumbers}</ul>
  // );
  return(
    <ul>
      {numbers.map((number) =>
        <ListItem key={number.toString()} value={number*2} />
      )}
    </ul>
  )
}

class App extends Component {
  render() {
    const numbers = [1,2,3,4,5];
    return (
      <div className="App">
        <NumberList numbers={numbers}></NumberList>
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
