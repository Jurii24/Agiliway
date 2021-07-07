(ns task6.subs
  (:require
   [re-frame.core :as re-frame]))

(re-frame/reg-sub
 ::data
 (fn [db]
   (get db :data)))