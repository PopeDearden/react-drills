import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        return (
            <div>
                <img src={this.props.url} alt="burrito" />
                <p> Error 599</p>
            </div>
        )
    }
}