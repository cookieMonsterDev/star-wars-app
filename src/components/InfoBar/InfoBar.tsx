import { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
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
`;

const Logo = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Info = styled.div`
  margin: auto;
  padding-right: 2em;
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const InfoBar = () => {

  const [clock, setClock] = useState('');

  useEffect(() => {
    setInterval(() => {
      const Time: Date = new Date();
      setClock(Time.toTimeString());
    }, 1000)
  }, [])

  return (
    <Container>
      <Clock>
        <a>{clock}</a>
      </Clock>
      <Logo>
        <a>Star Wars</a>
      </Logo>
      <Info>
        <a>GitHub</a>
      </Info>
    </Container>
  );
};

export default InfoBar;