import React, { useState } from "react";
import { CardContainer } from '../stylesheets/components/CardStyle';
import { Modal } from "./modals/Modal";

export default function Card(props) {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
      setShowModal(prev => !prev);
    };

    return (
    <>
        <CardContainer onClick={openModal}>
            <img src={props.character.image} alt="Character" />
            <h2>{props.character.name}</h2>
            <p>
                <b>Id:</b> {props.character.id}
            </p>
            <p>
                <b>Status:</b> {props.character.status}
            </p>
        </CardContainer >
        <Modal showModal={showModal} setShowModal={setShowModal} idCharacter={props.character.id} />
    </>
    );
}