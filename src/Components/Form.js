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

    clearHandler(){e => this.getElementByTagName('input').value = ''}

    render() { 
        return ( 
        <div>
            <input id="productName" onChange={productNameHandler}/>
            <input id="price" onChange={priceHandler}/>
            <input id="imageUrl" onChange={imageUrlHandler}/>
            <button id='submit' onClick={submitHandler}>submit</button>
            <button id='clear' onClick={clearHandler}>clear</button>
        </div> 
        )
    }
}
 
export default Form;