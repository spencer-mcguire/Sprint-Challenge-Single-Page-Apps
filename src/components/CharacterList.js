import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import SearchForm from "./SearchForm";

const CharacterList = () => {
  const [data, setdata] = useState([]);
  const [query, setQuery] = useState("");
  console.log(data);
  const handleSearch = e => {
    setQuery(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        const character = res.data.results.filter(character =>
          character.name.toLowerCase().includes(query.toLowerCase())
        );
        setdata(character);
      })
      .catch(err => console.log(err));
  }, [query]);

  return (
    <section>
      <SearchForm query={query} handleSearch={handleSearch} />
      <div className="character-list">
        {data.map(i => (
          <CharacterCard key={i.id} i={i} />
        ))}
      </div>
    </section>
  );
};

export default CharacterList;
