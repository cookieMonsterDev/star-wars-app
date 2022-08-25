import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Responce } from '../../../typescript/types';
import CloseButton from '../../CloseButton';
import { Starships as images } from '../../../assets/images/starships/starships';
import rebels from '../../../assets/images/blazon/rebels.jpg';
import empire from '../../../assets/images/blazon/empire.jpg';
import { Color } from '../index';

interface ContainerProps {
  imgUrl?: any,
  blazonColor?: string,
  textColor?: string 
};

const Tab = (props: Responce) => {

  let imgUrl: any, fraction: any;;

  images.map((i) => {
    const name = props.name?.toLocaleLowerCase().replace(/\s/g, '');
      if (i.name === name) {
        imgUrl = i.url;
        fraction = i.fraction;
      };
  });

  return (
    <Container>
      <CloseButtonWrapper>
        <CloseButton buttonColor={fraction === 'rebels' ? Color.textRebels : Color.textEmpire}>
          <Link to={'/starships'}/>
        </CloseButton>
      </CloseButtonWrapper>
      <Img imgUrl={imgUrl}/>
      <InfoArea textColor={fraction === 'rebels' ? Color.textRebels : Color.textEmpire}>
        <h1>{props.name}</h1>
        <ul>
          <li>{`Model: ${props.model}`}</li>
          <li>{`Cost: ${props.cost_in_credits} credits`}</li>
          <li>{`Consumables: ${props.consumables}`}</li>
          <li>{`length: ${props.length} m.`}</li>
          <li>{`Atmospher speed: ${props.max_atmosphering_speed}`}</li>
          <li>{`Speed: ${props.MGLT} MGLT`}</li>
          <li>{`Hyperdrive rating: ${props.hyperdrive_rating}`}</li>
          <li>{`Crew: ${props.crew} people`}</li>
          <li>{`Passengers: ${props.passengers} people`}</li>
        </ul>
        <Blazon 
          src={ fraction === 'rebels' ? rebels : empire}
          blazonColor={ fraction === 'rebels' ? Color.filterRebels : Color.filterEmpire}/>
      </InfoArea>
    </Container>
  );
};

export default Tab;

const Anim = keyframes`
  from {
    height: 40em;
    width: 40em;
    opacity: 0;
  }
  to {
    opacity: 1;
    height: 100%;
    width: 100%;
  }
`;

const Container = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 65% 35%;
  overflow: auto;
  width: 100%;
  height: 100%;

  animation: ${Anim} 700ms;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  z-index: 10;
  right: 5em;
  top: 2em;
`;

const Blazon = styled.img<ContainerProps>`
  position: absolute;
  height: 10em;
  width: 10em;
  bottom: 2em;
  left: 50%;
  filter: ${(props => props.blazonColor)};
  transform: translate(-50%, 0);
 `;

const Img = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props => props.imgUrl)});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
`;

const InfoArea = styled.div<ContainerProps>`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);

  > h1 {
    margin-top: 2.1em; 
    text-align: center;
    font-size: 3em;
    font-family: 'Distant Galaxy', sans-serif;
    color: ${(props => props.textColor)};
    text-shadow: -5px 0 black;
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
`;