import React, { Component } from 'react'
import Details from '../components/details'
import pubs from '../services/pup-service'


export default class Beer extends Component {
    render() {
        console.log(pubs);
        return (
            <div>
                <Details name={this.props.match.params.name} rate={this.props.match.params.rate} />
                <span>Beer</span>
            </div>
        )
    }
}
