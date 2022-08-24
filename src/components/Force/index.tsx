import { useState } from 'react';
import styled from 'styled-components';
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

  const TIMEOUT = 1000;

  const [isSith, setSith] = useState<boolean>(false);
  const [isJedi, setJedi] = useState<boolean>(false);
  const [isUnique, setUnique] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = async () => {
    setIsLoading(prev => prev = true);
    let value = await getForceSide();

    setTimeout(() => {
      if (value === 'unique') {
        setSith(prev => prev = false);
        setJedi(prev => prev = false);
        setUnique(prev => prev = true);
        setIsLoading(prev => prev = false);
      };
  
      if (value === 'sith') {
        setSith(prev => prev = true);
        setJedi(prev => prev = false);
        setUnique(prev => prev = false);
        setIsLoading(prev => prev = false);
      };
  
      if (value === 'jedi') {
        setSith(prev => prev = false);
        setJedi(prev => prev = true);
        setUnique(prev => prev = false);
        setIsLoading(prev => prev = false);
      };
    }, TIMEOUT);
  };

  return (
    <Container> 
      <LightSaber 
        isSith={isSith}
        isJedi={isJedi}
        isUnique={isUnique}
        isOn={isLoading}/>
    <button onClick={handleClick}>Change state</button>
    </Container>
  );
}

export default Force;