(ns app.core
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]))

(def colors
  (r/atom ["red" "yellow" "green" "yellow"]))

(defn circle [step_position color]
  [:div.text-center
   [:svg {:style {:height (+ 100 step_position) :width "100"}}
    [:circle {:style {:cx "50"
                      :cy (+ 50 step_position)
                      :r "40"
                      :stroke "black"
                      :stroke-width "3"
                      :fill color}}]]])

(defn app-container []
  (let [upd    (js/setInterval
                #(swap! colors
                        (fn [_]
                          (concat (rest @colors) [(first @colors)]))) 2000)]
    (fn []
      (case (first @colors)
        ("red") (circle 0 "red")
        ("yellow") (circle 100 "yellow")
        ("green") (circle 200 "green")))))


(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rdom/render [app-container]
               (.getElementById js/document "app")))

(defn main []
  (js/console.log "MAIN FN Reloaded")
  (render))