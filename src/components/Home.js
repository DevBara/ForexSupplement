import React, { Component } from 'react'
import Login from './Login'

export default class Home extends Component {
    render() {
        return (
            <div>
                <p> 
                    Use this site as a tool to aid in trading currencies by tracking your favorite currencies and their exchange rates.
                </p>
                <br></br>
                <br></br>
                <Login />
            </div>
        )
    }
}
