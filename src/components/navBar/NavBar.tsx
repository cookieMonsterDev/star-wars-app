import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  height: 7em;
  width: 100%;
  background-color: #191919;
`;

const Logo = styled.div`
  position: relerive;
  margin-left: 2em;
  width: 3em;
  height: 3em;
  justify-content: center;
  align-items: center;
  display: flex;

  border-style: solid;
  border-width: 0.2em;
  border-radius: 25%;
  border-color: yellow;
`;

const Page = styled.ul`
  margin-right: 2em;
  display: grid;
  grid-template-columns: repeat(7, auto);
  grid-gap: 1.5em;
  list-style-type: none;
  text-align: center;
  justify-content: end;
  font-weight: 600;
  font-size: 2.5em;
  font-family: 'Invisible', sans-serif;

  > li > a {
    text-decoration: none;
    text-transform: uppercase;
    color: #FFE81F;
  }
`;

const Parts = [
  {
    title: 'home',
    url: '/',
  },
  {
    title: 'people',
    url: '/people',
  },
  {
    title: 'films',
    url: '/films',
  },
  {
    title: 'starships',
    url: '/starships',
  },
  {
    title: 'planets',
    url: '/planets',
  },
  {
    title: 'Force side',
    url: '/forceside',
  },
];

const NavBar = () => {

  return (
    <Container>
      <Logo>

      </Logo>
      <Page>
        { Parts.map((item, key) => {return (
          <li key={key}>
            <Link to={item.url}>
              {item.title}
            </Link>
          </li>
        )})}
      </Page>
    </Container>
  )
};

export default NavBar