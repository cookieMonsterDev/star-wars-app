import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Responce } from '../../../typescript/types';

interface FilmPosterProps {
  item: Responce,
  key: number
};

interface CardProps {
  onClick?: () => void,
  expanded?: boolean,
  offsetLeft?: number,
  offsetTop?: number
};

interface OverlayProps {
  onClick?: () => void,
  isShow?: boolean
};

const Card = styled.div<CardProps>`
  width: 40em;
  height: 25em;
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 1em;
  transition: all 500ms;

  > h1 {
    color: #FFE81F;
    font-weight: 600;
    font-size: 2.5em;
    font-family: 'Distant Galaxy', sans-serif;
    text-shadow: -5px 0 black;
  }
  
  ${({expanded}) => expanded && css`
    opacity: 0;
    transition: all 500ms;
  ` }
`;

const ActiveCard = styled.div<CardProps>`
  position: absolute;
  display: flex;
  width: 40em;
  height: 25em;
  top: ${({offsetTop}) => offsetTop}px;
  left: ${({offsetLeft}) => offsetLeft}px;
  border-radius: 1em;
  opacity: 0;
  transition: all 500ms;
 

  ${({expanded}) => expanded && css`
    z-index: 30;
    display: flex;
    flex-direction: column;
    
    align-items: center;
    top: 50%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) scale(2.2, 2.16);
    background-color: rgba(255, 255, 255, 1);
    transition: all 500ms;

    > h1 {
      color: #f5f50a;
      font-weight: 600;
      font-size: 2.5em;
      font-family: 'Distant Galaxy', sans-serif;
      text-shadow: -3px 0 black;
    }

    > p {
      margin: 3em;
      text-align: justify;
    }

  ` }
`;

const Overlay = styled.div<OverlayProps>`

  ${({isShow}) => isShow && css`
    position: absolute;
    overflow: auto;
    display: flex;
    align-content: center;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 20;
    top: 0em;
    bottom: 0em;
    background-color: rgba(0, 0, 0, 0.6);
    ransition: all 500ms;
  `}
`;

const FilmPoster = (props: FilmPosterProps) => {

  const boxRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();

  const getPosition = () => {
    if (boxRef.current !== null) {
      const x = boxRef.current.offsetLeft;
      setX(x);
      const y = boxRef.current.offsetTop;
      setY(y);
    }
  };

  useEffect(() => {
    getPosition();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getPosition);

    return () => {
      window.removeEventListener('resize', getPosition);
    }
  }, []);

   const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  return (
    <>
    <Overlay isShow={expanded}/>
    <ActiveCard
        expanded={expanded}
        offsetLeft={x}
        offsetTop={y}
        onClick={handleExpandClick}
      >
        <h1>{props.item.title}</h1>
        <p>{props.item.opening_crawl}</p>
      </ActiveCard>
    <Card 
      onClick={() => setExpanded(true)}
      expanded={expanded}
      ref={boxRef}
      >
        <h1>{props.item.title}</h1>
    </Card>
    </>
  );
}

export default FilmPoster;