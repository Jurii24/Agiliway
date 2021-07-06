(ns task6.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::btc
 (fn [db]
   (filter (comp #{"BTCUSDT"} :symbol) (get db :data))))

(re-frame/reg-sub
 ::eth
 (fn [db]
   (filter (comp #{"ETHUSDT"} :symbol) (get db :data))))

(re-frame/reg-sub
 ::doge
 (fn [db]
   (filter (comp #{"DOGEUSDT"} :symbol) (get db :data))))