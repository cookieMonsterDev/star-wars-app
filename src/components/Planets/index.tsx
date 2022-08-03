import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getRandomNumber } from '../../typescript/getForceSide';

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
    async function getData() {
      const Data = await getRandomNumber();
      setData(Data);
    }
  
    getData();
  }, [])

  console.log(data)

  return (
    <Container>
    
    </Container>
  );
}

export default Planets;