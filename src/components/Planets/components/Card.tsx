import styled from 'styled-components';
import { Responce } from '../../../typescript/types';
import { Planets as images } from '../../../assets/images/planets/planets';

interface CardProps {
  data?: Responce,
  url?: any,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const Style = styled.div<CardProps>`
  position: relative;
  margin: auto;
  display: flex;
  width: 100%;
  height: 100%;

  > div:nth-child(1) {
    display: flex;
    width: 70em;
    height: 56em;
    background-position: center; 
    background-repeat: no-repeat;
    background-size: cover;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0) 90%, rgba(255, 255, 255, 0.6)), 
      url(${props => props.url});
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    width: 44em;
    height: 56em;
    background-color: rgba(255, 255, 255, 0.6);

    > h1 {
      margin-top: 2.1em; 
      text-align: center;
      font-size: 3em;
      font-family: 'Distant Galaxy', sans-serif;
      color: balck;
    }
  
    > ul {
      padding: 1em 0 0 4em;
      list-style-type: none;
  
      > li {
        margin: 0.7em;
        color: #414141;
        font-size: 2em;
        font-family: 'Invisible', sans-serif;
      }
    }
  }
`;

const Card = (props: CardProps) => {

  let url: any;

  images.map((i) => {
    const name = props.data?.name?.toLocaleLowerCase().replace(/\s/g, '');
    if (i.name === name) {
      return url = i.url;
    }
  });

  return (
    <Container>
      <Style url={url}>
        <div />
        <div>
          <h1>{props.data?.name}</h1>
          <ul>
            <li>{`Climate: ${props.data?.climate}`}</li>
            <li>{`Terrain: ${props.data?.terrain}`}</li>
            <li>{`Diameter: ${props.data?.diameter} km`}</li>
            <li>{`Gravity: ${props.data?.gravity}`}</li>
            <li>{`Orbital period: ${props.data?.orbital_period}`}</li>
            <li>{`Rotation period: ${props.data?.rotation_period}`}</li>
            <li>{`Population: ${props.data?.population}`}</li>
            <li>{`Surface water: ${props.data?.surface_water}`}</li>
          </ul>
        </div>
      </Style>
    </Container>
  );
};

export default Card;