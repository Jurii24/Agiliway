import React from 'react';
import './H2andPLeft.css';

class H2andPCenter extends React.Component {
  render() {
    return (
      <div>
        <h2 class="section-heading">{this.props.h2}</h2>
        <p class="lead">{this.props.p}</p>
      </div>
    );
  }
}

export default H2andPCenter;