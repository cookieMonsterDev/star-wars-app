import React from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { getData } from '../../typescript/getData';

const Container = styled.div`
  display: flex;
  margin: auto;
  top: 10em; 
  width: 40em;
  height: 50em;

  background-color: gray;
`;

// const A = getData(1, 1)

// console.log(A)
let A: any

(async () => {
  const response = await getData(0, 1);
  return A = response;
})();

interface CardProps {
  chapter?: string,
  title?: string
};

export const Card = (props: CardProps) => {


useEffect(() => {
  async function fetchPeople() {
    let data = await getData(0, 1); // need to change
    return data
  }

  // async function fetchFilms() {
  //   let data = await getData(0, 1); // need to change
  // }

  // async function fetchStarships() {
  //   let data = await getData(0, 1); // need to change
  // }

  // async function fetchVehicles() {
  //   let data = await getData(0, 1); // need to change
  // }

  // async function fetchpPanets() {
  //   let data = await getData(0, 1); // need to change
  // }

},[])

  return (
    <Container>
      <h1>{ A.name }</h1>
    </Container>
  );
}
