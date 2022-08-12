import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getData, Responce } from '../../typescript/getData';
import AutoplaySetting from './components/AutoplaySetting';
import Card from './components/Card';
import SlideButton from './components/SlideButton';

interface SlideProps  {
  isActive?: boolean,
  isLeft?: boolean,
  isRight?: boolean,
  isExpanded?: boolean,
};

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

const Carousel = styled.div`
  width: 100em;
  height: 56em;
  position: relative;
  overflow: hidden;
  border-radius: 5em;
`;

const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5em;
  transition: 0s;
  display: none;

  ${({isActive}) => isActive && css`
    display: flex;
    z-index: 10;
    transition: 800ms;
    display: flex;
  `}

  ${({isLeft}) => isLeft && css`
    display: flex;
    transform: translateX(-100%);
    transition: 800ms;
  `}

  ${({isRight}) => isRight && css`
    display: flex;
    transform: translateX(100%);
    transition: 800ms;
  `}
`;

const Planets = () => {

  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState<number>(5000); // miliseconds

  const mod = (n: any, m: any) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  }

  useEffect(() => {
    let subscribed = false;
    async function fetchPlanets() {
      const Data = await getData(5);
      if (!subscribed) {
        setData(Data);
      }
    };
  
    fetchPlanets();

    return () => {
      subscribed = true;
    };
  },[]);

  const nextPlanet = () => {
    setIndex( prev => prev === data.length - 1 ? 0 : prev + 1);
  };

  const prevPlanet = () => {
    setIndex( prev => prev === 0 ? data.length - 1 : prev - 1);
  };

  useEffect(() => {
    const autoplay = setInterval(nextPlanet, delay);

    return () => {
      clearInterval(autoplay);
    }
  }, [delay]);

  return (
    <Container>
      <SlideButton onClick={prevPlanet}/>
      <Carousel>
      {data.map((item: Responce, i: number) => {
        let isActive, isRight, isLeft;
        const indexRight = mod(index - 1, data.length);
        const indexLeft = mod(index + 1, data.length);

        if (i === index) {
          isActive = true;
        } else if (i === indexRight) {
          isRight = true;
        } else if (i === indexLeft) {
          isLeft = true;
        }

        return (
        <Slide
          isActive={isActive}
          isRight={isRight}
          isLeft={isLeft}
          key={i}>
            <Card data={item}/>
        </Slide>)
      })}
      </Carousel>
      <SlideButton onClick={nextPlanet} isRight={true}/>
      <AutoplaySetting delay={delay} action={setDelay}/>
    </Container>
  );
}

export default Planets;