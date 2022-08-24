import { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { useFetch } from '../../../typescript/getData';
import { People as images } from '../../../assets/images/people/people';
import SlideButton from './SlideButton';
import { Responce } from '../../../typescript/types';

interface SlideProps  {
  isActive?: boolean,
  isLeft?: boolean,
  isRight?: boolean,
  isExpanded?: boolean,
};

interface CardProps {
  imageUrl?: any,
  isExpanded?: boolean,
};

const Anim = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  margin: auto;
  width: 100%;
  height: 50em;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const Carousel = styled.div`
  width: 100em;
  height: 56em;
  position: relative;
`;

const Slide = styled.div<SlideProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 40em;
  height: 56em;
  object-fit: cover;
  cursor: pointer;
  z-index: 0;
  opacity: 0;

  transition: 500ms;

  ${({isActive}) => isActive && css<SlideProps>`
    opacity: 1;
    transform: scale(1);
    z-index: 99;

    ${({isExpanded}) => isExpanded && css`
      background-color: rgba(12, 12, 12, 1);
      width: 100%;
      border-radius: 5em;
      transition: all 500ms;

      ${Card} {
        position: relative;
        margin: auto;
        display: flex;
        width: 100%;
        height: 100%;
      
        > h1 {
          display: none;
        }
      
        > div:nth-child(2) {
          margin: 3em 0 3em 3em;
          position: absolute;
          left: 0;          
          width: 50em;
          height: 50em;
          border-radius: 50%;
        }

        > div:nth-child(3) {
          position: absolute;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 42em;
          height: 50em;
          margin: 3em 3em 3em 0;
          right: 0;
          border-radius: 0;
          background-image: none;
    
          animation: ${Anim} 2000ms;
    
          > h1 {
            top: 1.5em;
            left: 50%;
            text-align: center;
            font-size: 3em;
            font-family: 'Distant Galaxy', sans-serif;
            color: #FFE81F;
          }

          > ul {
            padding: 1em 0 0 8em;
            list-style-type: none;
        
            > li {
              margin: 1em;
              color: white;
              font-size: 2em;
              font-family: 'Invisible', sans-serif;
            }
          }
        }
    `}
  `}

  ${({isLeft}) => isLeft && css`
    transform: translateX(-80%) scale(0.8);
    transition: 500ms;
    opacity: 0.6;
  `}

  ${({isRight}) => isRight && css`
    transform: translateX(80%) scale(0.8);
    transition: 500ms;
    opacity: 0.6;
  `}
`;

const Card = styled.div<CardProps>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 500ms;

  > h1 {
    position: absolute;
    z-index: 10;
    margin: 0;
    bottom: 1em;
    font-size: 3em;
    font-family: 'Distant Galaxy', sans-serif;
    color: #FFE81F;
    text-shadow: -5px 0 black;

    animation: ${Anim} 1000ms;
  }

  > div:nth-child(2) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 2em;
    background-image: url(${(props => props.imageUrl)});
    background-position: top; 
    background-repeat: no-repeat;
    background-size: cover;
    transition: all 500ms;
  }

  > div:nth-child(3) {
    display: none;
  }
`;

export const Slider = () => {

  const [index, setIndex] = useState(0);
  const responce = useFetch(0);
  const [expanded, setExpanded] = useState(false);

  const mod = (n: any, m: any) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };


  const nextSlide = () => {
    responce && setIndex( index === responce.length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    responce && setIndex( index === 0 ? responce.length - 1 : index - 1);
  };

  const expand = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      {/* <button onClick={prevSlide}> Prev </button>
      <button onClick={nextSlide}> Next </button> */}
    <Container>
      <SlideButton onClick={prevSlide}/>
      <Carousel>
        {responce && responce.map((item: Responce, i: number) => {
          let isActive, isRight, isLeft;
          const indexLeft = mod(index - 1, responce.length);
          const indexRight = mod(index + 1, responce.length);

          if (i === index) {
            isActive = true;
          } else if (i === indexRight) {
            isRight = true;
          } else if (i === indexLeft) {
            isLeft = true;
          }

          const Click = () => {
            if (i === index) {
              return expand();
            }
            if (i === indexRight) {
              return nextSlide();
            } 
            else if (i === indexLeft) {
              return prevSlide();
            }
          }

          let url: any;

          images.map((i) => {
            const name = item.name?.toLocaleLowerCase().replace(/\s/g, '');
            if (i.name === name) {
              url = i.url;
            };
          });

          return (
            <Slide
              onClick={Click}
              isActive={isActive}
              isRight={isRight}
              isLeft={isLeft}
              isExpanded={expanded}
              key={i}>
              <Card
                imageUrl={url}
                isExpanded={expanded}>
                  <h1>{item.name}</h1>
                  <div />
                  <div>
                    <h1>{item.name}</h1>
                    <ul>
                      <li>Birth year: {item.birth_year}</li>
                      <li>Gender: {item.gender}</li>
                      <li>Eye color: {item.eye_color}</li>
                      <li>Hair color: {item.hair_color}</li>
                      <li>Skin color: {item.skin_color}</li>
                      <li>Height: {item.height}</li>
                      <li>Mass: {item.mass}</li>
                    </ul>
                  </div>
              </Card>
            </Slide>
          );
        })}
      </Carousel>
      <SlideButton isRight={true} onClick={nextSlide}/>
    </Container>
    </>
  )  
};