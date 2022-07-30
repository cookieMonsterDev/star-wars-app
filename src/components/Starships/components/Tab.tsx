import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { Responce } from '../../../typescript/getData';
import CloseButton from '../../CloseButton';
import { Starships as images } from '../../../assets/images/starships/starships';

interface ImgProps {
  imgUrl?: any 
};

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
  right: 5em;
  top: 2em;
`;

const Img = styled.div<ImgProps>`
  width: 100%;
  height: 100%;
  background-image: url(${(props => props.imgUrl)});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
`;

const InfoArea = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Tab = (props: Responce) => {

  let imgUrl: any;

  images.map((i) => {
    const name = props.name?.toLocaleLowerCase().replace(/\s/g, '');
      if (i.name === name) {
        imgUrl = i.url;
      };
  });

  return (
    <Container>
      <CloseButtonWrapper>
        <CloseButton buttonColor={'#FFE81F'}>
          <Link to={'/starships'}/>
        </CloseButton>
      </CloseButtonWrapper>

      <Img imgUrl={imgUrl}/>

      <InfoArea>
        <h1>{props.name}</h1>
      </InfoArea>
    </Container>
  );
};

export default Tab;