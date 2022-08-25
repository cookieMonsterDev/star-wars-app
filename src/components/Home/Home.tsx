import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Text>
      <p>Hi my name is Mike</p>
      <h1>Im someone</h1>
  
      <p>It is a period of civil war. Rebel spaceships, 
        striking from a hidden base, have won their first 
        victory against the evil Galactic Empire.
      </p>
      </Text>
    </Container>
  );
}

export default Home;

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

const Text = styled.div`
  color: white;
`;