import { Route, Switch, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';
import HoverTabs from './components/HoverTabs';
import { useFetch } from '../../typescript/getData'
import Tab from './components/Tab';
import { Responce } from '../../typescript/types';

interface ColorProps {
  filterRebels: string,
  filterEmpire: string,
  textRebels: string,
  textEmpire: string
};

const StarshipsPage = () => {

  const { path, url } = useRouteMatch();
  const responce = useFetch(2);

  return (
    <Container>
      <Switch>
        <Route exact path={path}>{HoverTabs()}</Route>
        {responce && responce.map((item: Responce, key: number) => {return (
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

export const Color: ColorProps = {
  filterRebels: 'invert(37%) sepia(61%) saturate(6233%) hue-rotate(344deg) brightness(103%) contrast(98%)',
  filterEmpire: 'invert(51%) sepia(74%) saturate(4060%) hue-rotate(192deg) brightness(99%) contrast(105%)',
  textRebels: '#FF3333',
  textEmpire: '#198CFF',
};

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