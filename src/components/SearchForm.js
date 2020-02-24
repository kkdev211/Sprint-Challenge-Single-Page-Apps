import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SearchForm() {

  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => { 
    axios
        .get('https://rickandmortyapi.com/api/character/')
        
        .then(response => {
          console.log(response);
          const characters = response.data.results.filter(character =>
            character.name.toLowerCase().includes(query.toLowerCase())
          );
        setData(characters);
          });
  }, [query]);
 
  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  return (
    <section className="search-form">
     // Add a search form here
     <form>
       <label htmlFor="name">Search:</label>
       <input 
        type="text"
        onChange={handleInputChange}
        value={query}
        name="name"
        tabIndex="0"
        className="prompt search-name"
        placeholder="search by name"
        autoComplete="off"
          />
     </form>
     <div className="character-list">
       <ul>
       {data.map(character => {
            return <li key={character.id}>{character.name}</li>;
          })}
       </ul>
     </div>
    </section>
  );
}
