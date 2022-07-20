import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Responce } from '../../../typescript/getData';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  height: 100%;

  background-color: white;
`;

const Tab = (props: Responce) => {
  return (
    <Container>
      <div>
        <h1>{props.name}</h1>
      </div>
    </Container>
  );
};

export default Tab;