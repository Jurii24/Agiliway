(ns app.components.center-image-top-and-text.core)

(defn center-image-top-and-text [color images h3 p]
  [:div.col-md-4.col-sm-6
   [:div.fact-item
    [:div {:class color}
     [:img.img-fluid {:src images :alt "img"}]]
    [:div.elipse-info.text-center
     [:h3.fact-head h3]
     [:p p]]]])