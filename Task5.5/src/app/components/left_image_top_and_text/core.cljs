(ns app.components.left-image-top-and-text.core)

(defn left-image-top-and-text [imgColor images textColor h3 p]
  [:div.feature-item.column
   [:div {:class imgColor}
    [:img.img-fluid {:src images :alt "icon"}]]
   [:div.elipse-info
    [:h3 {:class textColor} h3]
    [:p p]]])