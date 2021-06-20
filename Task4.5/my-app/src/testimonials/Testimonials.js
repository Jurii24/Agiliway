import React from 'react';
import './Testimonials.css';
import testimonials from '../assets/testimonials.png';
import stars from '../assets/stars.png';
import user1 from '../assets/user-1.png';
import H2andPLeft from '../text/H2andPLeft';

class Testimonials extends React.Component {
    render() {
        return (
            <section id="testimonials" class="section-space">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 col-xs-12">
                            <div class="feature-img">
                                <img src={testimonials} class="img-fluid" />
                            </div>
                        </div>
                        <div class="col-md-6 col-xs-12">
                            <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item">
                                        <div class="col-lg-12">
                                            <div class="customer-wrapper">
                                                <H2andPLeft h2="Meet Client Satisfaction
                                                by using product" p="The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook."/>
                                                <div class="star-rating">
                                                    <img src={stars} alt="stars" />
                                                </div>
                                                <h4> User friendly &amp; Customizable </h4>
                                                <p>Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring.
                                        </p>
                                                <div class="user">
                                                    <div class="user-pic">
                                                        <img src={user1} class="img-fluid" alt="user" />
                                                    </div>
                                                    <div class="user-name">
                                                        <h5>Zoltan Nemeth</h5>
                                                        <p>CEO of Pixler Lab</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="col-lg-12">
                                            <div class="customer-wrapper">
                                                <div class="section-heading">
                                                    <h2> Meet Client
                                                by using product</h2>
                                                </div>
                                                <p class="lead">The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook.</p>
                                                <div class="star-rating">
                                                    <img src={stars} alt="stars" />
                                                </div>
                                                <h4> User friendly &amp; Customizable </h4>
                                                <p>Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring.
                                        </p>
                                                <div class="user">
                                                    <div class="user-pic">
                                                        <img src={user1} class="img-fluid" alt="user" />
                                                    </div>
                                                    <div class="user-name">
                                                        <h5>Zoltan Nemeth</h5>
                                                        <p>CEO of Pixler Lab</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                                        </div>
                                    </div>
                                    <div class="carousel-item active">
                                        <div class="col-lg-12">
                                            <div class="customer-wrapper">
                                                <div class="section-heading">
                                                    <h2> Meet
                                                by using product</h2>
                                                </div>
                                                <p class="lead">The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook.</p>
                                                <div class="star-rating">
                                                    <img src={stars} alt="stars" />
                                                </div>
                                                <h4> User friendly &amp; Customizable </h4>
                                                <p>Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring.
                                        </p>
                                                <div class="user">
                                                    <div class="user-pic">
                                                        <img src={user1} class="img-fluid" alt="user" />
                                                    </div>
                                                    <div class="user-name">
                                                        <h5>Zoltan Nemeth</h5>
                                                        <p>CEO of Pixler Lab</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="owl-nav"><button type="button" role="presentation" class="owl-prev"><span aria-label="Previous">‹</span></button>
                                                <button type="button" role="presentation" class="owl-next"><span aria-label="Next">›</span></button></div>
                                        </div>
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

export default Testimonials;