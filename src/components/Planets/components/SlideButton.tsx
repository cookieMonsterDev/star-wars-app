import styled, { css } from 'styled-components';

interface SlideButtonProps {
  isRight?: boolean,
  buttonColor?: string,
  onClick?: () => void
};

const ButtonStyle = styled.div<SlideButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10em;
  height: 30em;
  margin: 0.3em;
  opacity: 0.6;
  transition: all 300ms;

  > svg {
    transform: scale(1.1);
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

      <svg xmlns="http://www.w3.org/2000/svg" 
        width="100" height="100" 
        viewBox="0 0 24 24" fill="none" 
        stroke="#000000" stroke-width="2" 
        stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 8l-4 4 4 4M16 12H9"/>
      </svg>
    </ButtonStyle>
  );
}

export default SlideButton;