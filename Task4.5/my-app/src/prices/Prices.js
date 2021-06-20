import React from 'react';
import './Prices.css';
import Button from '../button/Button'
import H2andPCenter from '../text/H2andPCenter';

class Prices extends React.Component {
    render() {
        return (
            <section id="prices" class="section-space">
                <div class="container">
                    <H2andPCenter h2="Get awesome features, without
                    extra charge" p="The rise of mobile devices transforms the way we consume
                    information entirely
                and the world's most elevant channels such as Facebook."/>
                    <div class="pricing-container justify-content-center">
                        <div class="pricing-switcher">
                            <p class="fieldset">
                                <input type="radio" name="duration-1" value="monthly" id="monthly-1" checked="" />
                                <label for="monthly-1">Monthly</label>
                                <input type="radio" name="duration-1" value="annuqlay" id="annuqlay-1" />
                                <label for="annuqlay-1">Annualay</label>
                                <span class="switch"></span>
                            </p>
                        </div>
                        <div class="table row justify-content-center">
                            <div class="col-lg-4 col-md-6">
                                <div class="table-item is-visible" data-type="monthly">
                                    <div class="table-head">
                                        <h2> <strong class="price-1">$0</strong>/month</h2>
                                        <h4> Business Class </h4>
                                        <p class="lead">For Small teams or office </p>
                                    </div>
                                    <ul class="table-content">
                                        <li>Drag &amp; Drop Builder</li>
                                        <li>1,000's of Templates</li>
                                        <li>Blog Support Tools</li>
                                        <li>eCommerce Store</li>
                                    </ul>
                                    <Button text="Start free trial" />
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6">
                                <div class="table-item is-visible" data-type="yearly">
                                    <div class="table-head">
                                        <h2><strong class="price-2">$99</strong>/month</h2>
                                        <h4> Pro Master </h4>
                                        <p class="lead">For Best Oportunities</p>
                                    </div>
                                    <ul class="table-content">
                                        <li>Drag &amp; Drop Builder</li>
                                        <li>1,000's of Templates</li>
                                        <li>Blog Support Tools</li>
                                        <li>eCommerce Store</li>
                                    </ul>
                                    <div class="table-btn">
                                        <Button text="Subscribe Now" />
                                        <a href="#" class="btn unstyled-btn">Or start 14 Free Trial</a>
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

export default Prices;