import React from 'react';
import { NavBar} from './components/NavBar/NavBar';
import { Slider } from './components/Slider/slider';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

function App() {
  return (
    <Wrapper>
      <NavBar></NavBar>
      <Slider cardTemplate={'Person'}/>
    </Wrapper>
  );
}

export default App;
