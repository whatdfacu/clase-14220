import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ItemDetailContainer />
        <ItemCount />
      </>
    );
  }
}

export default App;
