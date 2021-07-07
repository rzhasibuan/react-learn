/* eslint-disable react/no-direct-mutation-state */
import React, { Component } from 'react';
// import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    this.state = {
      // product: [],
      firstname: '',
      lastname: '',
      name: '', 

    }
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.setState({
      name: `${this.state.firstname} ${this.state.lastname}`,
    })
    this.state.firstname = '';
    this.state.lastname = '';

  }
  // getProduct = async () => {
  //   let response = await axios.get('http://localhost:5000/product/6HGdBy2oK-Eoa0Ze');
  
  //   let product = await response.data;
  //   let product2 = product.data;
  //   this.setState({
  //     product: product2.products
  //   });
  // }

  // componentDidMount(){
  //   this.getProduct()
  // }

  render() {
    // object literal
    // const {product} = this.state;
    const {name} = this.state;
    return (
      <div className="p-5">
         <div className="container">
           <div className="row">
             <div className="col-md-6">
                <div className="card">
                  <div className="card-header">Learn React Js</div>
                  <div className="card-body">
                    {/* <div> id : {product.id}</div>
                    <div> title : {product.title}</div>
                    <div> description : {product.description}</div>
                    <div> price : {product.price}</div> */}
                    <form onSubmit={this.submitHandler}>
                      <div className="mb-4">
                        <label htmlFor="firstname" className="form-label">First Name</label>
                        <input type="text" value={this.state.firstname} onChange={this.changeHandler} name="firstname" className="form-control"/>
                      </div>
                      <div className="mb-4">
                        <label htmlFor="lastname" className="form-label">Last Name</label>
                        <input type="text" value={this.state.lastname} onChange={this.changeHandler} name="lastname" className="form-control"/>
                      </div>
                      <div className="mb-4">
                        <button type="submit" className="btn btn-primary">Show</button>
                      </div>
                      <div className="mb-4">
                        My name is {name ? name : '. . .'}
                      </div>

                    </form>
                  </div>
                </div>
             </div>
           </div>
         </div>
      </div>
    )
  }
}

export default App
