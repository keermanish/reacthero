import React, { Component } from 'react';

import Hero from '../Hero/Hero';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.heroes = [{
      name: 'flash',
      power: 'I am so Fast!'
    }, {
      name: 'hulk',
      power: 'I am so Strong and always Angry!'
    }, {
      name: 'batman',
      power: 'I am so Rich!'
    }, {
      name: 'superman',
      power: 'I can beat all!'
    }];

    this.state = {
      activeHero: this.heroes[0]
    }
  }

  heroClicked = hero => {
    this.setState({ activeHero: hero })
  }

  render() {
    const {
      activeHero
    } = this.state;

    return (
      <div className={`app ${activeHero.name}-bg`}>
        <div className="wrapper">
          <div className="hero-container">
            <div className="hero-list">
              {
                this.heroes.map((h) => (
                  <Hero active={activeHero.name === h.name} key={h.name} data={h} heroClicked={this.heroClicked} />
                ))
              }
            </div>
            <h2>{activeHero.power}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
