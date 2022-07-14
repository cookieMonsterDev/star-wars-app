import { useState } from 'react';
import styled, { css } from 'styled-components';
import { Responce } from '../../../typescript/getData';

interface CardProps {
  onClick?: () => void,
  expanded?: boolean,
}

const Card = styled.div<CardProps>`
  width: 40em;
  height: 25em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 1em;
  
  ${({expanded}) => expanded && css`
  background-color: rgba(255, 255, 255, 1); 
  ` }
`; 

export interface AccordionProps {
  item: Responce,
  key: number
};

const FilmPoster = (props: AccordionProps) => {

  const [expanded, setExpanded] = useState(false);

   const handleExpandClick = () => {
    setExpanded(!expanded)
  };

  return (
    <Card 
      onClick={handleExpandClick}
      expanded={expanded}
    >
      <p>{!expanded && props.item.title}</p>
    </Card>
  );
}

export default FilmPoster;