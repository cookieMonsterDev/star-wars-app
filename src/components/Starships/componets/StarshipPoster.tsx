import React from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Responce } from '../../../typescript/getData'

interface StarshipPosterProps {
  item: Responce,
  key: number
};

const Starship = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0.5em;
  height: 100%;
  flex: 0.5;
  border-radius: 3em;
  transition: all 500ms;
  background-color: rgba(0, 255, 255, 0.6);

  > h1 {
    position: absolute;
    bottom: 2em;
    color: white;
  }

  &:hover {
    flex: 7;
    transition: all 500ms;
  }
`;

const StarshipPoster = (props: StarshipPosterProps) => {

  const url = useRouteMatch()
  const history = useHistory();

  const handleClick = () => {
    history.push(`${url}/${props.item.name?.toLocaleLowerCase().replace(/\s/g, '')}`)
  }

  return (
      <Starship onClick={handleClick}>
        <h1>{props.item.name}</h1>
      </Starship>
  );
}

export default StarshipPoster;