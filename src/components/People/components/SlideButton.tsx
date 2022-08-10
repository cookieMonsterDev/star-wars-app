import styled, { css } from 'styled-components';

interface SlideButtonProps {
  isRight?: boolean,
  buttonColor?: string,
  onClick?: () => void
};

const ButtonStyle = styled.div<SlideButtonProps>`
  display: flex;
  justify-content: center;
  width: 10em;
  height: 30em;
  margin: 2em;
  opacity: 0.6;
  transition: all 300ms;

  > svg {
    transform: scale(1.5);
    fill: ${props => props.buttonColor};
  }

  &:hover {
    opacity: 0.9;
  }

  ${({isRight}) => isRight && css`
    transform: rotate(180deg);
  `}
`;

const SlideButton = (props: SlideButtonProps) => {
  return (
    <ButtonStyle 
      isRight={props.isRight}
      buttonColor={props.buttonColor ? props.buttonColor : 'white'}
      onClick={props.onClick}>
      <svg viewBox='0 0 600 1100'>
        <path d='M 300 150 Q 350 50 500 50 L 400 550 L 500 1050 Q 350 1050 300 950 L 100 550 Z'/>
      </svg>
    </ButtonStyle>
  );
}

export default SlideButton;