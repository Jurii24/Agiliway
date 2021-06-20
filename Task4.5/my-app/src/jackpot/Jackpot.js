import React from 'react';
import './Jackpot.css';
import icon4 from '../assets/icon-4.png';
import icon5 from '../assets/icon-5.png';
import icon6 from '../assets/icon-6.png';
import LeftImageTopAndText from '../miniblock/LeftImageTopAndText';

class Jackpot extends React.Component {
    render() {
        return (
            <section id="jackpot" class="section-space">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-6 horizontal">
                            <h1 class="display-4">
                                Smart jackpots that
                                you may love this
                        anytime &amp; anywhere</h1>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <p class="lead">The rise of mobile devices transforms the way we
                            consume information entirely and the world's most
                        elevant channels such as Facebook.</p>
                        </div>
                    </div>
                    <div class="row justify-content-center py-5">
                        <div class="feature-list d-flex">
                            <LeftImageTopAndText imgColor="elipse red" images={icon4} textColor="red"
                                h3="Automatic Payouts" p="Get your blood tests delivered at  
                                home collect a sample from the news your blood tests."/>
                            <LeftImageTopAndText imgColor="elipse blue" images={icon5} textColor="blue"
                                h3="Network Effect" p="Get your blood tests delivered at  
                                home collect a sample from the news your blood tests."/>
                            <LeftImageTopAndText imgColor="elipse green" images={icon6} textColor="green"
                                h3="Bigger Rewards Method" p="Get your blood tests delivered at  
                                home collect a sample from the news your blood tests."/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Jackpot;