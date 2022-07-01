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

const Data = [1,2,3,4,5];

console.log(`arr length ${Data.length}`)

export const Slider = () => {

  const [slide, setSlide] = useState(0)


  const NextSlide = () => {
    slide === Data.length - 1
    ? setSlide(0)
    : setSlide(slide + 1);
  };

  const PrevSlide = () => {
    slide === 0
    ? setSlide(Data.length - 1)
    : setSlide(slide - 1)
  };


  return (
    <Container>
      <button onClick={PrevSlide}> Prev </button>
            <Form>
              { slide === 0 ? Data[Data.length - 1] : Data[slide - 1]}
            </Form>
            <Form>
              {Data[slide]}
            </Form>
            <Form>
              { slide === Data.length - 1 ? Data[0] : Data[slide + 1]}
            </Form>
      <button onClick={NextSlide}> Next </button>
    </Container>
  )  
}