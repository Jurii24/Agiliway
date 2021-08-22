(ns mtask9.events
  (:require
   [re-frame.core :as re-frame]
   [mtask9.db :as db]
   
   [day8.re-frame.http-fx]
   [ajax.core :as ajax]))

(re-frame/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(re-frame/reg-event-fx
 ::http-get
 (fn [{db :db} _] 
   {:http-xhrio {:method          :get
                 :uri             "http://localhost:3000/questions"
                 :timeout         8000
                 :format (ajax/json-response-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::generate-db]
                 :on-failure      [:bad-http-result]}}))  

(re-frame/reg-event-fx
 ::http-post
 (fn [_world [_ val]]
   {:http-xhrio {:uri             "http://localhost:3000/post"
                 :method          :post
                 :params          {:data "val000000000000000000"}
                 ;;:url-params          {:data "val000000000000000000"}
                 ;;:timeout         5000
                 :format          (ajax/json-request-format)
                 :response-format (ajax/json-response-format {:keywords? true})
                 :on-success      [::success-post-result]
                 :on-failure      [::failure-post-result]}}))

(re-frame/reg-event-db
 ::generate-db
 (fn [db [_ response]]
   (assoc db :data
          (js->clj response))))

(re-frame/reg-event-db
 ::success-post-result
 (fn [db [_ result]]
   (prn "ttttt")
   ;;(assoc db :success-post-result result)
   ))


(re-frame/reg-event-db
 ::failure-post-result
 (fn [db [_ result]]
    ;; result is a map containing details of the failure
   (prn "fffff")
   ;;(assoc db :failure-http-result result)
   ))