import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'


class ItemCount extends Component {

    constructor(){
      super();
      this.state = {
        count: 0,
      };
    }
  
    handleCounterUp = () => {
        this.setState({ count: this.state.count + 1 });
    };
    handleCounterDown = () => {
        this.setState({ count: this.state.count - 1 });
    };
  
    render() {
      return(
      <>
        <div className='counter-container'>
          <div className='counter-title'>
              <h3>Items: {this.state.count}</h3>
          </div>
          <div className='counter'>
            <Button onClick={this.handleCounterUp} primary>+</Button>
            <Button onClick={this.handleCounterDown} positive>-</Button>
          </div>
        </div>

      </>
        )
    }
  }
  
  export default ItemCount;