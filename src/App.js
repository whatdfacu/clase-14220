import React, { Component } from "react";
import Header from "./components/Header/Header.js";
import ItemCount from "./components/ItemCount/ItemCount.js";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.js";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <ItemDetailContainer />
        <ItemCount />
      </>
    );
  }
}

export default App;
