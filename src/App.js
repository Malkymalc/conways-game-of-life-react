import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faQuestion } from '@fortawesome/free-solid-svg-icons'

import Game from './containers/gameContainer.js';
import withSplash from './components/withSplash.js';

library.add(faBars, faQuestion);


class App extends Component {

  render() {
    return (
      <Game className="game"/>
    );
  }
}

export default withSplash(App);
