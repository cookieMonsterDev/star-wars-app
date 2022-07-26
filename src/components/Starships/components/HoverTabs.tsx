import { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { getData, Responce } from '../../../typescript/getData';
import { Starships as images } from '../../../assets/images/starships/starships';

interface StarshipProps {
  imageUrl?: any
};

interface SVGProps {
  name?: string
};

const Animation = keyframes`
  from {
    height: 100%;
    width: 100%;
    opacity: 0;
  }
  to {
    height: 50em;
    width: 90%;
    opacity: 1;
  }
 `;

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50em;
  width: 90%;
  animation: ${Animation} 700ms;
`;

// const Starship = styled.div<StarshipProps>`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   margin: 0.5em;
//   height: 100%;
//   flex: 0.5;
//   border-radius: 3em;
//   transition: all 500ms;
//   background-image: url(${(props => props.imageUrl)});
//   background-position: center; 
//   background-repeat: no-repeat;
//   background-size: cover;

//   > svg {
//     position: absolute;
//     height: 50px;
//     width: 50px;
//     bottom: 0.5em;
//     left: 50%;
//     border-radius: 50%;
//     background-color: #bbb;
//     transform: translate(-50%, -50%);
//     transition: all 500ms;

//     &:before {
//       content: '';
//       position: absolute;
//       height: 50px;
//       width: 50px;
//       bottom: 5em;
//       left: 50%;
//       border-radius: 50%;
//       background-color: red;
//       transform: translate(-50%, -50%);
//     }
//   }

//   > h1 {
//     position: absolute;
//     bottom: 8em; 
//     width: 12em;
//     color: white;
//     transform: rotate(-90deg);
//   }

//   &:hover {
//     flex: 7;
//     transition: all 500ms;

//     > svg {
//       left: 8%;
//     }
     
//     > h1 {
//       left: 16%;
//       bottom: 0.5em;
//       transform: rotate(0deg);
//       transition: all 500ms;
//     }
//   }
// `;

const SVG = styled.div<SVGProps>`
  position: absolute;
  height: 50px;
  width: 50px;
  bottom: 2em;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #bbb;
  transition: all 500ms;

  font-size: 2em;
  font-weight: 600;

  &:before {
    content: '${(props => props.name)}';
    position: relative;
    display: flex;
    width: 20em;
    bottom: 2em;
    left: 50%;
    color: #FFFFFF;
    transform-origin: 0 50%;
    transform: rotate(-90deg);
  }
 `;

 const Starship = styled.div<StarshipProps>`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0.5em;
  height: 100%;
  flex: 0.5;
  border-radius: 3em;
  transition: all 500ms;
  background-image: url(${(props => props.imageUrl)});
  background-position: center; 
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    flex: 7;
    transition: all 500ms;

    ${SVG} {
      left: 2em;
      transform-origin: center;
      transform: rotate(90deg);
    }
  }
`;


const HoverTabs = () => {

  const { url } = useRouteMatch();
  const history = useHistory();
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const Data = await getData(2);
      setData(Data);
    };

    fetchStarships();
  }, []);

  const handleClick = (item: Responce) => {
    const name = item.name?.toLocaleLowerCase().replace(/\s/g, '');
    history.push(`${url}/${name}`);
  };

  return (
    <Container>
      {data.map((item: Responce, key: number) => {

        let url: any;

        images.map((i) => {
          const name = item.name?.toLocaleLowerCase().replace(/\s/g, '');
          if (i.name === name) {
            return url = i.url;
          }
        });

        return (
          <Starship
            key={key}
            imageUrl={url}
            onClick={() => handleClick(item)}
          >
          <SVG name={item.name}></SVG>
          </Starship>
          )
        })}
    </Container>
  );
};

export default HoverTabs;