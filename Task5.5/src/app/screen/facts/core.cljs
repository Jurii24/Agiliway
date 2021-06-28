(ns app.screen.facts.core
  (:require
   [app.components.center-title-text.core :refer [center-title-text]]
   [app.components.center-image-top-and-text.core :refer [center-image-top-and-text]]))

(defn facts []
  [:section#facts.section-space
   [:div.container
    [center-title-text "Why you should choose our app"
     "The rise of mobile devices transforms the way we consume information entirely and the world's most elevant channels such as Facebook."]
    [:div.row.pt-5.justify-content-center
     [center-image-top-and-text "elipse red" "assets/web-design.png" "App Development"
      "Get your blood tests delivered at home collect a sample from the news your blood tests."]
     [center-image-top-and-text "elipse lblue" "assets/trophy.png" "10 Times Award"
      "Get your blood tests delivered at home collect a sample from the news your blood tests."]
     [center-image-top-and-text "elipse yellow" "assets/computer.png" "Cloud Storage"
      "Get your blood tests delivered at home collect a sample from the news your blood tests."]
     [center-image-top-and-text "elipse green" "assets/customer-support.png" "Customization"
      "Get your blood tests delivered at home collect a sample from the news your blood tests."]
     [center-image-top-and-text "elipse blue" "assets/ui.png" "UX Planning"
      "Get your blood tests delivered at home collect a sample from the news your blood tests."]
     [center-image-top-and-text "elipse lred" "assets/customer-service.png" "Customer Support"
      "Get your blood tests delivered at home collect a sample from the news your blood tests."]]]])