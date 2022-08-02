import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
`;

const Sth = styled.section`
  display: flex;
  justify-content: center;
  position: relative;
  height: 800px;
  color: #feda4a;
  font-family: 'Pathway Gothic One', sans-serif;
  font-size: 500%;
  font-weight: 600;
  letter-spacing: 6px;
  line-height: 150%;
  perspective: 400px;
  text-align: justify;
`;

const Anim = keyframes`
  0% {
    top: -100px;
    transform: rotateX(20deg)  translateZ(0);
  }
  100% { 
    top: -6000px;
    transform: rotateX(25deg) translateZ(-2500px);
  }
`;

const Crawl = styled.div`
  position: relative;
  top: 99999px;
  transform-origin: 50% 100%;
  animation: ${Anim} 60s linear;
`;

const Title = styled.div`
  font-size: 90%;
  text-align: center;

  > h1 {
    margin: 0 0 100px;
    text-transform: uppercase;
  }
`;

const SplashScreen = () => {
  return (
    <Container>
      <Sth>
        <Crawl>
          <Title>
            <p>Hi my name is Mike</p>
            <h1>Im someone</h1>
          </Title>
            <p>It is a period of civil war. Rebel spaceships, 
              striking from a hidden base, have won their first 
              victory against the evil Galactic Empire.
            </p>
            <p>During the battle, Rebel spies managed to steal 
              secret plans to the Empire’s ultimate weapon, 
              the DEATH STAR, an armored space station with 
              enough power to destroy an entire planet.
            </p>
            <p>Pursued by the Empire’s sinister agents, Princess 
              Leia races home aboard her starship, custodian of the 
              stolen plans that can save her people and restore freedom 
              to the galaxy…
            </p>
        </Crawl>
      </Sth>
    </Container>
  );
}

export default SplashScreen;