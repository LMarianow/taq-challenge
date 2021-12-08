import React from 'react';
import { CardContainer } from '../stylesheets/components/CardStyle';

export const Card = (props) => (
    <CardContainer>
        <img src={props.character.image} alt="Character" />
        <h2>{props.character.name}</h2>
        <p>
            <b>Id:</b> {props.character.id}
        </p>
        <p>
            <b>Status:</b> {props.character.status}
        </p>
    </CardContainer>
)