import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import Starships from './componets/Starships';
import { getData, Responce } from '../../typescript/getData'


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

const StarshipsPage = () => {

  let { path, url } = useRouteMatch();

  const [subUrl, setSubUrl] = useState([]);

  useEffect(() => {
    async function fetchURL() {
      const Data = await getData(2);
      setSubUrl(Data);
    }
  
    fetchURL();
  }, [])

  return (
    <Container>
      <Switch>
        <Route exact path={path} component={Starships}/>

        { subUrl.map((item: Responce) => {return (
          <Route 
            path={`${url}/${item.name?.toLocaleLowerCase().replace(/\s/g, '')}`}
          />
        )})
        }

      </Switch>
    </Container>
  );
}

export default StarshipsPage;