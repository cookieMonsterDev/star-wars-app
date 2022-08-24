import styled from 'styled-components';
import { useFetch } from '../../typescript/getData';
import { Responce } from '../../typescript/types';
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

  const responce = useFetch(1);

  return (
    <Container>
      { responce && responce.map((item: Responce, key: number) => {
        return (<FilmPoster item={item} key={key}/>)
      })}
    </Container>
  );
}

export default Films;