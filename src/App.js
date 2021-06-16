import React, { Component } from 'react';
import NavBar from './components/NavBar.js'
import UserCard from './components/UserCard.js'
import ItemCount from './components/ItemCount.js'

class App extends Component {


  render() {
    return(
    <>
      <NavBar/>
      <div className='container'>
        <div className='cardCentrada'>
          <UserCard photo='./images/falloutUser.png' name='Kid' whenJoined='April 25' description='Love fallouts'/>
        </div>
        <div className='cardCentrada'>
          <UserCard photo='./images/DonkeyKongUser.jpg' name='Donkey' whenJoined='december 19' description='Love bananas'/>
        </div>
        <div className='cardCentrada'>
          <UserCard photo='https://thispersondoesnotexist.com/image' name='Random' whenJoined='some day' description='Who knows'/>
        </div>
      </div>
      <ItemCount/>

    </>
        )
  }
}

export default App;