(ns app.screen.faqs.core
  (:require
   [app.components.center-title-text.core :refer [center-title-text]]))

(defn faqs []
  [:section#faqs.section-space
   [:div.container
    [center-title-text "Frequently asked questions" "The rise of mobile devices transforms the way we consume information
                    entirely and the world's most elevant channels such as Facebook."]
    [:div.row.justify-content-center
     [:div.col-md-8.col-xs-12
      [:div#accordionExample.accordion
       [:div.accordion-item
        [:h2#headingOne.accordion-header
         [:button.accordion-button {:type "button" :data-bs-toggle "collapse" :data-bs-target "#collapseOne" :aria-expanded "true" :aria-controls "collapseOne"} [:h4 "How to contact with riders emergency?"]]]
        [:div#collapseOne.accordion-collapse.collapse.show {:aria-labelledby "headingOne" :data-bs-parent "#accordionExample"}
         [:div.accordion-body
          [:p.lain "Leverage agile frameworks to provide a robust synopsis for high level overviews.
                                                Iterative approaches to corporate strategy foster collaborative thinking to
                                                further the
                                                overall value proposition. Organically grow the holistic world view of
                                                disruptive
                                                innovation via workplace diversity and empowerment."]]]]
       [:div.accordion-item
        [:h2#headingTwo.accordion-header
         [:button.accordion-button.collapsed {:type "button" :data-bs-toggle "collapse" :data-bs-target "#collapseTwo" :aria-expanded "false" :aria-controls "collapseTwo"} [:h4 "App installation failed, how to update system information?"]]]
        [:div#collapseTwo.accordion-collapse.collapse {:aria-labelledby "headingTwo" :data-bs-parent "#accordionExample"}
         [:div.accordion-body
          [:p.lain [:strong "This is the second item's accordion body. "] "It is
                                            hidden by default,
                                            until the collapse plugin adds the appropriate classes that we use to style each
                                            element. These classes control the overall appearance, as well as the showing
                                            and
                                            hiding
                                            via CSS transitions. You can modify any of this with custom CSS or overriding
                                            our
                                            default variables. It's also worth noting that just about any HTML can go within
                                            the, though the transition does limit overflow."]]]]
       [:div.accordion-item
        [:h2#panelsStayOpen-headingThree.accordion-header
         [:button.accordion-button.collapsed {:type "button" :data-bs-toggle "collapse" :data-bs-target "#panelsStayOpen-collapseThree" :aria-expanded "false" :aria-controls "panelsStayOpen-collapseThree"} [:h4 "Website reponse taking time, how to improve?"]]]
        [:div#panelsStayOpen-collapseThree.accordion-collapse.collapse {:aria-labelledby "panelsStayOpen-headingThree"}
         [:div.accordion-body
          [:p.lain [:strong "This is the third item's accordion body. "] "It is
                                            hidden by default,
                                            until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via
                                            CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."]]]]
       [:div.accordion-item
        [:h2#panelsStayOpen-headingFour.accordion-header
         [:button.accordion-button.collapsed {:type "button" :data-bs-toggle "collapse" :data-bs-target "#panelsStayOpen-collapseFour" :aria-expanded "false" :aria-controls "panelsStayOpen-collapseFour"} [:h4 "New update fixed all bug and issues"]]]
        [:div#panelsStayOpen-collapseFour.accordion-collapse.collapse {:aria-labelledby "panelsStayOpen-headingFour"}
         [:div.accordion-body
          [:p.lain [:strong "This is the third item's accordion body. "] "It is
                                            hidden by default, until
                                            the collapse plugin adds the appropriate classes that we use to style each
                                            element.
                                            These classes control the overall appearance, as well as the showing and hiding
                                            via CSS
                                            transitions. You can modify any of this with custom CSS or overriding our
                                            default
                                            variables. It's also worth noting that just about any HTML can go within the, though the transition does limit overflow."]]]]
       [:div.accordion-item
        [:h2#panelsStayOpen-headingFive.accordion-header
         [:button.accordion-button.collapsed {:type "button" :data-bs-toggle "collapse" :data-bs-target "#panelsStayOpen-collapseFive" :aria-expanded "false" :aria-controls "panelsStayOpen-collapseFive"} [:h4 "How to contact with riders emergency?"]]]
        [:div#panelsStayOpen-collapseFive.accordion-collapse.collapse {:aria-labelledby "panelsStayOpen-headingFive"}
         [:div.accordion-body
          [:p.lain [:strong "This is the third item's accordion body."] "It is
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
, though the transition does limit overflow."]]]]]]]]])