(ns app.core
  (:require
   [reagent.dom :as rdom]
   [reagent.core :as r]
   ["react-analogue-clock" :default AnalogueClock]))

(defn app-container []
  [:> AnalogueClock
   {:baseColor "#ffffff"
    :borderColor "#000000"
    :borderWidth 5
    :centerColor "#000000"
    :handColors {:hour "#000000", :minute "#000000", :second "#000000"}
    :notchColor "#000000"
    :numbersColor "#000000"
    :showNumbers true
    :size 300}])


(defn ^:dev/after-load render
  "Render the toplevel component for this app."
  []
  (rdom/render [app-container]
               (.getElementById js/document "app")))

(defn main []
  (js/console.log "MAIN FN Reloaded")
  (render))