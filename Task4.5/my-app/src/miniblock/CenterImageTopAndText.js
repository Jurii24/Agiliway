import React from 'react';
import './CenterImageTopAndText.css';

class CenterImageTopAndText extends React.Component {
  render() {
    return (
      <div class="col-md-4 col-sm-6">
        <div class="fact-item">
          <div class={this.props.color}>
            <img src={this.props.images} 
            class="img-fluid" alt="img" />
          </div>
          <div class="elipse-info text-center">
            <h3 class="fact-head"> {this.props.h3} </h3>
            <p>{this.props.p}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CenterImageTopAndText;