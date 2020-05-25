import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

export default class EditDeleteCurrency extends Component {

    emptyItem = {
        currencyName:'',
        currencyCode: '',
        currencyAmt: '',
        currencyRate: ''
    };

    constructor(props){
        super(props);

        this.state= {
            item: this.emptyItem
        };

        // Bind Buttons
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount(){
        if(this.props.match.params.id !== 'new'){
            const group = await (await fetch (`/ForexSupplement_api/v1/${this.props.match.params.id}`)).json();
            this.setState({item: group});
        }
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }


    render() {
        return (
            <div>
                
            </div>
        )
    }
}
