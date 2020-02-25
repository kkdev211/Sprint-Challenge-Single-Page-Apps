import React, { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";


  // 1 TODO: Add useState to track data from useEffect
const CharacterList = props => {
  const [characters, setCharacters] = useState ([])

  useEffect(() => {
    // 2 TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getCharacters = () => {
      axios
        .get('https://rickandmortyapi.com/api/character/')
        .then(response => {
          // NEED TO PASS AN ARRAY AND NOT AN OBJECT
          setCharacters(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
      }
      getCharacters();
  }, []);
  console.log("Character Time:");
  console.log(characters);
  return (
    // <SearchForm />
    <section className="character-list">
      <h2> {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
      ))}</h2>
    </section>
  );
}

export default CharacterList;





