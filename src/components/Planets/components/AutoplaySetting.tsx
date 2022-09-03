import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface AutoplaySetting {
  delay?: number
  setDelay?: React.Dispatch<React.SetStateAction<number>>,
  isOpen?: boolean,
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

const AutoplaySetting = (props: AutoplaySetting) => { 

  const [number, setNumber] = useState<any>('');

  const handalClick = (number: number) => {
    props.setDelay?.(number * 1000);
  };

  const time = props.delay ? props.delay / 1000 : null;

  return (
    <Container isOpen={props.isOpen}>
      <CloseButton onClick={() => props.setOpen?.(prev => !prev)}/>
      <span>Autoplay slide swipe delay: {time} sec</span>
      <input onChange={(e) => setNumber(e.target.value)} pattern='[0-9]{1,}'/>
      <button onClick={() => handalClick(number)}>Set number</button>
    </Container>
  );
}

export default AutoplaySetting;

const Container = styled.div<AutoplaySetting>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45em;
  height: 25em;
  background-color: white;
  transition: all 1000ms;
  transform: translateY(100%);

  ${({isOpen}) => isOpen && css`
    transform: translateY(0);
  `}

  > span {
    text-align: center;
    margin: 3em 0 0 0;
    font-weight: 400;
    font-size: 2em;
    font-family: 'Invisible', sans-serif;
  }

  > input {
    height: 2em;
    margin: 1.5em 0 0 0;
    text-indent: .3em;
    border-radius: .5em;
    font-size: 2em;
  }

  > button {
    margin: 1.2em 0 0 0;
    width: 10em;
    height: 2em;
    border-radius: 1em;
    font-size: 2em;
    font-family: 'Invisible', sans-serif;
    background-color: #dd4747;
    color: #FFE81F;
    text-shadow: -3px 0 black;
    transition: all 500ms;

    &:active {
      background-color: #FFE81F;
      color: #dd4747;
    }
  }
`;

const CloseButton = styled.div`
  position: absolute;
  top: 1em;
  right: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  opacity: 0.7;

  &:before, &:after {
    position: absolute;
    content: '';
    height: 3em;
    width: 0.4em;
    border-radius: 0.5em;
    background-color: #dd4747;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;
  }
`;