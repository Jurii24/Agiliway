(ns task6.events
  (:require
   [re-frame.core :as re-frame]
   [task6.db :as db]
   
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))


(re-frame/reg-event-fx
 ::something
 (fn [{db :db} _] 
   {:http-xhrio {:method          :get
                 :uri             "https://api.binance.com/api/v3/ticker/price?"
                 :timeout         8000
                 :format (ajax/json-response-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::generate-db]
                 :on-failure      [:bad-http-result]}}))          

(re-frame/reg-event-db
 ::generate-db
 (fn [db [_ response]]
   (assoc db :data
          (js->clj (filter (comp #{"BTCUSDT" "ETHUSDT" "DOGEUSDT"} :symbol) response)))))