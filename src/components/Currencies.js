import React, { Component } from 'react'
import ReactTable from "react-table";




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
    
            const columns = [{
                Header: 'Currency',
                accessor: 'currencyName',
                Cell: this.editable
            }, {
                Header: 'Code',
                accessor: 'currencyCode',
                Cell: this.editable
            }, {
                Header: 'Amount',
                accessor: 'currencyAmount'
            }, {
                Header: 'Rate',
                accessor: 'currencyRate'
            }
                ,];
        
            return (
                <div>
                    <ReactTable data={this.state.currencies} columns={columns} filterable={true}/>
                </div>
            );
        }  
    }