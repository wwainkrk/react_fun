import React, { Component } from 'react';
import './App.css';

// function ListItem(props) {
//   return (
//     <li>{props.value}</li>
//   )
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   return(
//     <ul>
//       {numbers.map((number) =>
//         <ListItem key={number.toString()} value={number*2} />
//       )}
//     </ul>
//   )
// }
function Hello (props) {
  return (
    <h1>Welcome {props.user.name} {props.user.surname}</h1>
  );
}

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <Hello user={this.props.user}/>
        <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

class App extends Component {
  render() {
    //const numbers = [1,2,3,4,5];
    const author = {
        name: 'Sebastian',
        surname: 'Warszawa'
    };

    return (
      <div className="App">
        {/* <NumberList numbers={numbers}></NumberList> */}
        <Clock user={author} />
      </div>
    );

    setInterval(Clock.state, 1000);
  }
}


export default App;
