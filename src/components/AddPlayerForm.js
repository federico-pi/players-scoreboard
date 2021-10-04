import React, {Component} from 'react';

export class AddPlayerForm extends Component {
    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({value: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value !== '') {
        this.props.addPlayer(this.state.value);
        this.setState({value: ''})
        } else {
            alert('Please enter name of the player')
        }
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder="Enter player's name"
                />

                <input 
                    type="submit"
                    value="Add Player"
                />
            </form>
        )
    }
}
