import React from 'react';

export const Counter = (props) => {
    let index = props.index
  
    return (
        <div className="counter">
            <button className="counter-action decrement" onClick={() => props.scoreDecrement(index, -1)}> - </button>
            <span className="counter-score">{props.score}</span>
            <button className="counter-action increment" onClick={() => props.scoreIncrement(index, 1)}> + </button>
        </div>
    );
}
