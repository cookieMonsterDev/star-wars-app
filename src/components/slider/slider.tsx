import { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { getData } from '../../typescript/getData';
import { Card, CardProps } from '../Card/Card';

interface SlideProps  {
  sliderType?: string,
  isActive?: boolean,
  isLeft?: boolean,
  isRight?: boolean,
  cardTemplate?: string
};

// Need to create different sliders for {sliderType}

const Container = styled.div`
  margin: auto;
  width: 100em;
  height: 50em;
  margin: auto;
  justify-content: center;
  align-items: center;
`;

const Carousel = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 25em;
  height: 35em;
  object-fit: cover;
  cursor: pointer;
  z-index: 0;
  opacity: 0;

  transition: 500ms;

  ${({isActive}) => isActive && css`
    opacity: 1;
    transform: scale(1);
    z-index: 99;
  `}

  ${({isLeft}) => isLeft && css`
    transform: translateX(-125%) scale(0.8);
    transition: 500ms;
    opacity: 0.3;
  `}

  ${({isRight}) => isRight && css`
    transform: translateX(125%) scale(0.8);
    transition: 500ms;
    opacity: 0.3;
  `}
`;

export const Slider = (props: SlideProps) => {

  const [index, setIndex] = useState(0);
  const [data, setData] = useState([]);

  const mod = (n: any, m: any) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };

  useEffect(() => {
    async function fetchPeople() {
      const Data = await getData(0);
      setData(Data);
    }
  
    fetchPeople();
  },[])

  const nextSlide = () => {
    setIndex( index === data.length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    setIndex( index === 0 ? data.length - 1 : index - 1);
  };

  return (
    <>
      {/* <button onClick={prevSlide}> Prev </button>
      <button onClick={nextSlide}> Next </button> */}
    <Container>
    <Carousel>
        {data.map((item: CardProps, i: number) => {
          const indexLeft = mod(index - 1, data.length);
          const indexRight = mod(index + 1, data.length);
          let isActive
          let isRight
          let isLeft

          if (i === index) {
            isActive = true;
          } else if (i === indexRight) {
            isRight = true;
          } else if (i === indexLeft) {
            isLeft = true;
          }

          const Click = () => {
            if (i === indexRight) {
              return nextSlide();
            } 
            else if (i === indexLeft) {
              return prevSlide();
            }
          }

          return (
            <Slide
              onClick={Click}
              isActive={isActive}
              isRight={isRight}
              isLeft={isLeft}
              key={i}
            >
              <Card
                cardTemplate={props.cardTemplate} 
                name={item.name}
                created={item.created} 
                edited={item.edited}
              />
            </Slide>
          );
        })}
      </Carousel>
    </Container>
    </>
  )  
};