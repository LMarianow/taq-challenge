import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import CHARACTER_INFO from "../querys/query-character";
import { Card } from "../components/Card"
import { CardList } from '../stylesheets/components/CardListStyle';
import toast from "react-hot-toast";

function FirstScreen(){
    const { loading, error, data } = useQuery(CHARACTER_INFO)
    if (loading) {
        return toast.error('Ops, houve um erro. Tente novamente em alguns minutos')
      }
    if (error) {
    return <p>an error occurred...</p>;
    }
 return(
    <CardList>
      {data.characters.results.map((character, index) => (
      <Card key={character.id} character={character}/>
    ))}
  </CardList>
 );

}

export default FirstScreen;