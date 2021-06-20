import React from 'react';
import './Home.css';
import Button from '../button/Button';
import correct from '../assets/correct.png';
import phone0 from '../assets/phone_0.png';

class Home extends React.Component {
    render() {
        return (
            <section id="home">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-7 col-xs-12">
                            <div class="home-content">
                                <div class="best-app">
                                    <div class="circle">
                                        <img src={correct} class="img-fluid" alt="correct" />
                                    </div>
                                    <h3>#1 Editiors Choice App of 2020 </h3>
                                </div>
                                <h1>Best app for your
                                modern lifestyle
                  </h1>
                                <p>Increase productivity with a simple to-do app. app for
                            managing your personal budgets.</p>
                                <div class="home-btn">
                                    <Button text="Try for free" />
                                    <a href="#" class="btn unstyled-btn"> Watch demo video </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-5 col-xs-12">
                            <div class="home-img">
                                <img src={phone0} class="img-fluid" alt="phone_0" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;