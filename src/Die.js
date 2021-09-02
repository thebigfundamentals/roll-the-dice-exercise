import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() {
        let clsFace = `Die fas fa-dice-${this.props.face}`;
        return (
            <div>
                <i className={`${clsFace} ${this.props.rolling ? 'rolling' : null}`}></i>
            </div>
        );
    }
}

export default Die;