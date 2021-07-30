(ns mtask9.views
  (:require
   [re-frame.core :as re-frame]
   [mtask9.events :as events]
   [mtask9.subs :as subs]))

(defn form [values]
  [:form
   (for [x values]
     [:div
      [:input {:type "radio" :id x :name "sds" :value x}]
      [:label [:for x]]])])

(defn form2 [values]
  [:form
   (for [x values]
     [:div
      [:input {:type "checkbox" :id x :name "sds0" :value x}]
      [:label [:for x]]])])

(defn free-text [question]
  [:div
   [:h3 (:question question)]
   [:textarea]])

(defn single-choice [question]
  [:div
   [:h3 (:question question)]
   [:div (form (:values question))]])

(defn multiple-choice [question]
  [:div
   [:h3 (:question question)]
   [:div (form2 (:values question))]])

(defmulti types (fn [question] (:type question)))
(defmethod types "free-text" [question] (free-text question))
(defmethod types "single-choice" [question] (single-choice question))
(defmethod types "multiple-choice" [question] (multiple-choice question))

(defn main-panel []
  (let [upd (re-frame/dispatch [::events/something])
        data (re-frame/subscribe [::subs/data])]
    (fn []
      [:div
       [:title (:title @data)]
       [:h2 (:title @data)]
       ;;[:h4 data]  for watch
       (let [quest (->> @data :questions)]
         [:div
          (for [x quest]
            (types x))
          ;;(types (first quest))
          ;;(types (second quest))
          ;;(types (last quest))
          ])
       [:button "Submit"]])))