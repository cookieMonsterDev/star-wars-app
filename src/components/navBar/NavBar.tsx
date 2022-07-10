import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #191919;

  font-family: Avenir, Arial, sans-serif;
  font-weight: 600;
  font-size: 2em;
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
    title: 'vehicles',
    url: '/vehicles',
  },
  {
    title: 'species',
    url: '/species',
  },
  {
    title: 'planets',
    url: '/planets',
  }
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