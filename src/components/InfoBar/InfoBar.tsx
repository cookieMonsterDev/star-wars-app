import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  width: 100%;
  height: 4em;
  background-color: #191919;
  color: white;
`;

const Clock = styled.div`
  margin: auto;
  padding-left: 2em;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2em;
  font-family: 'Invisible', sans-serif;
`;

const Logo = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2em;
  font-family: 'Distant Galaxy', sans-serif;
`;

const Info = styled.div`
  margin: auto;
  padding-right: 2em;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 2em;
  font-family: 'Invisible', sans-serif;

  > a {
    color: white;
    text-decoration: none;
  }
`;


const InfoBar = () => {

  const [time, setTime] = useState('');

  useEffect(() => {

    setInterval(() => {
      const CurrentTime = new Date().toLocaleString('en-US', 
      { hour12: false, hour: 'numeric', minute: 'numeric', second: 'numeric' })

      setTime(CurrentTime)

    }, 1000);

  }, []);

  return (
    <Container>
      <Clock>
        <a>{time}</a>
      </Clock>
      <Logo>
        <a>Star Wars</a>
      </Logo>
      <Info>
        <a href='https://github.com/It-is-a-piece-of-cake' target='_blank'>GitHub</a>
      </Info>
    </Container>
  );
};

export default InfoBar;