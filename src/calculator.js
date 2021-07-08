/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Calculator extends Component {
    constructor(){
        super()
        this.state = {
            bilangan1: '',
            bilangan2: '',
            hasil : '',
         }
    }

    changeHandlerCalculator = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    submitPerkalian = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.setState({
            hasil: this.state.bilangan1 * this.state.bilangan2
        })
    }

    render() {
        const hasil = this.state.hasil;
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                Calculator Smart
                            </div>
                            <div className="card-body">
                                <form onSubmit={this.submitPerkalian}>
                                    <div className="mb-2">
                                        <label htmlFor="bilangan1">Bilangan 1</label>
                                        <input type="text" value={this.state.bilangan1} onChange={this.changeHandlerCalculator} name="bilangan1" className="form-control"/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="bilangan2">Bilangan 2</label>
                                        <input type="text" value={this.state.bilangan2} onChange={this.changeHandlerCalculator} name="bilangan2" className="form-control"/>
                                    </div>
                                    <div className="mb-2">
                                       <button className="btn btn-primary mr-2">x</button>
                                       {/* <button className="btn btn-primary mr-2">+</button>
                                       <button className="btn btn-primary mr-2">-</button>
                                       <button className="btn btn-primary mr-2">/</button> */}
                                    </div>
                                    <div className="mb-2">
                                        <div>Hasil : {hasil} </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default Calculator;