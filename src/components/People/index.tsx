import styled from 'styled-components';
import { Slider } from './components/Slider'

function People() {
  return (
    <Container>
      <Slider />
    </Container>
  );
}

export default People;

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