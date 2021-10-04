import React, {Component} from 'react';

export class Stopwatch extends Component {
    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }

    tick = () => {
        if (this.state.isRunning) {
            const now = Date.now();
            this.setState( prev => ({
                previousTime: now,
                elapsedTime: prev.elapsedTime + (now - this.state.previousTime)
            }))
        }
    }
    
    handleStopwatch = () => {
        this.setState( prev => ({
            isRunning: !prev.isRunning
        }))
        if (!this.state.isRunning) {
            this.setState({
                previousTime: Date.now()
            })
        }
    }

    handleReset = () => {
        this.setState({
            isRunning: false,
            elapsedTime: 0
        })
    }

    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className="stopwatch-time"> {
                    Math.floor(this.state.elapsedTime / 1000) 
                    + '.' 
                    + Math.floor(this.state.elapsedTime / 100 % 10)
                    }
                </span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button> 
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
