import React from "react";
import styled from "styled-components";

const WelcomePage = props => {
  const Button = styled.button`
    padding: 15px 50px;
    border: none;
    border-radius: 4px;
    background: radial-gradient(circle, #3f5efb, #46fafc);
    color: white;
    font-weight: bold;
    font-size: 1.5rem;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 10px 7px rgba(0, 0, 0, 0.22);
  `;

  const routeToChar = () => {
    props.history.push("/characters");
  };

  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
      </header>
      <div className="home-button">
        <Button onClick={routeToChar}>Checkout the Characters</Button>
      </div>
    </section>
  );
};

export default WelcomePage;
