import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 10;
  border-radius: 10px;
  @media screen and (max-width: 768px) {
    display: grid;
    width: 350px;
    height: 600px;
    grid-template-columns: 100%;
    grid-template-rows: repeat(2, 1fr);
  }
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 500px;
  border-radius: 10px 0 0 10px;
  background: #000;
  @media screen and (max-width: 768px) {
    height: auto;
    grid-area: 1 / 1 / 2 / 2;
    border-radius: 10px 10px 0 0;
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #141414;
  overflow: hidden;
  h1{
    margin-right: 1em; 
  }
  @media screen and (max-width: 768px) {
    grid-area: 2 / 1 / 3 / 2;
    overflow: hidden;
  }
`;

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  color: #141414;
  overflow-y: auto;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;