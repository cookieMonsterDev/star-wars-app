import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getData, Responce } from '../../typescript/getData';
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

  const mod = (n: any, m: any) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  }

  useEffect(() => {
    async function fetchPlanets() {
      const Data = await getData(5);
      setData(Data);
    }
  
    fetchPlanets();
  },[])

  const nextPlanet = () => {
    setIndex( index === data.length - 1 ? 0 : index + 1);
  };

  const prevPlanet = () => {
    setIndex( index === 0 ? data.length - 1 : index - 1);
  };

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
    </Container>
  );
}

export default Planets;