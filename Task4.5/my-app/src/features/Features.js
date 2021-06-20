import React from 'react';
import './Features.css';
import featuresphone from '../assets/features-phone.png';
import icon1 from '../assets/icon-1.png';
import icon2 from '../assets/icon-2.png';
import icon3 from '../assets/icon-3.png';
import H2andPLeft from '../text/H2andPLeft';

class Features extends React.Component {
  render() {
    return (
      <section id="features" class="section-space">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-6 col-xs-12">
              <div class="feature-img">
                <img src={featuresphone} class="img-fluid" alt="features-phone" />
              </div>
            </div>
            <div class="col-md-6 col-xs-12">
              <H2andPLeft h2="Awesome apps features" 
              p="Increase productivity with a simple to-do app. app for
                        managing your personal budgets."/>
              <div class="feature-list">
                <div class="feature-item">
                  <div class="elipse red">
                    <img src={icon1} class="img-fluid" alt="icon-1" />
                  </div>
                  <div class="elipse-info">
                    <h3 class="red"> Fast Performance </h3>
                    <p>Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="elipse blue">
                    <img src={icon2} class="img-fluid" alt="icon-2" />
                  </div>
                  <div class="elipse-info">
                    <h3 class="blue"> Prototyping </h3>
                    <p>Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests.</p>
                  </div>
                </div>
                <div class="feature-item">
                  <div class="elipse green">
                    <img src={icon3} class="img-fluid" alt="icon-3" />
                  </div>
                  <div class="elipse-info">
                    <h3 class="green"> Vector Editing </h3>
                    <p>Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;