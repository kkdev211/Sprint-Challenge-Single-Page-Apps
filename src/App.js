import React, {useState} from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage";


import CharacterList from "./components/CharacterList";


export default function App() {
  return (
    <main>
      <Header />
      {/* <CharacterList /> */}
      <Route path="/" exact component={WelcomePage} />
      <Link to="/characters">Character List></Link>
      <Route path="/characters" exact component={CharacterList} />
    </main>
  );
}
