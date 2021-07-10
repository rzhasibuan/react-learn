/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super()

        this.state = {
            bilangan1 : '',
            bilangan2 : '',
            hasil : '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })
    }

    resultKali = (e) => {
        e.preventDefault()
        this.setState({
            hasil: parseInt(this.state.bilangan1) * parseInt(this.state.bilangan2)
        });
        console.log(this.state)
    }

    resultTambah = (e) => {
        e.preventDefault()
        this.setState({
            hasil: parseInt(this.state.bilangan1) + parseInt(this.state.bilangan2)
        })
    }

    resultKurang = (e) => {
        e.preventDefault()
        this.setState({
            hasil: parseInt(this.state.bilangan1) - parseInt(this.state.bilangan2)
        })
    }

    resultBagi = (e) => {
        e.preventDefault()
        this.setState({
            hasil: parseInt(this.state.bilangan1) / parseInt(this.state.bilangan2)
        })
    }


    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card mt-2">
                            <div className="card-header">
                                Calculator Smart
                            </div>
                            <div className="card-body">
                                <form>
                                    <div className="mb-2">
                                        <label htmlFor="bilangan1">Bilangan 1</label>
                                        <input type="number" value={this.state.bilangan1} onChange={this.inputHandler} name="bilangan1" className="form-control"/>
                                    </div>
                                    <div className="mb-2">
                                        <label htmlFor="bilangan2">Bilangan 2</label>
                                        <input type="number" value={this.state.bilangan2} onChange={this.inputHandler} name="bilangan2" className="form-control"/>
                                    </div>
                                    <div className="mb-2">
                                       <button onClick={this.resultKali} className="btn btn-primary mr-2">x</button>
                                       <button onClick={this.resultTambah} className="btn btn-primary mr-2">+</button>
                                       <button onClick={this.resultKurang} className="btn btn-primary mr-2">-</button>
                                       <button onClick={this.resultBagi} className="btn btn-primary mr-2">/</button>
                                       {/* <button className="btn btn-primary mr-2">+</button>
                                       <button className="btn btn-primary mr-2">-</button>
                                       <button className="btn btn-primary mr-2">/</button> */}
                                    </div>
                                    <div className="mb-2">
                                        <div>Hasil : {this.state.hasil}</div>
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