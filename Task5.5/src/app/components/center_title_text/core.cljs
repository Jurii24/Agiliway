(ns app.components.center-title-text.core)

(defn center-title-text [h2 p]
  [:div.text-center
   [:h2.section-heading h2]
   [:p p]])