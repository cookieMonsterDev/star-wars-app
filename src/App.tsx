import React from 'react';
import { getData } from './typescript/getData';
import { NavBar} from './components/NavBar/NavBar';
import { Slider } from './components/Slider/slider';
import { Card } from './components/Card/Card';


function App() {
  return (
    <div>
      {/* <Slider /> */}
      <Card></Card>
    </div>
  );
}

export default App;
