import React from 'react';
import webDesign from '../assets/web-design.png'
import trophy from '../assets/trophy.png'
import computer from '../assets/computer.png'
import customerSupport from '../assets/customer-support.png'
import ui from '../assets/ui.png'
import customerService from '../assets/customer-service.png'
import H2andPCenter from '../text/H2andPCenter';
import CenterImageTopAndText from '../miniblock/CenterImageTopAndText';

class Facts extends React.Component {
    render() {
        return (
            <section id="facts" class="section-space">
                <div class="container">
                    <H2andPCenter h2="Why you should choose 
                    our app" p="The rise of mobile
                devices transforms the way we consume information entirely
                and the world's most elevant channels such as Facebook."/>
                    <div class="row pt-5 justify-content-center">
                        <CenterImageTopAndText color="elipse red" images={webDesign} h3="App Development"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests."/>
                        <CenterImageTopAndText color="elipse lblue" images={trophy} h3="10 Times Award"
                            p="Get your blood tests delivered at
                            home collect a sample from the news your blood tests."/>
                        <CenterImageTopAndText color="elipse yellow" images={computer} h3="Cloud Storage"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests."/>
                        <CenterImageTopAndText color="elipse green" images={customerSupport} h3="UX Planning"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests."/>
                        <CenterImageTopAndText color="elipse blue" images={ui} h3="10 Times Award"
                            p="Get your blood tests delivered at
                            home collect a sample from the news your blood tests."/>
                        <CenterImageTopAndText color="elipse lred" images={customerService} h3="Customer Support"
                            p="Get your blood tests delivered at  
                            home collect a sample from the news your blood tests."/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Facts;