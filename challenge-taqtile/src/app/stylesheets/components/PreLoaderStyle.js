import styled from 'styled-components';

export const PreLoaderStyle = styled.div`
  background: rgba(white, .9);
  position: fixed;
  z-index: 300;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  heigth: 100%;
  justify-content: center;
  align-items: center;
  padding: 20% 48%;
  @media screen and (max-width: 768px) {
    &{
      background: rgba(white, .9)
      position: fixed
      z-index: 300
      top: 0px
      bottom: 0px
      left: 0px
      right: 0px
      width: 100%
      heigth: 100%
      justify-content: center
      align-items: center
      padding: 90% 42%
    }
  }
`;