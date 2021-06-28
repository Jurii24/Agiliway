(ns app.screen.jackpot.core
  (:require
   [app.components.left-image-top-and-text.core :refer [left-image-top-and-text]]))

(defn jackpot []
  [:section#jackpot.section-space
   [:div.container
    [:div.row.justify-content-center.align-items-center
     [:div.col-md-6.horizontal
      [:h1.display-4
       "Smart jackpots that you may love this anytime & anywhere"]]
     [:div.col-md-6.d-flex.justify-content-center
      [:p.lead "The rise of mobile devices transforms the way we consume information entirely and the world's most
                        elevant channels such as Facebook."]]]
    [:div.row.justify-content-center.py-5
     [:div.feature-list.d-flex
      [left-image-top-and-text "elipse red" "assets/icon-4.png" "red" "Automatic Payouts" "Get your blood tests delivered at  
                                home collect a sample from the news your blood tests."]
      [left-image-top-and-text "elipse blue" "assets/icon-5.png" "blue" "Network Effect" "Get your blood tests delivered at  
                                home collect a sample from the news your blood tests."]
      [left-image-top-and-text "elipse green" "assets/icon-6.png" "green" "Bigger Rewards Method" "Get your blood tests delivered at  
                                home collect a sample from the news your blood tests."]]]]])