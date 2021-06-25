(ns app.core
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]))

(def color (r/atom ["red" "yellow" "green" "yellow"]))

(defn updater []
  (rest (conj @color (first @color))))

(defn up [color]
  (let [col (r/atom @color)]
    (str @col)
(swap! col updater)
(reset! col @col)))
(str @color)

(defonce timer
     (js/setInterval #(swap! color updater) 3000))

(defn app-container []
  [:div
   [:svg {:style {:height "100" :width "100"}} 
    [:circle {:style {:cx "50" :cy "50" :r "40" :stroke "black" :stroke-width "3" :fill (first @color)}}]]
   [:p color]
   [:p @color]])


(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rdom/render [app-container]
               (.getElementById js/document "app")))

(defn main []
  (js/console.log "MAIN FN Reloaded")
  (render))