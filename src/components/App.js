import React, {Component} from 'react';
import {Header} from './Header';
import {Player} from './Player';
import {AddPlayerForm} from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Fred",
        score: 0,
        isHighScore: false,
        id: 1
      },
      {
        name: "Tracey",
        score: 0,
        isHighScore: false,
        id: 2
      },
      {
        name: "April",
        score: 0,
        isHighScore: false,
        id: 3
      },
      {
        name: "Randy",
        score: 0,
        isHighScore: false,
        id: 4
      }
    ]
  };

  prevPlayerId = 4;
  playerCrown = <svg viewBox="0 0 44 35">
                  <path d="M26.7616 10.6207L21.8192 0L16.9973 10.5603C15.3699 14.1207 10.9096 15.2672 7.77534 12.9741L0 7.24138L6.56986 28.8448H37.0685L43.5781 7.72414L35.7425 13.0948C32.6685 15.2672 28.3288 14.0603 26.7616 10.6207Z" transform="translate(0 0.301727)"/>
                  <rect width="30.4986" height="3.07759" transform="translate(6.56987 31.5603)"/>
                </svg>

  handleScoreIncrement = (index, delta) => {
    this.setState( prev => {
      if (prev.players[index].score >= 0) {
        const updatedPlayers = [...prev.players];
        const targetPlayer = {...updatedPlayers[index]};
        targetPlayer.score += delta;
        updatedPlayers[index] = targetPlayer;
        return {
          players: updatedPlayers
        };
      }
    })
  }

  handleScoreDecrement = (index, delta) => {
    this.setState( prev => {
      if (prev.players[index].score > 0) {
        const updatedPlayers = [...prev.players];
        const targetPlayer = {...updatedPlayers[index]};
        targetPlayer.score += delta;
        updatedPlayers[index] = targetPlayer;
        return {
          players: updatedPlayers
        };
      }
    })
  }

  getHighScore = () => {
    const scores = this.state.players.map( p => p.score );
    const highScore = Math.max(...scores);
    if (highScore) {
      return highScore;
    } 
    return null;
  }

  handleAddPlayer = (name) => {
    this.setState( prev => {
      return {
        players: [
          ...prev.players,
          {
            name,
            score: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    })
  }

  handleRemovePlayer = (id) => {
    this.setState( prev => {
      return {
        players: prev.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const highScore = this.getHighScore();
    
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            scoreIncrement={this.handleScoreIncrement}
            scoreDecrement={this.handleScoreDecrement}
            removePlayer={this.handleRemovePlayer}       
            isHighScore={highScore === player.score}    
          />
        )}

        <AddPlayerForm 
          addPlayer={this.handleAddPlayer}
        />
      </div>
    );
  }
}

export default App;
