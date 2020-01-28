import React, { Component } from 'react';
import './App.css';

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

class App extends Component {
  render() {
    return (
      <div className="App">
        {list.map(function(item) {
          //console.log(list);
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )
        })}
      </div>
    )
  }
}

/*
function App() {
  function formatName(user) {
    return user.name + ' ' + user.surname;
  }

  var user = {
    name: 'Sebastian',
    surname: 'Warszawa'
  }

  var helloWorld = 'Welcome FEV ' + formatName(user) + ', you are on the Road to learn React';
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
    </div>
  );
  */

export default App;
