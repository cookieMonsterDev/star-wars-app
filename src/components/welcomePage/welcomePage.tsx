import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: black;
`;

const Container = styled.div`
  width: 20em;
  height: 20em;
  margin: auto;
  margin-top: 12em;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ProjectName = styled.span`
  margin: auto;
  justify-content: center;
  
  
  color: yellow;
  font-size: 8em;
  font-weigth: 800;
  text-align: center;
  text-transform: uppercase;
`;

export const WelcomePage = () => {

  return (
    <Wrapper>
      <Container>
        <ProjectName>Star Wars</ProjectName>
      </Container>
    </Wrapper>
  )
};