import React, { Component } from 'react'
import ReactTable from "react-table";


export default class Currencies extends Component {
    constructor(props){
        super(props);

        this.state ={
            currencies : []
        };
    }


    componentDidMount(){
        fetch('http://localhost:8080/ForexSupplement_api/v1/currencies')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    currencies: responseData
                })
            })
            .catch(err => console.error(err))

    }

    render() {
        const columns = [{
            Header: 'Currency',
            accessor: 'currencyName',
            Cell: this.editable
        },{
            Header: 'Code',
            accessor: 'currencyCode',
            Cell: this.editable

        }, {
            Header: 'Amount',
            accessor: 'currencyAmt'
        }, {
            Header: 'Rate',
            accessor: 'currencyRate'
        }
    ,];
        

        return (
            <div>
               <ReactTable data={this.state.currencies} 
               columns={columns} filterable={true} />
                
            </div>
        );
    }
}
