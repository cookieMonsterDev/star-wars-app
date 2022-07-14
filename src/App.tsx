import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Slider } from './components/Slider/slider';
import People from './components/People/People';
import Films from './components/Films/Films';
import InfoBar from './components/InfoBar/InfoBar';
import img from './assets/images/space.jpg';


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  background-image: url(${img});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
`;

function App() {
  return (
      <Router>
        <Wrapper>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Slider}/>
            <Route path="/people" component={People}/>
            <Route path="/films" component={Films}/>
            <Route path="/starships" component={Films}/>
            <Route path="/vehicles" component={Films}/>
            <Route path="/species" component={Films}/>
            <Route path="/planets" component={Films}/>
          </Switch>
          <InfoBar />
        </Wrapper>
      </Router>
  );
}

export default App;


{/* <NavBar></NavBar>
      <Slider cardTemplate={'Person'}/> */}