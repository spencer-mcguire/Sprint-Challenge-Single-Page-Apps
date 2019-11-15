import React from "react";
import styled from "styled-components";

const LocationCard = props => {
  const { name, type, dimension, residents } = props.i;
  const Container = styled.div`
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
    padding: 2rem;
    margin: 1rem;
    border-radius: 4px;
    text-align: center;
  `;
  return (
    <Container>
      <h2>{name}</h2>
      <p>{type}</p>
      <p>{dimension}</p>
      <p>{residents}</p>
    </Container>
  );
};

export default LocationCard;
