import React, { Component } from 'react'
import { Item } from './Item';

class ItemList extends Component {

    constructor() {
        super();

        this.state = {
            items: []
        };
    }

    componentDidMount() {
        setTimeout(() => {
/*             console.log ("ComponentDidMount") */
            this.setState({items: Item});
        }, 2000);
;    }

    render() {
        return (
            <div>
                {this.state.items.map((item) => {
                    return (
                        <div key={item.id}>
                            <ul>
                                <li>{item.name}</li>
                            </ul>             
                        </div>

                    )
                })}
            </div>
        )
    }
}

export default ItemList;