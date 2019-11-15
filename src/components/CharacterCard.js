import React from "react";

const CharacterCard = props => {
  const { name, status, species, image, id } = props.i;
  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{species}</p>
      <p>{status}</p>
    </div>
  );
};

export default CharacterCard;
