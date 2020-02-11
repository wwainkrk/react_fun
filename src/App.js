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

/**
 * Exported other function component for Invitation on webpage
 * @param {*} props 
 */
function Hello (props) {
  return (
    <h1>Welcome {props.user.name} {props.user.surname}</h1>
  );
}

/** 
 * Class component for Clock with Hello component
*/

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };

    this.handleClick = this.handleClick.bind(this);                     // Set class method for instance (not default in Javascript)
  }

  componentDidMount() {                                                 // Set timer for component Clock, when component will be mount
    this.timerId = setInterval(
        () => this.tick(),
        1000
      );
  }

  componentWillUnmount() {                                              // Delete timer, when component will be unmount
    clearInterval(this.timerId);
  }

  tick() {                                                              // Set timer per second, full date
    this.setState({
      date: new Date()
    });
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (                                                            // Put small function component into the class component with timer, initialization Date State
      <div>
        <Hello user={this.props.user}/>                                 
        <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}</h2>
        <button onClick={this.handleClick}>
          {this.state.isToggleOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  }
}

class App extends Component {                                           // The main component, which will be mount in index.js    
  render() {
    //const numbers = [1,2,3,4,5];
    const author = {
        name: 'Sebastian',
        surname: 'Warszawa'
    };

    return (
      <div className="App">
        {/* <NumberList numbers={numbers}></NumberList> */}
        <Clock user={author} />                                         {/* Mount class component with json array with props */}
      </div>
    );

    //setInterval(Clock.state, 1000);
  }
}


export default App;
