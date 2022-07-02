import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import './CSS.css'

const Container = styled.div`
  margin: auto;
  width: 50em;
  height: 50em;
  margin: auto;
  justify-content: center;
  align-items: center;
`

const Data = [
  {
    id: '1',
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80'
  },
  {
    id: '3',
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  },
  {
    id: '4',
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80'
  },
  {
    id: '5',
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80'
  }
];



export const Slider = () => {

  const [index, setIndex] = useState(0);

  const mod = (n: any, m: any) => {
    let result = n % m;

    // Return a positive value
    return result >= 0 ? result : result + m;
  };


  const nextSlide = () => {
    setIndex( index === Data.length - 1 ? 0 : index + 1);
  };

  const prevSlide = () => {
    setIndex( index === 0 ? Data.length - 1 : index - 1);
  };


  return (
    <>
      <button onClick={prevSlide}> Prev </button>
      <button onClick={nextSlide}> Next </button>
    <Container>
    <div className="carousel">
        {Data.map((item, i) => {
          const indexLeft = mod(index - 1, Data.length);
          const indexRight = mod(index + 1, Data.length);

          let className = "card";

          if (i === index) {
            className = "card card--active";
          } else if (i === indexRight) {
            className = "card card--right";
          } else if (i === indexLeft) {
            className = "card card--left";
          } else className = "card";

          return (
            <img
              key={item.id}
              className={className}
              src={item.image}
              alt="Comic"
            ></img>
          );
        })}
      </div>
    </Container>
    
    </>
  )  
};