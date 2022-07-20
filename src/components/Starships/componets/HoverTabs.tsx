import { useEffect, useState } from 'react';
import { useRouteMatch, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { getData, Responce } from '../../../typescript/getData';
import Tab from './Tab';

const Container = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  height: 50em;
  width: 90%;
`;

const Starship = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin: 0.5em;
  height: 100%;
  flex: 0.5;
  border-radius: 3em;
  transition: all 500ms;
  background-color: rgba(0, 255, 255, 0.6);

  > h1 {
    position: absolute;
    bottom: 2em;
    color: white;
  }

  &:hover {
    flex: 7;
    transition: all 500ms;
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
    history.push(`${url}/${item.name?.toLocaleLowerCase().replace(/\s/g, '')}`);
  };

  return (
    <Container>
      {data.map((item: Responce, key: number) => {
        return (
          <Starship 
            key={key}
            onClick={() => handleClick(item)}
          >
            <h1>{item.name}</h1>
          </Starship>
          )
        })}
    </Container>
  );
};

export default HoverTabs;