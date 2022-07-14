import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData, Responce } from '../../typescript/getData';
import FilmPoster from './componets/FilmPoster';

const Container = styled.div`
  position: absolute;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  top: 7em;
  bottom: 4em;
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-gap: 2em;
  align-content: center;
`;

const Films = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      const Data = await getData(1);
      setData(Data);
    }
  
    fetchPeople();
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