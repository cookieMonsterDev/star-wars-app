import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 7em;
  bottom: 4em;
`;

const Test = styled.div`
  color: white;
`;

const Home = () => {
  return (
    <Container>
    <Test>
      Hi my name is Mykhailo
    </Test>
    </Container>
  );
}

export default Home;