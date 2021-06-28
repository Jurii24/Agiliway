(ns app.screen.home.core
  (:require [app.components.button.core :refer [button]]))

(defn home []
  [:section#home
   [:div.container
    [:div.row
     [:div.col-lg-6.col-md-7.col-xs-12
      [:div.home-content
       [:div.best-app
        [:div.circle
         [:img.img-fluid {:src "assets/correct.png" :alt "correct"}]]
        [:h3 "#1 Editiors Choice App of 2020"]]
       [:h1 "Best app for your modern lifestyle"]
       [:p "Increase productivity with a simple to-do app. app for
                            managing your personal budgets."]
       [:div.home-btn
        [button "Try for free"]
        [:a.btn.unstyled-btn {:href "#"} "Watch demo video"]]]]
     [:div.col-lg-6.col-md-5.col-xs-12
      [:div.home-img
       [:img.img-fluid {:src "assets/phone_0.png" :alt "phone_0"}]]]]]])