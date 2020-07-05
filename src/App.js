import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { inventory: [] }
    }

    getInventory(){} //delivers inventory from db to state.

    addProduct(){} //adds product to state from Form on Form.js • submit button
    render() { 
        return ( 
        <div>
            <Header />
            <Dashboard inventory={this.}/>
            <Form />
            <Product />
        </div> 
        );
    }
}
 
export default App;