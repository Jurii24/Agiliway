import React from 'react';
import './LeftImageTopAndTextUl.css';

class LeftImageTopAndTextUl extends React.Component {
  render() {
    return (
      <div class="col-md-6 col-sm-6">
        <div class="fact-item">
          <div class={this.props.imgColor}>
            <img src={this.props.images} class="img-fluid" alt="img" />
          </div>
          <div class="elipse-info zero">
            <h3 class="fact-head"> {this.props.h3} </h3>
            <p class="padding-right: 85px;">{this.props.p}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default LeftImageTopAndTextUl;