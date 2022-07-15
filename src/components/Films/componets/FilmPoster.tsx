import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Responce } from '../../../typescript/getData';

interface FilmPosterProps {
  item: Responce,
  key: number
};

interface CardProps {
  onClick?: () => void,
  expanded?: boolean,
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
  justify-content: center;
  align-items: center;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 1em;
  transition: all 500ms;
  
  ${({expanded}) => expanded && css`
    align-items: center;
    position: fixed;
    z-index: 30;
    transform: scale(2);
    background-color: rgba(255, 255, 255, 1);
    transition: all 500ms;
  ` }
`;

const Overlay = styled.div<OverlayProps>`

  ${({isShow}) => isShow && css`
    position: absolute;
    display: flex;
    z-index: 20;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
  `}

`;

const FilmPoster = (props: FilmPosterProps) => {

  const [expanded, setExpanded] = useState(false);

   const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  return (
    <>
    <Overlay isShow={expanded} />
    <Card 
      onClick={handleExpandClick}
      expanded={expanded}
    >
      <p>{!expanded && props.item.title}</p>
    </Card>
    </>
  );
}

export default FilmPoster;