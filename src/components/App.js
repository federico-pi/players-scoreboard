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
        id: 1
      },
      {
        name: "Tracey",
        score: 0,
        id: 2
      },
      {
        name: "April",
        score: 0,
        id: 3
      },
      {
        name: "Randy",
        score: 0,
        id: 4
      }
    ]
  };

  //Plaer ID counter
  prevPlayerId = 4;

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
    return (
      <div className="scoreboard">
        <Header 
          title="Scoreboard" 
          players={this.state.players}
        />
  
        {/* Players list */}
        {this.state.players.map( (player, index) =>
          <Player 
            name={player.name}
            score={player.score}
            id={player.id}
            key={player.id.toString()} 
            index={index}
            // changeScore={this.handleScoreChange}
            scoreIncrement={this.handleScoreIncrement}
            scoreDecrement={this.handleScoreDecrement}
            removePlayer={this.handleRemovePlayer}           
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
