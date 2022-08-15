import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { getForceSide } from '../../typescript/getForceSide';

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

interface Test {
  something: string
};


const Force = () => {

  const [data, setData] = useState<string | undefined>('');

  const handleClick = async () => {
    let value = await getForceSide();
    setData(value);
  };

  useEffect(() => {
  }, [data]);

  return (
    <Container> 

     
    </Container>
  );
}

export default Force;