import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { useFetch } from '../../typescript/getData';
import { Responce } from '../../typescript/types';
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
  align-content: center;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
    transition: 800ms;
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

const AutoplaySettingWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0; 
`;

const AutoplaySettingButtonWrapper = styled.div`
  position: absolute;
  bottom: 2em;
  left: 2em;
  opacity: 0.7;
  transition: 300ms;

  > svg {
    width: 5em;
    height: 5em;
  }

  &:hover {
    opacity: 1;
  }
`;

const Planets = () => {

  const responce = useFetch(5);
  const [index, setIndex] = useState(0);
  const [delay, setDelay] = useState<number>(10000); // miliseconds
  const [isOpen, setOpen] = useState<boolean>(false);

  const mod = (n: any, m: any) => {
    let result = n % m;

    return result >= 0 ? result : result + m;
  }

  const nextPlanet = () => {
    responce && setIndex( prev => prev === responce.length - 1 ? 0 : prev + 1);
  };

  const prevPlanet = () => {
    responce && setIndex( prev => prev === 0 ? responce.length - 1 : prev - 1);
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
      {responce && responce.map((item: Responce, i: number) => {
        let isActive, isRight, isLeft;
        const indexRight = mod(index - 1, responce.length);
        const indexLeft = mod(index + 1, responce.length);

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
      <AutoplaySettingWrapper>
        <AutoplaySetting 
          delay={delay} 
          setDelay={setDelay}
          isOpen={isOpen}
          setOpen={setOpen}/>
      </AutoplaySettingWrapper>
      <AutoplaySettingButtonWrapper onClick={() => setOpen(prev => !prev)}>
        <svg 
          viewBox="0 0 24 24" 
          fill="none" stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </svg>
      </AutoplaySettingButtonWrapper>
    </Container>
  );
}

export default Planets;