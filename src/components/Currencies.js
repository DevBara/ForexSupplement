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

        async remove(id){
            await fetch(`http://localhost:8080/ForexSupplement_api/v1/currencies${id}`,{
                method: 'DELETE',
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            }).then(() => {
                let updatedCurrencies = [...this.state.currencies].filter(i => i.id !== id);
                this.setState({currencies: updatedCurrencies});
            });
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
                    <td>
                        <ButtonGroup>
                            <Button >Edit</Button>
                            <Button onClick={() => this.remove(currency.id)}>Delete</Button>
                        </ButtonGroup>
                    </td>
                </tr>
            });

            return (
                <div>
                    <h2>Currency Tracker</h2>
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
            )
        }  
    }