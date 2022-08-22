import styled from 'styled-components';

interface LightSaberProps {
  isSith?: boolean;
  isJedi?: boolean;
  isUnique?: boolean;
};

const Box = styled.div<LightSaberProps>`
  width: 10em;
  height: 10em;
  border: 5px solid black;
  margin: 50px;

  background-color: yellow;

  ${({isSith}) => isSith && `background-color: red;`}

  ${({isJedi}) => isJedi && `background-color: blue;`}

  ${({isUnique}) => isUnique && `background-color: pink;`}
`;

const LightSaber = (props: LightSaberProps) =>  {
  return (
    <Box 
      isSith={props.isSith}
      isJedi={props.isJedi}
      isUnique={props.isUnique}/>
  );
}

export default LightSaber;