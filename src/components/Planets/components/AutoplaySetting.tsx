import React, { useState } from 'react';
import styled from 'styled-components';

interface AutoplaySetting {
  delay?: number
  action?: React.Dispatch<React.SetStateAction<number>>,
}

const Container = styled.div`
  width: 30em;
  height: 10em;
  z-index: 20;
  background-color: white;
`;

const AutoplaySetting = (props: AutoplaySetting) => { 

  const [number, setNumber] = useState<any>('');

  const handalClick = (number: number) => {
    props.action?.(number);
  };

  return (
    <Container>
      <input onChange={(e) => setNumber(e.target.value)}></input>
      <button onClick={() => handalClick(number)}>Set number</button>
      {props.delay}
    </Container>
  );
}

export default AutoplaySetting;