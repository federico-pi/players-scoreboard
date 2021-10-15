import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Counter} from './Counter.js';
import {Icon} from './Icon'; 

export class Player extends PureComponent {

  render() {
    const {
      name,
      id,
      score,
      index,
      removePlayer,
      isHighScore
    } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => removePlayer(id)}>✖</button>
          <Icon isHighScore={isHighScore} /> 
          {name}
        </span>
  
        <Counter 
            score={score} 
            index={index}
        />
      </div>
    );
  }
}

Player.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
  score: PropTypes.number,
  index: PropTypes.number,
  removePlayer: PropTypes.func,
  handleHighScore: PropTypes.bool,
  isHighScore: PropTypes.bool
}
