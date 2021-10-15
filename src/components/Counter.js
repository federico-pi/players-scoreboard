import React from 'react';
import PropTypes from 'prop-types';
import {Consumer} from './Context';

export const Counter = ({index, score}) => {
    return (
        <Consumer>
            {context => (
                <div className="counter">
                    <button className="counter-action decrement" onClick={() => context.actions.scoreDecrement(index, -1)}> - </button>
                    <span className="counter-score">{score}</span>
                    <button className="counter-action increment" onClick={() => context.actions.scoreIncrement(index, 1)}> + </button>
                </div>
            )}
        </Consumer>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number
}
