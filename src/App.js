import React from 'react';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js';


class App extends React.Component {
  render() {
    return(
    <>
      <NavBar/>
      <ItemListContainer paragraph1='Bienvenidos a Design Dimensons!' paragraph2='Esto es un texto de prueba en donde puedo escribir lo que se me canta el upite sin h'/>
    </>
    )
  }
}

export default App;