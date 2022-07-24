import styled from 'styled-components';

interface CloseButtonProps {
  onClick?: () => void,
  children?: React.ReactNode
};

const Container = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  opacity: 0.5;

  > a {
    width: 100%;
    height: 100%;
    z-index: 10;
  }

  &:before, &:after {
    position: absolute;
    content: '';
    height: 3em;
    width: 0.4em;
    opacity: 0.5;
    border-radius: 0.5em;
    background-color: #1b1b1b;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }

  &:hover {
    opacity: 1;
  }
`;

const CloseButton = (props: CloseButtonProps) => {
  return (
    <Container>
      {props.children}
    </Container>
  );
};

export default CloseButton;