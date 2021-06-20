import React from 'react';
import './Footer.css';
import fb from '../assets/fb.png';
import tw from '../assets/tw.png';
import sl from '../assets/sl.png';
import gt from '../assets/gt.png';

class Footer extends React.Component {
    render() {
        return (
            <footer class="section-space-sm">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-md-12">
                            <div class="logo">
                                <span>App</span>Lab
                    </div>
                            <ul class="nav-list list-unstyled d-flex justify-content-center">
                                <li class="nav-item">
                                    <a href="#home" class="nav-link"> Home </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#features" class="nav-link"> Key Features </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#pricing" class="nav-link"> Pricing </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#testimonials" class="nav-link"> Testimonials </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#faqs" class="nav-link"> FAQs </a>
                                </li>
                            </ul>
                            <div class="social-icon">
                                <i class="fab fa-facebook-f">
                                    <img src={fb} class="imgFoot" alt="fb" />
                                </i>
                                <i class="fab fa-twitter">
                                    <img src={tw} class="imgFoot" alt="tw" />
                                </i>
                                <i class="fab fa-slack-hash">
                                    <img src={sl} class="imgFoot" alt="sl" />
                                </i>
                                <i class="fab fa-github-square">
                                    <img src={gt} class="imgFoot" alt="gt" />
                                </i>
                            </div>
                            <div class="copyright"> Copyright© Arifur Rahman Tushar 2019. All rights reserved</div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;