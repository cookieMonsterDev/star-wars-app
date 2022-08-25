import { useState, useEffect } from 'react';
import styled from 'styled-components';

const InfoBar = () => {

  const [dots, setDots] = useState(true);
  const [hours, setHours] = useState('');
  const [minute, setMinute] = useState('');

  useEffect(() => {

    const timeInterval = setInterval(() => {
      const currentTime = new Date();
      const min = currentTime.getMinutes().toLocaleString();
      const hours = currentTime.getHours().toLocaleString();

      setMinute(prev => prev = (min.length === 1 ? 0 + min : min));
      setHours(prev => prev = (hours.length === 1 ? 0 + hours : hours))
    }, 1000);

    const dotsInterval = setInterval(() => {
      setDots(prev => !prev);
    }, 2000);

    return () => {
      clearInterval(timeInterval);
      clearInterval(dotsInterval);
    };
  }, []);

  return (
    <Container>
      <Clock>
        {/* <a>{time}</a> */}
        <a>{hours}{dots ? ':' : ' '}{minute}</a>
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
  user-select: none;
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
  user-select: none;
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