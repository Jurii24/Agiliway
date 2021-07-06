(ns task6.views
  (:require
   [re-frame.core :as re-frame]
   [task6.events :as events]
   [task6.subs :as subs]))

(defn main-panel []
  (let [btc (re-frame/subscribe [::subs/btc])
        eth (re-frame/subscribe [::subs/eth])
        doge (re-frame/subscribe [::subs/doge])
        upd (js/setInterval
             #(re-frame/dispatch [::events/something]) 5000)]
    (fn []
      [:div
       [:h1
        "BTC - " @btc "$"]
       [:h1
        "ETH - " @eth "$"]
       [:h1
        "DOGE - " @doge "$"]
       ])))
