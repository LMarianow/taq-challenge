import React from "react";
import { useQuery } from "@apollo/client";
import CHARACTER_INFO from "../querys/query-character";
import Card from "../components/Card";
import { CardList } from '../stylesheets/components/CardListStyle';
import Preloader from "../components/PreLoader";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FirstScreen(){
  
  const { loading, error, data } = useQuery(CHARACTER_INFO)
  if (loading) {
    return <Preloader/>
  }
  if (error) {
    return toast.error("Erro de conexão!!");
  }
 return(

    <CardList>
        {data.characters.results.map((character, index) => (
        <Card key={index} character={character}/>
      ))}
    </CardList>

 );

}

export default FirstScreen;