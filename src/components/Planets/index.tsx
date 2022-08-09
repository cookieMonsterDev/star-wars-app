import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 7em;
  bottom: 4em;

  background-color: white;
`;

const Test = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
  height: 500px;

  > svg {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    border: 5px solid white;
  }
`

const Planets = () => {

  const [data, setData] = useState<any>('')

  useEffect(() => {
  }, [])

  return (
    <Container>
      <Test>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" fill="black" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M 200 400 L 400 0 L 600 0 L 400 400 L 600 800 L 400 800 Z"/>
      </svg>
      </Test>
    </Container>
  );
}

export default Planets;