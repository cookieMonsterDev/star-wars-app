import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 50em;
  height: 30em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: gray;
`;

const Form = styled.div`
  margin: auto;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 20em;
  border-width: 2em;
  border-color: black;
  background-color: orange;
`;

const Data = [
  {
    id: '1'
  },
  {
    id: '2'
  },
  {
    id: '3'
  },
  {
    id: '4'
  },
  {
    id: '5'
  }
];



export const Slider = () => {

  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide( slide === Data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide( slide === 0 ? Data.length - 1 : slide - 1);
  };

  console.log(slide);

  return (
    <Container>
      <button onClick={prevSlide}> Prev </button>
        { Data.map((sth, index) => {
          return (
          <div className={index === slide ? 'slider active' : 'slide' } key={index}>
            { index === slide && (<Form>{ sth.id }</Form>)}
          </div>
    
        )})}
      <button onClick={nextSlide}> Next </button>
    </Container>
  )  
};