import React from 'react';
import NavBar from './components/NavBar.js'
import ItemListContainer from './components/ItemListContainer.js';


class App extends React.Component {
  render() {
    return(
    <>
      <NavBar/>
      <ItemListContainer title='Bienvenidos a Design Dimensons!' className='nav-principal'/>
    </>
    )
  }
}

export default App;