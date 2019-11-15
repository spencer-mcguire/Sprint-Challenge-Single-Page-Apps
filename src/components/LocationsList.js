import React, { useEffect, useState } from "react";
import axios from "axios";
import LocationCard from "./LocationCard";

const LocationsList = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        setData(res.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <section>
      <div className="character-list">
        {data.map(i => (
          <LocationCard key={i.id} i={i} />
        ))}
      </div>
    </section>
  );
};

export default LocationsList;
