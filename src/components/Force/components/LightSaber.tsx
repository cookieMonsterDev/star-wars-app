import { useState } from 'react';
import styled, { keyframes} from 'styled-components';

interface LightSaberProps {
  isSith?: boolean;
  isJedi?: boolean;
  isUnique?: boolean
  isOn?: boolean;
};

const Container = styled.div<LightSaberProps>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 5em;
  height: 20em;
  overflow: hidden;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    transition: all 1000ms;
    justify-content: center;
    transform: translateY(100%);

    ${({isOn}) => isOn && `transform: translateY(0)`}
  }
`;

const glow = keyframes`
    from {
      box-shadow: 0 0 9px lime; 
    }
    50% {
      box-shadow: 0 0 18px lime; 
    }
    to {
      box-shadow: 0 0 9px lime; 
    }
`;

const Saber = styled.div<LightSaberProps>`
  position: absolute;
  top: 2em;
  border-radius: 10px;
  width: 20px;
  height: 100%;
  background-color: yellow;
  transition: all 500ms;
  animation: ${glow} 3s linear infinite;

  ${({isOn}) => isOn && `transform: translateY(0)`}

  ${({isSith}) => isSith && `background-color: red;`}

  ${({isJedi}) => isJedi && `background-color: blue;`}

  ${({isUnique}) => isUnique && `background-color: pink;`}
`;

const LightSaber = (props: LightSaberProps) =>  {

  const[isOn, setOn] = useState<boolean>(true);

  const handleClick = () => {
    setOn(prev => !prev);
  };

  return (
    <>
    <Container isOn={isOn}>
      <div>
      <Saber isSith={props.isSith}
        isJedi={props.isJedi}
        isUnique={props.isUnique}
        ></Saber>
      </div>
    </Container>
    <button onClick={handleClick}> on / off</button>
    </>
  );
}

export default LightSaber;