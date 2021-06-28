(ns app.screen.prices.core
  (:require
   [app.components.center-title-text.core :refer [center-title-text]]
   [app.components.button.core :refer [button]]))

(defn prices []
  [:section#prices.section-space
   [:div.container
    [center-title-text "Get awesome features, without
                    extra charge" "The rise of mobile devices transforms the way we consume
                    information entirely
                and the world's most elevant channels such as Facebook."]
    [:div.pricing-container.justify-content-center
     [:div.pricing-switcher
      [:p.fieldset
       [:input {:type "radio" :name "duration-1" :value "monthly" :id "monthly-1" :checked "....."}]
       [:label {:for "monthly-1"} "Monthly"]
       [:input {:type "radio" :name "duration-1" :value "annuqlay" :id "annuqlay-1"}]
       [:label {:for "annuqlay-1"} "Annualay"]
       [:span.switch]]]
     [:div.table.row.justify-content-center
      [:div.col-lg-4.col-md-6
       [:div.table-item.is-visible {:data-type "monthly"}
        [:div.table-head
         [:h2 [:strong.price-1 "$0"] "/month"]
         [:h4 "Business Class"]
         [:p.lead "For Small teams or office"]]
        [:ul.table-content
         [:li "Drag & Drop Builder"]
         [:li "1,000's of Templates"]
         [:li "Blog Support Tools"]
         [:li "eCommerce Store"]]
        [button "Start free trial"]]]
      [:div.col-lg-4.col-md-6
       [:div.table-item.is-visible {:data-type "yearly"}
        [:div.table-head
         [:h2 [:strong.price-2 "$99"] "/month"]
         [:h4 "Pro Master"]
         [:p.lead "For Best Oportunities"]]
        [:ul.table-content
         [:li "Drag & Drop Builder"]
         [:li "1,000's of Templates"]
         [:li "Blog Support Tools"]
         [:li "eCommerce Store"]]
        [:div.table-btn
         [button "Subscribe Now"]
         [:a.btn.unstyled-btn {:href "#"} "Or start 14 Free Trial"]]]]]]]])