import React from "react";

const WelcomePage = props => {
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
      <button onClick={routeToChar}>Checkout the Characters</button>
    </section>
  );
};

export default WelcomePage;
