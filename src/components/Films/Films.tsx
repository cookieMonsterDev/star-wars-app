import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData, Responce } from '../../typescript/getData';
import FilmPoster from './components/FilmPoster';

const Container = styled.div`
  position: absolute;
  overflow: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  top: 7em;
  bottom: 4em;
`;

const Films = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    let subscribed = false;
    async function fetchPeople() {
      const Data = await getData(1);
      if (!subscribed) {
        setData(Data);
      };
    }
  
    fetchPeople();

    return () => {
      subscribed = true;
    };
  }, [])

  return (
    <Container>
      { data.map((item: Responce, key: number) => {
        return (<FilmPoster item={item} key={key}/>)
      })}
    </Container>
  );
}

export default Films;