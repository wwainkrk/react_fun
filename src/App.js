import React, { Component } from 'react';
import './App.css';

function ListItem(props) {
  return (
    <li>{props.value}</li>
  )
}

function NumberList(props) {
  const numbers = props.numbers;
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
      </div>
    )
  }
}


export default App;
