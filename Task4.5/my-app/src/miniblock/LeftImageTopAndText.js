import React from 'react';
import './LeftImageTopAndText.css';

class LeftImageTopAndText extends React.Component {
  render() {
    return (
      <div class="feature-item column">
        <div class={this.props.imgColor}>
          <img src={this.props.images} class="img-fluid" alt="icon" />
        </div>
        <div class="elipse-info">
          <h3 class={this.props.textColor}>{this.props.h3}</h3>
          <p>{this.props.p}</p>
        </div>
      </div>
    );
  }
}

export default LeftImageTopAndText;