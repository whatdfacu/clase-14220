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
          <UserCard photo='https://www.freepnglogos.com/uploads/fallout-4-logo/allrez-fallout-4-fallout-mods-8.png' name='Kid' whenJoined='April 25' description='Love fallouts' friendsCount='1'/>
        </div>
        <div className='cardCentrada'>
          <UserCard photo='https://nintendo.pe/wp-content/uploads/2016/12/Donkey_Kong_Profile_Artwork.jpg' name='Donkey' whenJoined='december 19' description='Love bananas' friendsCount='33545'/>
        </div>
        <div className='cardCentrada'>
          <UserCard photo='https://thispersondoesnotexist.com/image' name='Random' whenJoined='some day' description='Who knows' friendsCount='∞'/>
        </div>
      </div>
      <ItemCount/>

    </>
        )
  }
}

export default App;