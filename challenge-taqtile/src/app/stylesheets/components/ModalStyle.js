import styled from 'styled-components';

export const ModalStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, .4);
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: .5s;
  z-index: 1;
`;

export const ActiveModal = styled(ModalStyle)`
  opacity: 1;
  pointer-events: all;
`;

export const ModalContentStyle = styled.div`
  height: 50vh;
  width: 50vw;
  padding: 20px;

  border-radius: 12px;
  background-color: white;

  transform: scale(.5);
  transition: all .4s linear;
`;
export const ContentActive = styled(ModalContentStyle)`
  transform: scale(1);
`;

export const ModalClose = styled.div`
  display: block;
  margin-left: auto;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  opacity: .5;

  position: sticky;
  top: 0rem;

  transition: transform .4s linear, opacity .4s linear;
`;