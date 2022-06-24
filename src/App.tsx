import React from 'react';
import { getData } from './typescript/getData'


function App() {
  return (
    <div>
      <button onClick={() => getData(5, 1)}>Star Wars</button>
    </div>
  );
}

export default App;
