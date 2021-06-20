import React from 'react';
import './Download.css';
import ios from '../assets/ios.png';
import play from '../assets/play.png';
import download from '../assets/download.png';

class Download extends React.Component {
    render() {
        return (
            <section id="download" class="section-space">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-xs-12">
                            <div class="download-content">
                                <h1>Download Our App Now!</h1>
                                <p>The rise of mobile devices transforms the way we consume information entirely
                            and the world's most elevant channels such as Facebook.</p>
                                <div class="download-btns">
                                    <a href="https://play.google.com/store/apps/" target="_blank">
                                        <img src={play} class="img-fluid" alt="GoogleStore" />
                                    </a>
                                    <a href="https://itunes.apple.com/us/app/" target="_blank">
                                        <img src={ios} class="img-fluid" alt="AppStore" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <img src={download} class="img-fluid" alt="download" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Download;