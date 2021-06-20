import React from 'react';
import './RegCenter.css';

class RegCenter extends React.Component {
  render() {
    return (
      <h2 class="text-center regCenter"> {this.props.text} </h2>
    );
  }
}

export default RegCenter;