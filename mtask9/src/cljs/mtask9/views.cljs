(ns mtask9.views
  (:require
   [re-frame.core :as re-frame]
   [mtask9.events :as events]
   [mtask9.subs :as subs]
   [goog.array :as garray]))

(defn required? [question]
  (and (:required question) (= true (:required question))))

(defn to-keyword [num]
  (keyword (str num)))

(def id-atom (atom {}))  ;;contains all elements ids {:id-question id-answer}

(defn get-ids [id]
  (let [question (js/document.querySelector (str "#" id))]
    (if (= 1 ((frequencies id) "-"))
      (.-value question)
      (.-checked question))))

(defn get-values [ids]
  (loop [ids ids
         out []]
    (if (> (count ids) 0)
      (recur (rest ids)
             (conj out (get-ids (first ids))))
      out)))

(defn check-checkbox [num]  ;;if some answer is true - will turn off ":required"
  (if (= -1 (.indexOf (get-values ((to-keyword num) @id-atom)) true))
    (run! #(set! (.-required %) true)
          (garray/toArray (.getElementsByName js/document. (str num))))
    (run! #(set! (.-required %) false)
          (garray/toArray (.getElementsByName js/document. (str num))))))

(defn add-to-atom [num id]
  (let [num (to-keyword num)]
    (if (contains? @id-atom num)
      (swap! id-atom update-in [num] conj id)
      (swap! id-atom merge {num [id]}))))

(defn form-text [question]
  (let [num (:num question)
        id (str (required? question) "-" num)
        add-id (swap! id-atom merge {(to-keyword num) [id]})]
    [:input {:type "text"
             :id id
             :name num
             :placeholder "Enter your answer here"
             :required (required? question)}]))

(defn form-radio [question]
  (let [values (:values question)
        num (:num question)]
    (for [value values
          :let [id (str (required? question) "-" num "-" (.indexOf values value))
                add-id (add-to-atom num id)]]
      [:div
       [:input {:type "radio" :id id :name num :value value :required (required? question)}]
       [:label value]])))

(defn form-checkbox [question]
  (let [values (:values question)
        num (:num question)
        required (required? question)]
    (for [value values
          :let [id (str required "-" num "-" (.indexOf values value))
                add-id (add-to-atom num id)]]
      [:div
       [:input {:type "checkbox" :id id :name num :value value :required required
                :onChange #(when required (check-checkbox num))}]
       [:label value]])))

(defmulti quest-type (fn [question] (:type question)))
(defmethod quest-type "free-text" [question] (form-text question))
(defmethod quest-type "single-choice" [question] (form-radio question))
(defmethod quest-type "multiple-choice" [question] (form-checkbox question))

(defn add-answer [num data answ]
  (loop [val-with-answ {}
         val (-> data :results (get num) :values)
         count-answers (range (count answ))]
    (if-not (= 0 (count count-answers))
      (recur (assoc val-with-answ (first val) (if (get answ (first count-answers)) 1 0))
             (rest val)
             (rest count-answers))
      (assoc-in data [:results num :values] val-with-answ))))

(defn filling-data [num data]  ;;{:question 1} if this question is checked (if not {:question 0})
  (if (-> data :results (get num) (contains? :values))
    (add-answer num data (get-values ((to-keyword num) @id-atom)))
    (assoc-in data [:results num :values] (get-values ((to-keyword num) @id-atom)))))

(defn form-handler [event data]  ;;generate hash-map "data" with answers
  (loop [data data
         num (range (count @id-atom))]
    (if (> (count num) 0)
      (recur (filling-data (first num) data) (rest num))
      (re-frame/dispatch [::events/http-post data])))) ;;(.stringify js/JSON (clj->js data))

(defn rename-keys [map kmap]
  (reduce
   (fn [m [old new]]
     (if (contains? map old)
       (assoc m new (get map old))
       m))
   (apply dissoc map (keys kmap)) kmap)) 

(defn main-panel []
  (let [upd (re-frame/dispatch [::events/http-get])
        data (re-frame/subscribe [::subs/data])]
    (fn []
      [:div
       [:title (:title @data)]
       [:h2 (:title @data)]
       (let [quest (->> @data :questions)]
         [:form {:id "form" :on-submit #(do (.preventDefault %) (form-handler % (rename-keys @data {:questions :results}))
                                            (js/window.alert "Thanks for your answers! :)") (js/window.location.reload))}
          (for [x quest]
            [:div
             [:h3 (:question x)]
             (quest-type (assoc x :num (.indexOf quest x)))])
          [:input {:type "submit" :value "Submit"}]])])))