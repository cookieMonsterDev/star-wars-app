import { useState } from 'react';
import styled from 'styled-components';
import { Person, Film, Starship, Vehicle, Specie, Planet } from '../../typescript/modules';


const TemplatePerson = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: green;

  > svg {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: red;
  }

  > ul {
    margin: 0;
    list-style-type: none;
  }
`;

const TemplateFilm = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: yellow;

  > svg {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: red;
  }

  > ul {
    margin: 0;
    list-style-type: none;
  }
`;

const TemplateStarship = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: gray;

  > svg {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: red;
  }

  > ul {
    margin: 0;
    list-style-type: none;
  }
`;

const TemplateVehicle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: orange;

  > svg {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: red;
  }

  > ul {
    margin: 0;
    list-style-type: none;
  }
`;

const TemplateSpecie = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: blue;

  > svg {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: red;
  }

  > ul {
    margin: 0;
    list-style-type: none;
  }
`;

const TemplatePlanet = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: pink;

  > svg {
    width: 5em;
    height: 5em;
    border-radius: 50%;
    background-color: red;
  }

  > ul {
    margin: 0;
    list-style-type: none;
  }
`;

export interface CardProps {
  cardTemplate?: string | undefined,
  isExpanded?: boolean,

  name?: string,
  created?: Date, 
  edited?: Date, 
};

// Need to create different Cards for {cardTemplate}

export const Card = (props: CardProps) => {

  if (props.cardTemplate === 'Person') {
    return (
      <TemplatePerson>
        <svg></svg>
        <ul>
          <li>Name: {props.name}</li>
          <li>{!props.created ? null : props.created.toLocaleString()}</li>
          <li>{!props.edited ? null : props.edited.toLocaleString()}</li>
        </ul>
      </TemplatePerson>
    )
  }
  else if (props.cardTemplate === 'Film') {
    return (
      <TemplateFilm>
        <svg></svg>
        <ul>
          <li>Name: {props.name}</li>
          <li>{!props.created ? null : props.created.toLocaleString()}</li>
          <li>{!props.edited ? null : props.edited.toLocaleString()}</li>
        </ul>
      </TemplateFilm>
    )
  }
  else if (props.cardTemplate === 'Starship') {
    return (
      <TemplateStarship>
        <svg></svg>
        <ul>
          <li>Name: {props.name}</li>
          <li>{!props.created ? null : props.created.toLocaleString()}</li>
          <li>{!props.edited ? null : props.edited.toLocaleString()}</li>
        </ul>
      </TemplateStarship>
    )
  }
  else if (props.cardTemplate === 'Vehicle') {
    return (
      <TemplateVehicle>
        <svg></svg>
        <ul>
          <li>Name: {props.name}</li>
          <li>{!props.created ? null : props.created.toLocaleString()}</li>
          <li>{!props.edited ? null : props.edited.toLocaleString()}</li>
        </ul>
      </TemplateVehicle>
    )
  }
  else if (props.cardTemplate === 'Specie') {
    return (
      <TemplateSpecie>
        <svg></svg>
        <ul>
          <li>Name: {props.name}</li>
          <li>{!props.created ? null : props.created.toLocaleString()}</li>
          <li>{!props.edited ? null : props.edited.toLocaleString()}</li>
        </ul>
      </TemplateSpecie>
    )
  }
  return (
    <TemplatePlanet>
      <li>{!props.created ? null : props.created.toLocaleString()}</li>
    </TemplatePlanet>
  )
}
