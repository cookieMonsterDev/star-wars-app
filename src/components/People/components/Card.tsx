import styled from 'styled-components';
import { Responce } from '../../../typescript/getData'
import { People as images } from '../../../assets/images/people/people';

export interface CardProps extends Responce {
  cardTemplate?: string | undefined,
  isExpanded?: boolean,
};

interface ContainerProps {
  imageUrl?: any
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 2em;
  background-image: url(${(props => props.imageUrl)});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;

  > ul {
    margin: 0;
    list-style-type: none;
    color: white;
  }
`;

export const Card = (props: CardProps) => {

  let url: any, fraction: any;

  images.map((i) => {
    const name = props.name?.toLocaleLowerCase().replace(/\s/g, '');
    if (i.name === name) {
      url = i.url;
      fraction = i.fraction;
    };
  });

    return (
      <Container imageUrl={url}>
        <ul>
          <li>Name: {props.name}</li>
        </ul>
      </Container>
    )
};
