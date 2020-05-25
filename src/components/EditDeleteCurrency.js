import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';

 class EditDeleteCurrency extends Component {

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

    async handleSubmit(event){
        event.preventDefault();

        const{item} = this.state;

        await fetch('/ForexSupplement_api/v1', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application.json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/currencies');
    }


    render() {

        const {item} = this.state;
        
    return <div>
                <Container>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Label for ="currencyName">Currency Name</Label>
                            <Input type ="text" name="currencyName" id = 'currencyName' value={item.currencyName || '' }
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="currencyCode">Currency Code</Label>
                            <Input type ="text" name="currencyCode" id="currencyCode" value={item.currencyCode || ''}
                                onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Button type="submit">Save</Button>{''}
                            <Button tag={Link} to ="/currencies">Cancel</Button>
                        </FormGroup>
                    </Form>
                </Container>
            </div>
        
    }
 
}

export default withRouter(EditDeleteCurrency);