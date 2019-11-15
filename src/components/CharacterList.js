import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

const CharacterList = () => {
  const [data, setdata] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => setdata(res.data.results))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="character-list">
      {data.map(i => (
        <CharacterCard key={i.id} i={i} />
      ))}
    </section>
  );
};

export default CharacterList;
