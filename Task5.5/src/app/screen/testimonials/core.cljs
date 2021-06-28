(ns app.screen.testimonials.core
  (:require
   [app.components.left-title-text.core :refer [left-title-text]]))

(defn testimonials []
  [:section#testimonials.section-space
   [:div.container
    [:div.row.justify-content-center
     [:div.col-md-6.col-xs-12
      [:div.feature-img
       [:img.img-fluid {:src "assets/testimonials.png"}]]]
     [:div.col-md-6.col-xs-12
      [:div#carouselExampleFade.carousel {:slide "carousel-fade" :data-bs-ride "carousel"}
       [:div.carousel-inner
        [:div.carousel-item
         [:div.col-lg-12
          [:div.customer-wrapper
           [left-title-text "Meet Client Satisfaction by using product" "The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook."]
           [:div.star-rating
            [:img {:src "assets/stars.png" :alt "stars"}]]
           [:h4 "User friendly & Customizable"]
           [:p "Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring."]
           [:div.user
            [:div.user-pic
             [:img.img-fluid {:src "assets/user-1.png" :alt "user"}]]
            [:div.user-name
             [:h5 "Zoltan Nemeth"]
             [:p "CEO of Pixler Lab"]]]]
          [:div.owl-nav [:button.owl-prev :type "button" :role "presentation"
                         [:span :aria-label "Previous" "‹"]]
           [:button.owl-next :type "button" :role "presentation" [:span :aria-label "Next" "›"]]]]]
        [:div.carousel-item
         [:div.col-lg-12
          [:div.customer-wrapper
           [:div.section-heading
            [:h2 "Meet Client by using product"]]
           [:p.lead "The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook."]
           [:div.star-rating
            [:img {:src "assets/stars.png" :alt "stars"}]]
           [:h4 "User friendly & Customizable"]
           [:p "Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring."]
           [:div.user
            [:div.user-pic
             [:img.img-fluid {:src "assets/user-1.png" :alt "user"}]]
            [:div.user-name
             [:h5 "Zoltan Nemeth"]
             [:p "CEO of Pixler Lab"]]]]
          [:div.owl-nav [:button.owl-prev :type "button" :role "presentation" [:span :aria-label "Previous" "‹"]]
           [:button.owl-next :type "button" :role "presentation" [:span :aria-label "Next" "›"]]]]]
        [:div.carousel-item.active
         [:div.col-lg-12
          [:div.customer-wrapper
           [:div.section-heading
            [:h2 "Meet by using product"]]
           [:p.lead "The rise of mobile devices transforms the way we consume.
                                            elevant channels such as Facebook."]
           [:div.star-rating
            [:img {:src "assets/stars.png" :alt "stars"}]]
           [:h4 "User friendly & Customizable"]
           [:p "Bring to the table win-win survival strategies to ensure proactive
                                                domination.
                                                At the end of the day, going forward, a new normal that has  evolved
                                                from
                                                generation X is on the runway heading towards a streamlined cloud
                                                solution. User
                                                generated content in real-time will have multiple touchpoints for
                                                offshoring."]
           [:div.user
            [:div.user-pic
             [:img.img-fluid {:src "assets/user-1.png" :alt "user"}]]
            [:div.user-name
             [:h5 "Zoltan Nemeth"]
             [:p "CEO of Pixler Lab"]]]]
          [:div.owl-nav [:button.owl-prev {:type "button" :role "presentation"} [:span {:aria-label "Previous"} "‹"]]
           [:button.owl-next {:type "button" :role "presentation"} [:span {:aria-label "Next"} "›"]]]]]]]]]]])