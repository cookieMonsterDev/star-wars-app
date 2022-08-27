import { useReducer, useState } from 'react';
import styled from 'styled-components';
import { getForceSide } from '../../typescript/getForceSide';
import LightSaber from './components/LightSaber';
import { INIT_STATE, saberReducer } from './components/saberReducer';
 
interface Anim {
  isLoading?: boolean;
};

const Force = () => {

  const TIMEOUT = 1000;

  const [state, dispatch] = useReducer(saberReducer, INIT_STATE);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [label, setLabel] = useState<string>('');

  const handleClick = async () => {
    dispatch('');
    setIsLoading(prev => prev = true);
    let value = await getForceSide();
  
    setTimeout(() => {
      if (value === 'unique') {
        dispatch(value);
        setIsLoading(prev => prev = false);
        setLabel(prev => prev = `You are ${value}`);
      };
  
      if (value === 'sith') {
        dispatch(value);
        setIsLoading(prev => prev = false);
        setLabel(prev => prev = `You are ${value}`);
      };
  
      if (value === 'jedi') {
        dispatch(value);
        setIsLoading(prev => prev = false);
        setLabel(prev => prev = `You are ${value}`);
      };
    }, TIMEOUT);
  };

  return (
    <Container>
      <LightSaberWrapperLeft>
        <LightSaber 
          isSith={state.isSith}
          isJedi={state.isJedi}
          isUnique={state.isUnique}
          isOn={isLoading}/>
      </LightSaberWrapperLeft>
      <LightSaberWrapperRight>
        <LightSaber 
            isSith={state.isSith}
            isJedi={state.isJedi}
            isUnique={state.isUnique}
            isOn={isLoading}
            isGreen={true}/>
      </LightSaberWrapperRight>
      <Label isLoading={isLoading}>{!isLoading && label}</Label>
    <Button onClick={handleClick}>Get your Force side</Button>
    </Container>
  );
}

export default Force;

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
`;

const Button = styled.button`
  position: absolute;
  bottom: 3em;
  cursor: pointer;
  text-align: center;
  outline: none;
  margin-top: 5em;
  width: 15em;
  border-radius: 5em;
  height: 2em;
  font-size: 2em;
  color: white;
  background: black;
  border: white 5px solid;
  transition: all 700ms;

  &:hover {
    background: white;
    color: black;
  }
`;

const LightSaberWrapperLeft = styled.div`
  position: absolute;
  left: 30em;
  transform: rotate(35deg);
`;

const LightSaberWrapperRight = styled.div`
  position: absolute;
  right: 30em;
  transform: rotate(-35deg);
`;

const Label = styled.div<Anim>`
  color: white;
  opacity: 0;
  font-weight: 600;
  font-size: 2.5em;
  font-family: 'Invisible', sans-serif;
  transition: all 2000ms;
  
  ${({isLoading}) => !isLoading && `opacity: 1;`}
`;