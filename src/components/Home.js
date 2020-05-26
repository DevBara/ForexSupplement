import React, { Component } from 'react'
import Login from './Login'
import WorldFor from '../assets/WorldFor.jpeg'

export default class Home extends Component {
    render() {
        return (
            <div>
            <img src={WorldFor} className="homePic"/>
            <Login />
                <p className="subText"> 
                    Use this site as a tool to aid in trading currencies by tracking your favorite currencies and their exchange rates.
                </p>
                <br></br>
                <br></br>
            </div>
        )
    }
}
