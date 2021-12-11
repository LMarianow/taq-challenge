import styled, { css } from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform .25s ease-out;
  &:hover {
    transform: scale(1.05);
  }
  label {
    ${(props) =>
      props.status === "Alive" &&
      css`
      color: #28CC2D;
      `}

      ${(props) =>
        props.status === "Dead" &&
        css`
        color: #D82E3F;
      `}

      ${(props) =>
        props.status === "unknown" &&
        css`
        color: #FFE135;
      `}
  }
  img{
    border-radius: 5px;
  }
`;