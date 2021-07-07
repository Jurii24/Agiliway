(ns task6.views
  (:require
   [re-frame.core :as re-frame]
   [task6.events :as events]
   [task6.subs :as subs]))

(defn main-panel []
  (let [data (re-frame/subscribe [::subs/data])
        upd (js/setInterval
             #(re-frame/dispatch [::events/something]) 5000)]
    (fn []
      [:div
       [:h1
        "BTC - " (->> @data
                      (filter (comp #{"BTCUSDT"} :symbol))
                      first
                      :price) "$"]
       [:h1
        "ETH - " (->> @data
                      (filter (comp #{"ETHUSDT"} :symbol))
                      first
                      :price) "$"]
       [:h1
        "DOGE - " (->> @data
                       (filter (comp #{"DOGEUSDT"} :symbol))
                       first
                       :price) "$"]])))
