import React from 'react';
import './Ultimate.css';
import Button from '../button/Button';
import webDesign from '../assets/web-design.png';
import ui from '../assets/ui.png';
import computer from '../assets/computer.png';
import customerService from '../assets/customer-service.png';
import features2 from '../assets/features-2.png';
import LeftImageTopAndTextUl from '../miniblock/LeftImageTopAndTextUl';
import H2andPLeft from '../text/H2andPLeft';

class Ultimate extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-7">
                        <H2andPLeft h2="Ultimate features that we built" 
                        p="The rise of mobile devices transforms the way we
                        consume information entirely"/>
                        <div class="row ultimate-features">
                            <LeftImageTopAndTextUl imgColor="elipse red" images={webDesign}
                                h3="App Development" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."/>
                            <LeftImageTopAndTextUl imgColor="elipse green" images={ui}
                                h3="UX Planning" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."/>
                            <LeftImageTopAndTextUl imgColor="elipse yellow" images={computer}
                                h3="Cloud Storage" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."/>
                            <LeftImageTopAndTextUl imgColor="elipse red" images={customerService}
                                h3="Customer Support" p="Get your blood tests delivered at
                                home collect a sample from the news your blood tests."/>
                        </div>
                        <Button text="See all" />
                    </div>
                    <div class="col-5">
                        <div class="feature-img">
                            <img src={features2} class="img-fluid" alt="features-2" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ultimate;