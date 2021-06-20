import React from 'react';
import './H2andPCenter.css';

class H2andPCenter extends React.Component {
  render() {
    return (
      <div class="text-center">
      <h2 class="section-heading"> {this.props.h2} </h2>
      <p style={{marginBottom: 2 + 'em'}}> {this.props.p} </p>
      </div>
    );
  }
}

export default H2andPCenter;