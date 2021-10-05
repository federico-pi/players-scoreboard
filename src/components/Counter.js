import React from 'react';

export const Counter = ({index, score, scoreDecrement, scoreIncrement}) => {
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => scoreDecrement(index, -1)}> - </button>
            <span className="counter-score">{score}</span>
            <button className="counter-action increment" onClick={() => scoreIncrement(index, 1)}> + </button>
        </div>
    );
}
