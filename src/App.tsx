import React from 'react';
import { getData, Resources } from './typescript/getData'


function App() {
  return (
    <div>
      <button onClick={() => getData(Resources.people, "/1")}>Star Wars</button>
    </div>
  );
}

export default App;
