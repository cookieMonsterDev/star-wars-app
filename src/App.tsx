import React from 'react';

const URL = 'https://swapi.dev/api/planets/1/'

const getData = () => {
  fetch(URL)
    .then(response => {
      return response.json();
  }).then(json => console.log(json))
};



function App() {
  return (
    <div>
      <button onClick={getData}>Star Wars</button>
    </div>
  );
}

export default App;
