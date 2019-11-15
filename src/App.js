import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";
import CharacterList from "./components/CharacterList";
import LocationsList from "./components/LocationsList";

const App = () => {
  return (
    <main>
      <Header />
      <Route exact path="/" render={props => <WelcomePage {...props} />} />
      <Route
        path="/characters"
        render={props => <CharacterList {...props} />}
      />
      <Route path="/locations" render={props => <LocationsList {...props} />} />
    </main>
  );
};

export default App;
