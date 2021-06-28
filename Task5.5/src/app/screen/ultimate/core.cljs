(ns app.screen.ultimate.core
  (:require
   [app.components.left-title-text.core :refer [left-title-text]]
   [app.components.left-ui-image-top-and-text.core :refer [left-ui-image-top-and-text]]
   [app.components.button.core :refer [button]]))


(defn ultimate []
  [:div.container
   [:div.row.align-items-center
    [:div.col-7
     [left-title-text "Ultimate features that we built"
      "The rise of mobile devices transforms the way we
                        consume information entirely"]
     [:div.row.ultimate-features
      [left-ui-image-top-and-text "elipse red" "assets/web-design.png"
       "App Development" "Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
      [left-ui-image-top-and-text "elipse green" "assets/ui.png"
       "UX Planning" "Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
      [left-ui-image-top-and-text "elipse yellow" "assets/computer.png"
       "Cloud Storage" "Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]
      [left-ui-image-top-and-text "elipse red" "assets/customer-service.png"
       "Customer Support" "Get your blood tests delivered at
                                home collect a sample from the news your blood tests."]]
     [button "See all"]]
    [:div.col-5
     [:div.feature-img
      [:img.img-fluid {:src "assets/features-2.png" :alt "features-2"}]]]]])