import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="titleParent">
                <h1 className="title">Wordly Currency App</h1>
                <p className="subtitle">The only site you need to track and read news</p>
            </div>
        )
    }
}