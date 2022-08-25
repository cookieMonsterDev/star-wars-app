import styled from 'styled-components';
import { useFetch } from '../../typescript/getData';
import { Responce } from '../../typescript/types';
import FilmPoster from './components/FilmPoster';

const Films = () => {

  const responce = useFetch(1);

  return (
    <Container>
      <div>
      { responce && responce.map((item: Responce, key: number) => {
        return (<FilmPoster item={item} key={key}/>)
      })}
      </div>
    </Container>
  );
}

export default Films;

const Container = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  top: 7em;
  bottom: 4em;

  > div {
    height: 100%;
    width: 100%;
    display: flex;
    overflow: auto;
    flex-wrap: wrap;
    position: relative;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;