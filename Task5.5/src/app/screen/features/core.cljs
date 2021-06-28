(ns app.screen.features.core 
  (:require 
   [app.components.left-title-text.core :refer [left-title-text]]))

(defn features []
  [:section#features.section-space
   [:div.container
    [:div.row.justify-content-center
     [:div.col-md-6.col-xs-12
      [:div.feature-img
       [:img.img-fluid {:src "assets/features-phone.png" :alt "features-phone"}]]]
     [:div.col-md-6.col-xs-12
      [left-title-text "Awesome apps features" "Increase productivity with a simple to-do app. app for
                        managing your personal budgets."]
      [:div.feature-list
       [:div.feature-item
        [:div.elipse.red
         [:img.img-fluid {:src "assets/icon-1.png" :alt "icon-1"}]]
        [:div.elipse-info
         [:h3.red "Fast Performance"]
         [:p "Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests."]]]
       [:div.feature-item
        [:div.elipse.blue
         [:img.img-fluid {:src "assets/icon-2.png" :alt "icon-2"}]]
        [:div.elipse-info
         [:h3.blue "Prototyping"]
         [:p "Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests."]]]
       [:div.feature-item
        [:div.elipse.green
         [:img.img-fluid {:src "assets/icon-3.png" :alt "icon-3"}]]
        [:div.elipse-info
         [:h3.green "Vector Editing"]
         [:p "Get your blood tests delivered at
                    home collect a sample from the
                                    news your blood tests."]]]]]]]])