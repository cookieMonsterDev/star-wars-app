import { useState, useRef, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Responce } from '../../../typescript/getData';

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
  isShow?: boolean,
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
  
  ${({expanded}) => expanded && css`
    opacity: 0;
  ` }
`;

const ActiveCard = styled.div<CardProps>`
  position: absolute;
  display: none;
  width: 40em;
  height: 25em;
  top: ${({offsetTop}) => offsetTop}px;
  left: ${({offsetLeft}) => offsetLeft}px;
  border-radius: 1em;
  transition: all 500ms;

  ${({expanded}) => expanded && css`
    z-index: 30;
    display: flex;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(2.2, 2.16);
    background-color: rgba(255, 255, 255, 1);
    transition: all 5s;
  ` }
`;

const Overlay = styled.div<OverlayProps>`

  ${({isShow}) => isShow && css`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 20;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    touch-action: none;
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
    <Overlay isShow={expanded}>
      <ActiveCard
        expanded={expanded}
        offsetLeft={x}
        offsetTop={y}
        onClick={handleExpandClick}
      >
      </ActiveCard>
    </Overlay>
    <Card 
      onClick={() => setExpanded(true)}
      expanded={expanded}
      ref={boxRef}
    >
      <p>{!expanded && props.item.title}</p>
      <h2>X: {x ?? "No result"}</h2>
      <h2>Y: {y ?? "No result"}</h2>
    </Card>
    </>
  );
}

export default FilmPoster;