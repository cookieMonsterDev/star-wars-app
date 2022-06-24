import React from 'react';
import { getData } from './typescript/getData';
import { NavBar} from './components/navBar/NavBar';
import { WelcomePage } from './components/welcomePage/welcomePage';


function App() {
  return (
    <div>
      <WelcomePage />
    </div>
  );
}

export default App;
