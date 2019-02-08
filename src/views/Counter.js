import React from 'react'

import CounterLabel from '../components/counterLabel'


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0, value: Date.now() };
        console.log('Counter', 'Construction')
    }
    sbClicked = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    clearNum = () => {
        this.setState({
            number: 0
        });
    }

    updateValue = () => {
        this.setState({
            value: Date.now()
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.sbClicked}>Click me</button>
                <button onClick={this.updateValue}>Update value</button>
                <CounterLabel value={this.state.value} number={this.state.number} clear={this.clearNum} />
            </div>
        )
    }


}


export default Counter
