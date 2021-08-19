(ns mtask9.views
  (:require
   [re-frame.core :as re-frame]
   [mtask9.events :as events]
   [mtask9.subs :as subs]))

(defn required? [question]
  (if (and (:required question) (= true (:required question)))
    "t" "f"))

(defn to-keyword [num]
  (keyword (str num)))

(def answer-atom (atom {}))

(def id-atom (atom {}))

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
             :placeholder "Enter your answer here"}]))

(defn form-radio [question]
  (let [values (:values question)
        num (:num question)
        required (required? question)]
    (for [value values
          :let [id (str required "-" num "-" value)
                add-id (add-to-atom num id)]]
      [:div
       [:input {:type "radio" :id id :name num :value value}]
       [:label value]])))

(defn form-checkbox [question]
  (let [values (:values question)
        num (:num question)
        required (required? question)]
    (for [value values
          :let [id (str required "-" num "-" value)
                add-id (add-to-atom num id)]]
      [:div
       [:input.group-required {:type "checkbox" :id id :name num :value value}]
       [:label value]])))

(defmulti quest-type (fn [question] (:type question)))
(defmethod quest-type "free-text" [question] (form-text question))
(defmethod quest-type "single-choice" [question] (form-radio question))
(defmethod quest-type "multiple-choice" [question] (form-checkbox question))

(defn get-ids [id]
  (let [question (js/document.querySelector (str "#" id))
        ;;c (.-style.backgroundColor "red" question)
        ;;m (c question)
        ]
    
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

(defn add-answer [c1 data answers]
  (loop [vas {}
         val (-> data :results (get c1) :values)
         ans (range (count answers))]
    (if-not (= 0 (count ans))
      (recur (assoc vas (first val) (if (get answers (first ans)) 1 0))
             (rest val)
             (rest ans))
      (assoc-in data [:results c1 :values] vas))))

(defn ldata [c1 data]
  (if (-> data :results (get c1) (contains? :values))
    (add-answer c1 data (get-values ((to-keyword c1) @id-atom)))
    (assoc-in data [:results c1 :values] (get-values ((to-keyword c1) @id-atom)))))

(defn form-handler [event data]
  (loop [data data
         coun (range (count @id-atom))
         c1 (first coun)]
    ;;(.-style.backgroundColor t "red")
    ;;(.log js/console (js->clj (.-value t1)))   "div > p"
    (if (> (count coun) 0)
      (recur (ldata c1 data) (rest coun) (second coun))
      (prn data)
      ;;(re-frame/dispatch [::events/http-post])
      )
    
    ;;(js/console.log @id-atom)
    ));;(js/alert "None filled"))));;(if (= "t" (last ids)) "t" "f"))))

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
       (let [quest (->> @data :questions)
             ;;answers (swap! answer-atom merge @data)
             ]
         [:form {:id "form"} ;;(:on-submit #(on-submit %)) ;;(:on-submit #(prn %));;{:method "POST"} ;;:action "/thanks" 
          (for [x quest]
            [:div
             [:h3 (:question x)]
             (quest-type (assoc x :num (.indexOf quest x)))])
          [:input {:type "submit" :value "Submit"
                   :on-click #(do (.preventDefault %) 
                                  (form-handler % (rename-keys @data {:questions :results})))}]])])))