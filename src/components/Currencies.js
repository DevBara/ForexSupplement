import React, { Component } from 'react'



export default class Currencies extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            currencies: []
        };
    }

        async componentDidMount(){
            //grab url use for Request Mapping in Eclipse
            const response = await fetch('http://localhost:8080/ForexSupplement_api/v1/currencies');
            const body = await response.json();
            this.setState({
                currencies:body, 
                isLoading: false
            });
        }
    
    render() {
        const {currencies,isLoading} =this.state;

        if(isLoading){
            return<p>Loading...</p>
        }
        return (
            <div className ="currencyContainer">
                <h2>Employee List</h2>
                {currencies.map(currency =>
                  <div key={currency.id} className="currencyParent">
                      <table className="currencyTable">
                        <tr>
                          <th>Currency Name</th>
                          <th>Currency Code</th>
                          <th>Amount</th>
                          <th>Rate</th>
                        </tr>
                        <tr>
                          <td>{currency.currencyName}</td>
                          <td>{currency.currencyCode}</td>
                          <td>{currency.currencyAmt}</td>
                          <td>{currency.currencyRate}</td>
                        </tr>
                      </table>
                  </div>
                )}

          </div>
        )
    }
}