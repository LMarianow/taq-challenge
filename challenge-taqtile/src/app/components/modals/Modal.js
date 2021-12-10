import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks
  } from 'body-scroll-lock';
import { Background, ModalWrapper, ModalImg, ModalContent, CloseModalButton, EpisodesContainer } from '../../stylesheets/components/ModalStyle'
import CHARACTER_EPISODES from '../../querys/query-episodes';
import { useQuery } from "@apollo/client";
import Preloader from '../PreLoader';


export const Modal = ({ showModal, setShowModal, idCharacter }) => {

  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });
    
  useEffect(() => {
    const targetElement = modalRef.current;

    showModal ? disableBodyScroll(targetElement) :
      enableBodyScroll(targetElement);

    return () => {
      clearAllBodyScrollLocks();
    }
  }, [showModal])

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  const { loading, error, data } = useQuery(CHARACTER_EPISODES(idCharacter))
  if (loading) {
    return <Preloader/>
  }
  if (error) {
    return <p>an error occurred...</p>;
  }
  console.log(data)
  
  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
            <ModalImg src={data.character.image} alt='camera' />
              <ModalContent>
                <h1>Episódios de {data.character.name}</h1>
                <EpisodesContainer>
                  {data.character.episode.map((episode, index) => (
                    <p key={index}><b>{episode.id}-</b> {episode.name}</p>
                  ))}
                </EpisodesContainer>
              </ModalContent>
              <CloseModalButton
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};