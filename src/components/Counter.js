import React from 'react';
import PropTypes from 'prop-types';

export const Counter = ({index, score, scoreIncrement, scoreDecrement}) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => scoreDecrement(index, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => scoreIncrement(index, 1)}> + </button>
        </div>
    );
}

Counter.propTypes = {
    index: PropTypes.number,
    score: PropTypes.number,
    scoreIncrement: PropTypes.func,
    scoreDecrement: PropTypes.func
}
