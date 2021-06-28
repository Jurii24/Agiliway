(ns app.screen.integration.core
  (:require
   [app.components.left-title-text.core :refer [left-title-text]]
   [app.components.button.core :refer [button]]))

(defn integration []
  [:section.section-space-sm
   [:div.container
    [:div.row.align-items-center
     [:div.col-md-6.col-xs-12
      [:div.integration-img
       [:img.img-fluid {:src "assets/integration.png" :alt "integration"}]]]
     [:div.col-md-6.col-xs-12
      [left-title-text "Designed & built by the latest code integration" "The rise of mobile devices transforms the way we 
                        consume information entirely and the world's most 
                        elevant channels such as Facebook."]
      [button "Learn more"]]]]])