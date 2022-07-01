import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 30em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const IMG = styled.img`
  width: 300px;
  height: 150px;
  border-radius: 10px;
  border-style: solid;
  border-color: black;
  border-width: 0.2em;
`;

const Slide = styled.div`
`;


const Data = [
  {
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
  },
  {
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
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

  return (
    <Container>
      <button onClick={prevSlide}> Prev </button>


      { Data.map((sth, index) => {
          return ( 
            <>
              <Slide>
                { (slide === 0 
                  ? index === Data.length - 1 
                  : index === slide - 1) 
                  && (<IMG src={sth.image} />)}
              </Slide>
            </>
        )})};

        { Data.map((sth, index) => {
          return ( 
            <>
              <Slide>
                { index === slide && (<IMG src={sth.image} />)}                
              </Slide>
            </>
        )})};

        { Data.map((sth, index) => {
          return ( 
            <>
              <Slide>
                { (slide === Data.length - 1 
                  ? index === 0 
                  : index === slide + 1) 
                  && (<IMG src={sth.image} />)}                
              </Slide>
            </>
        )})};

      <button onClick={nextSlide}> Next </button>
    </Container>
  )  
};