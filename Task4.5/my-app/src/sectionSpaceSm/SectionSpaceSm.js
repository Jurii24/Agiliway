import React from 'react';
import './SectionSpaceSm.css';
import '../button/Button';
import integration from '../assets/integration.png';
import Button from '../button/Button';
import H2andPLeft from '../text/H2andPLeft';

class SectionSpaceSm extends React.Component {
    render() {
        return (
            <section class="section-space-sm">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 col-xs-12">
                            <div class="integration-img">
                                <img src={integration} class="img-fluid" alt="integration" />
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <H2andPLeft h2="Designed &amp; built by the latest code 
                            integration" p="The rise of mobile devices transforms the way we 
                        consume information entirely and the world's most 
                        elevant channels such as Facebook." />
                            <Button text="Learn more" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default SectionSpaceSm;