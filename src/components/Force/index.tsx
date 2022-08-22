import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { getForceSide } from '../../typescript/getForceSide';
import LightSaber from './components/LightSaber';

const Container = styled.div`
  position: absolute;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 7em;
  bottom: 4em;

  background-color: white;
`;

const Force = () => {

  const [isSith, setSith] = useState<boolean>(false);
  const [isJedi, setJedi] = useState<boolean>(false);
  const [isUnique, setUnique] = useState<boolean>(false);

  const handleClick = async () => {
    let value = await getForceSide();

    if (value === 'unique') {
      setSith(prev => prev = false);
      setJedi(prev => prev = false);
      setUnique(prev => prev = true);
    };

    if (value === 'sith') {
      setSith(prev => prev = true);
      setJedi(prev => prev = false);
      setUnique(prev => prev = false);
    };

    if (value === 'jedi') {
      setSith(prev => prev = false);
      setJedi(prev => prev = true);
      setUnique(prev => prev = false);
    };
  };

  return (
    <Container> 
      <LightSaber 
        isSith={isSith}
        isJedi={isJedi}
        isUnique={isUnique}/>
    <button onClick={handleClick}>Change state</button>
    </Container>
  );
}

export default Force;