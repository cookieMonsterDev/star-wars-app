import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const Container = styled.div`
  margin: auto;
  width: 50em;
  height: 10em;
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0 !important;
  }
`;

const Form = styled.div`
  width: 40em;
  height: 20em;
  border-width: 2em;
  border-color: black;
  background-color: orange;
`;

const Data = [1,2,3,4,5,6,7,8,9];

export const Test = () => {

  const settings = {
    dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        <Form>
          <h3>1</h3>
        </Form>
        <Form>
          <h3>2</h3>
        </Form>
        <Form>
          <h3>3</h3>
        </Form>
        <Form>
          <h3>4</h3>
        </Form>
        <Form>
          <h3>5</h3>
        </Form>
        <Form>
          <h3>6</h3>
        </Form>
      </StyledSlider>
    </Container>
  )
}