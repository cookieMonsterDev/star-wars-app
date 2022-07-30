import styled from 'styled-components';

interface CloseButtonProps {
  buttonColor?: string,
  onClick?: () => void,
  children?: React.ReactNode
};

const Container = styled.div<CloseButtonProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3em;
  height: 3em;
  opacity: 0.7;

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
    border-radius: 0.5em;
    background-color: ${((props) => props.buttonColor ? props.buttonColor : '#1b1b1b')};
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
    <Container buttonColor={props.buttonColor}>
      {props.children}
    </Container>
  );
};

export default CloseButton;