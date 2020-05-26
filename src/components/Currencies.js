import React, { Component } from 'react'
import {Button, ButtonGroup,Table} from 'reactstrap'
import { Link } from 'react-router-dom';




export default class Currencies extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            currencies: []
        };
    }

    componentDidMount(){
        this.setState({
            isLoading:true});

            fetch('http://localhost:8080/ForexSupplement_api/v1/currencies')
                .then(response => response.json())
                .then(data => this.setState({
                    currencies: data,
                    isLoading:false
            }))
        }

    
        render() {
            const{currencies,isLoading} = this.state;

            if(isLoading){
                return <p> Loading...</p>
            }

            const currencyList=currencies.map(currency => {
                return <tr key ={currency.id}>
                    <td>{currency.currencyName}</td>
                    <td>{currency.currencyCode}</td>
                    <td>{currency.currencyAmt}</td>
                    <td>{currency.currencyRate}</td>
                </tr>
            });

            return (
                <div className="currencyTitle">
                    <h2>Tracked Currencies</h2>
                
                <div className="trackerContainer">
                    <Table>
                        <thead>
                        <tr>
                            <th>Currency Name</th>
                            <th>Currency Code</th>
                            <th>Amount</th>
                            <th>Exchange Rate</th>
                        </tr>
                        </thead>
                        <tbody>
                            {currencyList}
                        </tbody>                               
                    </Table>
                </div>
                </div>
            )
        }  
    }