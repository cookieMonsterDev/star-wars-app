import { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import HoverTabs from './componets/HoverTabs';
import { getData, Responce } from '../../typescript/getData'
import Tab from './componets/Tab';


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

  const { path, url } = useRouteMatch();
  const [subUrl, setSubUrl] = useState([]);

  useEffect(() => {
    async function fetchURL() {
      const data = await getData(2);
      setSubUrl(data);
    };
  
    fetchURL();
  }, [])

  return (
    <Container>
      <Switch>
        <Route exact path={path}>{HoverTabs()}</Route>
        { subUrl.map((item: Responce, key: number) => {return (
          <Route 
            path={`${url}/${item.name?.toLocaleLowerCase().replace(/\s/g, '')}`}
            key={key}
          >
            {Tab(item)}
          </Route>
        )})}
      </Switch>
    </Container>
  );
};

export default StarshipsPage;