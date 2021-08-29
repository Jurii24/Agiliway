(ns mtask9.views
  (:require
   [re-frame.core :as re-frame]
   [mtask9.events :as events]
   [mtask9.subs :as subs]
   [goog.array :as garray]
   ))

(defn required? [question]
  (if (and (:required question) (= true (:required question)))
    "t" "f"))

(defn to-keyword [num]
  (keyword (str num)))

(def ch-atom (atom []))
(def id-atom (atom {}))


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

(defn clear-order []
  (for [group-checkbox @ch-atom
        :when (contains? (get-values ((to-keyword group-checkbox) @id-atom)) true)]
    (run! #(set! (.-required %) false)
          (garray/toArray (.getElementsByName js/document. (str group-checkbox))))))

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
             :required (if (= "t" (required? question)) true false)}]))

(defn form-radio [question]
  (let [values (:values question)
        num (:num question)
        required (required? question)]
    (for [value values
          :let [id (str required "-" num "-" (.indexOf values value))
                add-id (add-to-atom num id)]]
      [:div
       [:input {:type "radio" :id id :name num :value value :required (if (= "t" required) true false)}] 
       [:label value]])))

(defn form-checkbox [question]
  (let [values (:values question)
        num (:num question)
        required (required? question)
        add-ch (when (= "t" required?) (swap! ch-atom conj num))]
    (for [value values
          :let [id (str required "-" num "-" (.indexOf values value))
                add-id (add-to-atom num id)]]
      [:div
       [:input {:type "checkbox" :id id :name num :value value :required (if (= "t" required) true false) :onChange (when (= "t" required) (clear-order))}];;(js/setInterval #(clear-order) 1000)
       [:label value]])))

(defmulti quest-type (fn [question] (:type question)))
(defmethod quest-type "free-text" [question] (form-text question))
(defmethod quest-type "single-choice" [question] (form-radio question))
(defmethod quest-type "multiple-choice" [question] (form-checkbox question))


(defn add-answer [num data answers]
  (loop [vas {}
         val (-> data :results (get num) :values)
         count-answers (range (count answers))]
    (if-not (= 0 (count count-answers))
      (recur (assoc vas (first val) (if (get answers (first count-answers)) 1 0))
             (rest val)
             (rest count-answers))
      (assoc-in data [:results num :values] vas))))

(defn ldata [num data]
  (if (-> data :results (get num) (contains? :values))
    (add-answer num data (get-values ((to-keyword num) @id-atom)))
    (assoc-in data [:results num :values] (get-values ((to-keyword num) @id-atom)))))

(defn form-handler [event data]
  (loop [data data
         num (range (count @id-atom))]
    (if (> (count num) 0)
      (recur (ldata (first num) data) (rest num))
      (re-frame/dispatch [::events/http-post data])) ;;(.stringify js/JSON (clj->js data))
    )
;; (let [jss (js/document.querySelector "t-2-Apple")])
;; (.-required jss)
  )

(defn rename-keys
  [map kmap]
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