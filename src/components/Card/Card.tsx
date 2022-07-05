import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { getData } from '../../typescript/getData';
import { Person } from '../../typescript/modules';


const Container = styled.div`
  display: flex;
  margin: auto;
  top: 10em; 
  width: 40em;
  height: 50em;
  flex-direction: column;

  background-color: gray;
`;

interface CardProps {
  chapter?: string,
  title?: string
};

export const Card = (props: CardProps) => {

const [people, setPeople] = useState([]);
const [films, setFilms] = useState([]);
const [starships, setStarships] = useState([]);
const [vehicles, setVehicles] = useState([]);
const [species, setSpecies] = useState([]);
const [planets, setPlanets] = useState([]);

useEffect(() => {
  async function fetchPeople() {
    const Data = await getData(0);
    setPeople(Data);
  }

  fetchPeople();
},[])

console.log(people)

  return (
    <Container>
      { people.map((item: Person, key: number) => {
        return <li key={key}>{item.name}</li>
      })}
    </Container>
  );
}
