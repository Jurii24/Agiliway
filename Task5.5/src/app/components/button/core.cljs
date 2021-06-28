(ns app.components.button.core)

(defn button [text]
  [:a.btn.main-btn {:href "#"}  text])