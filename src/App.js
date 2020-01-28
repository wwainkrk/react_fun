import React from 'react';
import './App.css';

function App() {
  function formatName(user) {
    return user.name + ' ' + user.surname;
  }

  var user = {
    name: 'Sebastian',
    surname: 'Warszawa'
  }

  var helloWorld = 'Welcome ' + formatName(user) + ', you are on the Road to learn React';
  return (
    <div className="App">
      <h2>{helloWorld}</h2>
    </div>
  );
}

export default App;
