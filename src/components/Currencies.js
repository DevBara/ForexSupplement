import React, { Component } from 'react'
import { Button, Container, Form, FormGroup, Input, Label,Table } from 'reactstrap';

//used for button references/help
// https://www.truecodex.com/course/react-js/crud-4-create-insert-delete-update-in-react-js-using-api



export default class Currencies extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading: true,
            currencies: [],
           
        };
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
      }

    componentDidMount(){
        this.setState({
            isLoading:true});

            fetch('/ForexSupplement_api/v1/currencies')
                .then(response => response.json())
                .then(data => this.setState({
                    currencies: data,
                    isLoading:false
            }))
        }

        async remove(id) {
            await fetch(`/ForexSupplement_api/v1${id}`, {
              method: 'DELETE',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            }).then(() => {
              let updatedCurrencies = [...this.state.currencies].filter(i => i.id !== id);
              this.setState({currencies: updatedCurrencies});
            });
          }

          async add() {
            await fetch(`/ForexSupplement_api/v1/currencies`, {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
            })
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
                        <Button onClick={() => this.add()}>Edit</Button>
                        <Button onClick={() => this.remove(currency.id)}>Delete</Button>
                    </td>
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
                            <th>Actions</th>
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