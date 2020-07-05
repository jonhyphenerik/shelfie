import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            productName: '',
            price: '',
            imageUrl: ''
        }
    }
    // updates this.state.productName to contents of target
    productNameHandler(){ e => this.setState({ productName: e.target.value })}

    imageUrlHandler(){e => this.setState({ imageUrl: e.target.value })};

    priceHandler(){e => this.setState({ price: e.target.value }) }

    //posts product from inputs to db
    submitHandler(){}; 

    cancelHandler(){e => this.getElementByTagName('input').value = ''}

    render() { 
        return ( 
        <div>
            <input id="productName" onChange={productNameHandler}/>
            <input id="price" onChange={priceHandler}/>
            <input id="imageUrl" onChange={imageUrlHandler}/>
            <button id='submit' onClick={submitHandler}>+ to Inventory</button>
            <button id='cancel' onClick={cancelHandler}>cancel</button>
        </div> 
        )
    }
}
 
export default Form;