import React, {Component} from 'react';
import {Header} from './Header';
import {Player} from './Player';
import {AddPlayerForm} from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        score: 0,
        id: 1
      },
      {
        name: "Treasure",
        score: 0,
        id: 2
      },
      {
        name: "Ashley",
        score: 0,
        id: 3
      },
      {
        name: "James",
        score: 0,
        id: 4
      }
    ]
  };

  //Plaer ID counter
  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState( prev => {
      const updatedPlayers = [...prev.players];
      const updatedPlayer = {...updatedPlayers[index]};
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;
      return {
        players: updatedPlayers
      };
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
            changeScore={this.handleScoreChange}
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
