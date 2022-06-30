import { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-color: black;
`;

const Logo = styled.div`
  margin: auto;
  width: 20em;
  height: 20em;
  justify-content: center;
  align-items: center;
  display: flex;

  border-style: solid;
  border-width: 1.3em;
  border-radius: 25%;
  border-color: yellow;

  span:nth-child(1) {
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
  
    
    color: yellow;
    font-size: 6em;
    font-weight: 800;
    text-align: center;
    text-transform: uppercase;
  }

  span:nth-child(2) {
    position: relerive;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    z-index: 10;

    color: red;
  }
`;


export const NavBar = () => {

  return (
    <Wrapper>
      <Logo>
        <span>Star Wars</span>
        <span>API</span>
      </Logo>
    </Wrapper>
  )
};