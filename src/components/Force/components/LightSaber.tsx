import styled, { keyframes, css} from 'styled-components';

interface LightSaberProps {
  isSith?: boolean;
  isJedi?: boolean;
  isUnique?: boolean
  isOn?: boolean;
  isGreen?: boolean;
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

const glowD = keyframes`
    from {
      box-shadow: 0 0 12px yellow; 
    }
    50% {
      box-shadow: 0 0 23px yellow; 
    }
    to {
      box-shadow: 0 0 9px yellow; 
    }
`;

const glowP = keyframes`
    from {
      box-shadow: 0 0 12px pink; 
    }
    50% {
      box-shadow: 0 0 23px pink; 
    }
    to {
      box-shadow: 0 0 9px pink; 
    }
`;

const glowB = keyframes`
    from {
      box-shadow: 0 0 12px blue; 
    }
    50% {
      box-shadow: 0 0 23px blue; 
    }
    to {
      box-shadow: 0 0 9px blue; 
    }
`;

const glowR = keyframes`
    from {
      box-shadow: 0 0 12px red; 
    }
    50% {
      box-shadow: 0 0 23px red; 
    }
    to {
      box-shadow: 0 0 9px red; 
    }
`;

const glowG = keyframes`
    from {
      box-shadow: 0 0 12px green; 
    }
    50% {
      box-shadow: 0 0 23px green; 
    }
    to {
      box-shadow: 0 0 9px green; 
    }
`;

const Saber = styled.div<LightSaberProps>`
  position: absolute;
  top: 2em;
  border-radius: 10px;
  width: 20px;
  height: 100%;
  background-color: yellow;
  animation: ${glowD} 3s linear infinite;

  ${({isSith}) => isSith && css`
    background-color: red;
    animation: ${glowR} 3s linear infinite;
  `}

  ${({isJedi}) => isJedi && css<LightSaberProps>`
    background-color: ${({isGreen}) => isGreen ? 'green' : 'blue'};
    animation: ${({isGreen}) => isGreen ? glowG : glowB} 3s linear infinite;
  `}

  ${({isUnique}) => isUnique && css`
    background-color: pink;
    animation: ${glowP} 3s linear infinite;
  `}
`;

const LightSaber = (props: LightSaberProps) =>  {

  return (
    <>
    <Container isOn={!props.isOn}>
      <div>
      <Saber
        isGreen={props.isGreen} 
        isSith={props.isSith}
        isJedi={props.isJedi}
        isUnique={props.isUnique}
        ></Saber>
      </div>
    </Container>
    </>
  );
}

export default LightSaber;