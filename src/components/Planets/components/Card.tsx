import styled from 'styled-components';
import { Responce } from '../../../typescript/getData';
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
  background-color: white;
`;

const Image = styled.div<CardProps>`
  width: 100%;
  height: 100%;
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(${props => props.url});
`;

const Card = (props: CardProps) => {

  return (
    <Container>
      {images.map((i, j: number) => {
        const name = props.data?.name?.toLocaleLowerCase().replace(/\s/g, '');
        if (i.name === name) {
          return <Image url={i.url} key={j}/>
        }
      })}
    </Container>
  );
};

export default Card;