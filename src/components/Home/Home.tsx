import styled from 'styled-components';

const Home = () => {
  return (
    <Container>
      <Text>
      <h1>Hi, I'm Mykhailo</h1>
      <p>Im the beginer JS developer, that simple App is based on SWAPI. 
        The App does only severl things, get data from SAWPI and displays it 
        within React. Also there is an option to get your Force side using random.org API.  
        
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
  width: 60em;
  color: white;

  > h1 {
    letter-spacing: 2px;
    font-size: 3em;
    font-family: 'Distant Galaxy', sans-serif;
    user-select: none;
  }

  > p {
    text-align: justify;
    font-weight: 400;
    font-size: 2em;
    font-family: 'Invisible', sans-serif;
  }
`;