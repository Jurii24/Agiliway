(ns app.components.left-title-text.core)

(defn left-title-text [h2 p]
  [:div
   [:h2.section-heading h2]
   [:p.lead p]])