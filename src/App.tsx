import React from 'react';
import { NavBar} from './components/NavBar/NavBar';
import { Slider } from './components/Slider/slider';
import styled from 'styled-components';


const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Slider cardTemplate={'Person'}/>
    </Wrapper>
  );
}

export default App;
