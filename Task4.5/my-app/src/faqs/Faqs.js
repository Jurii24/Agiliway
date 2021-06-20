import React from 'react';
import './Faqs.css';
import H2andPCenter from '../text/H2andPCenter';

class Faqs extends React.Component {
    render() {
        return (
            <section id="faqs" class="section-space">
                <div class="container">
                    <H2andPCenter h2="Frequently asked questions" p="The rise of mobile devices transforms the way we consume information
                    entirely and the world's most elevant channels such as Facebook." />
                    <div class="row justify-content-center">
                        <div class="col-md-8 col-xs-12">
                            <div class="accordion" id="accordionExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                            <h4>How to contact with riders emergency?</h4>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                                        <div class="accordion-body">
                                            <p class="lain">
                                                Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                                Iterative approaches to corporate strategy foster collaborative thinking to
                                                further
                                                the
                                                overall value proposition. Organically grow the holistic world view of
                                                disruptive
                                                innovation via workplace diversity and empowerment.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                            <h4>App installation failed, how to update system information?</h4>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                                        <div class="accordion-body">
                                            <p class="lain"><strong>This is the second item's accordion body.</strong> It is
                                            hidden by default,
                                            until the collapse plugin adds the appropriate classes that we use to style each
                                            element. These classes control the overall appearance, as well as the showing
                                            and
                                            hiding
                                            via CSS transitions. You can modify any of this with custom CSS or overriding
                                            our
                                            default variables. It's also worth noting that just about any HTML can go within
                                            the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                            <h4>Website reponse taking time, how to improve?</h4>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                                        <div class="accordion-body">
                                            <p class="lain"><strong>This is the third item's accordion body.</strong> It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingFour">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
                                            <h4>New update fixed all bug and issues
                                        </h4>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
                                        <div class="accordion-body">
                                            <p class="lain"><strong>This is the third item's accordion body.</strong> It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="panelsStayOpen-headingFive">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
                                            <h4>How to contact with riders emergency?
                                        </h4>
                                        </button>
                                    </h2>
                                    <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
                                        <div class="accordion-body">
                                            <p class="lain"><strong>This is the third item's accordion body.</strong> It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the
                                            <code>.accordion-body</code>, though the transition does limit overflow.
                                        </p>
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

export default Faqs;