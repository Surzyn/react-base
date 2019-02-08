import React from 'react'
import DetailsLabel from './detailsLabel'

const Details = (props) => {
    return (
        <div>
            <h3>Details:</h3>
            <DetailsLabel name={props.name} rate={props.rate} />
        </div>
    )
}

export default Details
