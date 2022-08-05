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

const Box = styled.div<Test>`
  width: 100px;
  height: 100px;
  background-color: ${(props => props.something)}
`

const Force = () => {

  const [data, setData] = useState<string | undefined>('');
  const [sith, setSith] = useState<boolean>(false);
  const [jedi, setJedi] = useState<boolean>(false);
  const [unique, setUnique ] = useState<boolean>(false);

  let colo1: string = 'yellow';

  const handleClick = async () => {
    let value = await getForceSide();
    setData(value);
  };

  // need refactor 

  useEffect(() => {
  }, [data]);

  return (
    <Container> 
      <button onClick={handleClick}> Click </button>
      <div>{data}</div>
      <Box something={colo1}/>
    </Container>
  );
}

export default Force;