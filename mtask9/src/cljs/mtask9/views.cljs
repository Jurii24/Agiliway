(ns mtask9.views
  (:require
   [re-frame.core :as re-frame]
   [mtask9.events :as events]
   [mtask9.subs :as subs]))


(defn title [data]
  (loop [d data]
    [:h5 (:question (first d))]
    (if (>= (count d) 2)
      (recur (rest d)))))

(defn t [x]
  (let [f (first x)
        x1 (rest x)]
        [:h5 "(:question f)"]
      (if (> (count x1) 2)
        (t (rest x1)))
  ))

(defn tr []
    [:h5 "(count x)"]
    [:h5 "asd"])

(defmulti types (fn [data] (:type data)))
(defmethod types ["free-text"] [] [:h3 type])
(defmethod types ["single-choice"] [data] [:h3 (:type data)])
(defmethod types ["multiple-choice"] [data] [:h3 (:type data)])

(defn main-panel []
  (let [upd (re-frame/dispatch [::events/something])
        data (re-frame/subscribe [::subs/data])]
    (fn []
      [:div
       [:h1 (:title @data)]
       ;;[:h4 data]  for watch
       [:h4 (->> @data
                 :questions
                 (first)
                 :question)]
       [:div
        (let [quest (->> @data
                         :questions
                         (second))]
          [:h3 (:question quest)]
          [:p (types quest)])]
       [:h4 (->> @data
                 :questions
                 (last)
                 :question)]


       ;;[:div (for [x (->> @data :questions (first))
       ;;      y (:question x)]
       ;;  [:h2 y])]
       ;;[:h3 (:question @data)]
       ;;[:h1
       ;; "ETH - " (->> @data
        ;;              (filter (comp #{"ETHUSDT"} :symbol))
        ;;              first
        ;;              :price) "$"]
       ])))