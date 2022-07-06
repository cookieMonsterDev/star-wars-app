import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { getData } from '../../typescript/getData';
import { Person } from '../../typescript/modules';


const Container = styled.div`
  position: reletive; 
  display: flex;
  margin: auto;
  top: 10em; 
  width: 100%;
  height: 100%;
  flex-direction: column;

  background-color: gray;
`;

interface CardProps {
  name?: string
};

export const NCard = (props: CardProps) => {


  return (
    <Container>
      <li>{props.name}</li>
    </Container>
  );
}
