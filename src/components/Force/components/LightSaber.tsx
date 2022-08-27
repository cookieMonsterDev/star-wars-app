import styled, { keyframes, css} from 'styled-components';

interface LightSaberProps {
  isSith?: boolean;
  isJedi?: boolean;
  isUnique?: boolean
  isOn?: boolean;
  isGreen?: boolean;
};

const LightSaber = (props: LightSaberProps) =>  {

  return (
    <Warpper>
      <ContainerSaber isOn={!props.isOn}>
        <div>
        <Saber
          isGreen={props.isGreen} 
          isSith={props.isSith}
          isJedi={props.isJedi}
          isUnique={props.isUnique}
          >
        </Saber>
        </div>
      </ContainerSaber>
      <ContainerHolder>
        <Holder />
      </ContainerHolder>
    </Warpper>
  );
}

export default LightSaber;

const Warpper = styled.div`
  position: relative;
  width: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ContainerSaber = styled.div<LightSaberProps>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 5em;
  height: 40em;
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

const ContainerHolder = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const glowD = keyframes`
    from {
      box-shadow: 0 0 12px #F6B214; 
    }
    50% {
      box-shadow: 0 0 23px #F6B214; 
    }
    to {
      box-shadow: 0 0 10px #F6B214; 
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
      box-shadow: 0 0 10px pink; 
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
      box-shadow: 0 0 10px blue; 
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
      box-shadow: 0 0 10px red; 
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
      box-shadow: 0 0 10px green; 
    }
`;

const Saber = styled.div<LightSaberProps>`
  position: absolute;
  top: 2em;
  border-radius: 10px;
  width: 1em;
  height: 100%;
  background-color: #F6B214;
  animation: ${glowD} 3s linear infinite;

  ${({isSith}) => isSith && css`
    background-color: red;
    animation: ${glowR} 3s linear infinite;
  `}

  ${({isJedi}) => isJedi && css<LightSaberProps>`
    background-color: ${({isGreen}) => isGreen ? 'green' : '#20a5fd'};
    animation: ${({isGreen}) => isGreen ? glowG : glowB} 3s linear infinite;
  `}

  ${({isUnique}) => isUnique && css`
    background-color: pink;
    animation: ${glowP} 3s linear infinite;
  `}
`;

const Holder = styled.div`
  width: 1em;
  height: 8em;
  border-radius: 0 0 4px 4px;
  background-image: linear-gradient(
    silver 0 10px,
    orange 0 14px,
    silver 0 15px,
    black 0 20px,
    silver 0 22px,
    black 0 25px,
    silver 0 27px,
    black 0 30px,
    silver 0 32px,
    black 0 35px,
    silver 0 37px,
    black 0 40px,
    silver 0 42px,
    black 0 45px,
    silver 0 47px,
    black 0 50px,
    silver 0 60px,
    orange 60px 100px,
    silver 50px 100%);
`;
