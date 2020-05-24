import React, { Component } from 'react'
import SkyLight from 'react-skylight';

export default class AddCurrency extends Component {

    constructor(props){
        super(props);


        this.state= {
            currencyName: '',
            currencyCode: '',
            currencyAmt: '',
            currencyRate: ''
        };
    }


    handleChange = (event) => {
        this.setState(
            {[event.target.name]:
            event.target.value}
        );
    };

    handleSubmit = (event) =>{
        event.preventDefault();
        let currency = {
            name: this.state.currencyName, 
            code: this.state.currencyCode, 
            amount: this.state.currencyAmt, 
            rate: this.state.currencyRate
        };
        this.props.addCurrency(currency);
        this.refs.addDialog.hide();
    }


    render() {
        return (
            <div>
                <Skylight hideOnOverlayClicked ref="addDialog">
                    <h3>Add Currency</h3>
                    <form>
                        <input type ="text" placeholder="Currency Name" name="currencyName" onChange={this.handleChange} />
                        <input type ="text" placeholder ="Currency Code" name="currencyCode" onChange={this.handleChange} />
                        <input type ="text" placeholder = "Amount" name="currencyAmt" onChange={this.handleChange} />
                        <input type ="text" placeholder ="Exchange Rate" name="currencyRate" onChange={this.handleChange} />
                    </form>
                </Skylight>
                <div>
                    <button onClick={() => this.refs.addDialog.show()}>Add Currency</button>
                </div>
            </div>

        )
    }
}
