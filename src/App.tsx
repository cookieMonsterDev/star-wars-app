import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import { Slider } from './components/Slider/slider';
import People from './components/People/People';
import Films from './components/Films/Films';
import InfoBar from './components/InfoBar/InfoBar';


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const A = styled.div`
  height: 100%;
`

function App() {
  return (
      <Router>
        <Wrapper>
          <NavBar />
          <A><Switch>
            <Route exact path="/" component={Slider}/>
            <Route path="/people" component={People}/>
            <Route path="/films" component={Films}/>
            <Route path="/starships" component={Films}/>
            <Route path="/vehicles" component={Films}/>
            <Route path="/species" component={Films}/>
            <Route path="/planets" component={Films}/>
          </Switch>
          </A>
          
          <InfoBar />
        </Wrapper>
      </Router>
  );
}

export default App;


{/* <NavBar></NavBar>
      <Slider cardTemplate={'Person'}/> */}