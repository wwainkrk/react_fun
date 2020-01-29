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

function Clock(props) {
  return (
    <div>
      <Hello user={props.user}/>
      <h2>Aktualny czas: {props.date.toLocaleTimeString()}</h2>
    </div>
  );
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
        <Clock user={author} date={new Date()} />
      </div>
    );
  }
}


export default App;
