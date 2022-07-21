import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Responce } from '../../../typescript/getData';

const Anim = keyframes`
  from {
    height: 40em;
    width: 40em;
    opacity: 0;
  }
  to {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;

  background-color: white;

  animation: ${Anim} 700ms;
`;

const Tab = (props: Responce) => {
  return (
    <Container>
      <div>
        <h1>{props.name}</h1>
        <Link to={'/starships'}>Link</Link>
      </div>
    </Container>
  );
};

export default Tab;