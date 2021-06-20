import React from 'react';
import './Button.css';

class Button extends React.Component {
  render() {
    return (
      <a class="btn main-btn" href="#"> {this.props.text} </a>
    );
  }
}

export default Button;