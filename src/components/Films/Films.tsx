import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getData, Responce } from '../../typescript/getData';

const Container = styled.div`
  height: 100%;
  
  background-color: orange;
`;

const Card = styled.div`
  width: 10em;
  height: 10em;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: green;
`; 

const Films = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchPeople() {
      const Data = await getData(1);
      setData(Data);
    }
  
    fetchPeople();
  }, [data])
  

  return (
    <Container>
      {/* { data.map((item: Responce, key) => {
        return (<Card>{item.title}</Card>)
      })} */}
      
    </Container>
  );
}

export default Films;