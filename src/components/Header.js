import React from 'react';
import {Stats} from './Stats';

export const Header = (props) => {
    return (
      <header>
        <Stats 
          players={props.players}
        />
        <h1>{ props.title }</h1>
      </header>
    );
  }
