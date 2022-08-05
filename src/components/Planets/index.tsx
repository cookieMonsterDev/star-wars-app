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

const Planets = () => {

  const [data, setData] = useState<any>('')

  useEffect(() => {
  }, [])

  return (
    <Container>
    
    </Container>
  );
}

export default Planets;