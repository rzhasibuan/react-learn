import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()

    this.state = {
      product: []
    }
  }

  getProduct = async () => {
    let response = await axios.get('http://localhost:5000/product/6HGdBy2oK-Eoa0Ze');
    // let response = await axios.get('http://jsonplaceholder.typicode.com/users/1');

   
    let product = await response.data;
    let product2 = product.data;
    this.setState({
      product: product2.products
    });
  }

  componentDidMount(){
    this.getProduct()
  }

  render() {
    // object literal
    const {product} = this.state;
    return (
      <div>
         <div> id : {product.id}</div>
         <div> title : {product.title}</div>
         <div> description : {product.description}</div>
         <div> price : {product.price}</div>
      </div>
    )
  }
}

export default App
