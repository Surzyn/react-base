import React, { useEffect } from 'react'

const CounterLabel = (props) => {

    useEffect(() => {
        console.log('aaa');
    })

    return (
        <div onClick={props.clear}>
            {props.number}
            <br />
            {props.value}
        </div>
    )
}

export default CounterLabel;