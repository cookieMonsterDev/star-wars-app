import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getData, Responce } from '../../typescript/getData';

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
  width: 90em;
  height: 56em;
  position: relative;
  overflow: hidden;
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
  opacity: 0;
  
  background-color: red;

  ${({isActive}) => isActive && css`
    opacity: 1;
    transition: 700ms;
  `}

  ${({isLeft}) => isLeft && css`
    opacity: 1;
    transform: translateX(-100%);
    transition: 700ms;
  `}

  ${({isRight}) => isRight && css`
    opacity: 1;
    transform: translateX(100%);
    transition: 700ms;
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
      <button onClick={prevPlanet}>prev</button>
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
            {item.name}
        </Slide>)
      })}
      </Carousel>
     <button onClick={nextPlanet}>next</button>
    </Container>
  );
}

export default Planets;