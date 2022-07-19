import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData, Responce } from '../../../typescript/getData';
import StarshipPoster from './StarshipPoster';

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
  width: 100%;
  top: 7em;
  bottom: 4em;
`;

const Box = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.6);
  height: 50em;
  width: 90%;
`;

const Starships = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchStarships() {
      const Data = await getData(2);
      setData(Data);
    }

    fetchStarships();
  }, [])

  return (
    <Container>
      <Box>
        {data.map((item: Responce, key: number) => {
            return (
            <StarshipPoster item={item} key={key}/>
            )
          })}
      </Box>
    </Container>
  );
}

export default Starships;