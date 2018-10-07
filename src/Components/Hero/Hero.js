import React from 'react';

import './Hero.css';

class Hero extends React.Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.active !== this.props.active;
  }

  render () {
    const {
      data,
      active,
      heroClicked
    } = this.props;

    return (
      <div
        className={`hero-logo ${data.name}-logo ${active ? 'active' : ''}`}
        onClick={() => heroClicked(data)}
      />
    )
  }
}

export default Hero;
