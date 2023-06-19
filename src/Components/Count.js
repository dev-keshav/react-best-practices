import React, { Component } from "react";

class Count extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    increment() {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <h2>{this.state.count}</h2>
                <button onClick={() => { this.increment() }}>Click</button>
            </div>
        )
    }
}

export default Count;