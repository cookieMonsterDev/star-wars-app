import { useState } from 'react';
import styled from 'styled-components';
import { Responce } from '../../../typescript/getData'


const Container = styled.div`
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

export interface CardProps extends Responce {
  cardTemplate?: string | undefined,
  isExpanded?: boolean,
};

// Need to create different Cards for {cardTemplate}

export const Card = (props: CardProps) => {

    return (
      <Container>
        <svg></svg>
        <ul>
          <li>Name: {props.name}</li>
          <li>{!props.created ? null : props.created.toLocaleString()}</li>
          <li>{!props.edited ? null : props.edited.toLocaleString()}</li>
        </ul>
      </Container>
    )
};
