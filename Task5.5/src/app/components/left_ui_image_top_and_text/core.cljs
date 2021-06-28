(ns app.components.left-ui-image-top-and-text.core)

(defn left-ui-image-top-and-text [imgColor images h3 p]
  [:div.col-md-6.col-sm-6
   [:div {:class "fact-item"}
    [:div {:class imgColor}
     [:img.img-fluid {:src images :alt "img"}]]
    [:div.elipse-info.zero
     [:h3.fact-head h3]
     [:p {:class "padding-right: 85px;"} p]]]])