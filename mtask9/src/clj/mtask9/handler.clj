(ns mtask9.handler
  (:require
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]
   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :as route]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   [cheshire.core :as ch]
   [clojure.edn :as edn]))

(def results-atom (atom {}))

(defn merge-results [new-result]
  (for [num-question (range (count new-result))]
    (if (= (:type (get new-result num-question)) "free-text")
      (when (:values (get new-result num-question))
        (swap! results-atom update :results update num-question update :values conj
               (first (:values (get new-result num-question)))))
      (swap! results-atom update :results update num-question assoc :values
             (merge-with + (:values (get new-result num-question)) (:values (get (:results @results-atom) num-question)))))))

(def mount-target
  [:div#app
   [:h2 "Welcome to mtask9"]
   [:p "please wait while Figwheel/shadow-cljs is waking up ..."]
   [:p "(Check the js console for hints if nothing exciting happens.)"]])

(defn head []
  [:head
   [:meta {:charset "utf-8"}]
   [:meta {:name "viewport"
           :content "width=device-width, initial-scale=1"}]
   (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])

(defn loading-page []
  (html5
   (head)
   [:body {:class "body-container"}
    mount-target
    (include-js "/js/app.js")
    [:script "mtask9.core.init_BANG_()"]]))

(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(defn json-get
  [_request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (slurp "resources/json/survey.json")})

(defn json-results
  [_request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (ch/generate-string @results-atom)})

(defn stats [values]
  (loop [answ values]
    (if (< 1 (count answ))
      (recur (if (= 0 ((first answ) values))
               (prn "new-val")
               (prn "(assoc new-val answ (str (/ all (* 100 (new-val answ))) %))"))
             )
      "new-val")))

(defn date-in-percents []
  (html5
   (head)
   [:body
    [:h1 (@results-atom :title)]
    (for [s (@results-atom :results)]
      [:div
       [:h3 (str (s :question) (s :values);;(when-not (= (s :type) "free-text") (stats (s :values)))
                 )]])]))

(defn result-in-percents
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (date-in-percents)})

(defn json-post [_request]
  (let [result (edn/read-string (pr-str (ch/parse-string (slurp (:body _request)) true)))]
    (if (empty? @results-atom)
      (swap! results-atom merge result)
      (merge-results (:results result)))))

(defroutes app-routes
  (GET "/" [] index-handler)
  (GET "/questions" [] json-get)
  (GET "/results" [] json-results)
  (GET "/stats" [] result-in-percents)
  (POST "/post" [] json-post)
  (route/not-found "<h1>Page not found</h1>"))

(def app (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false)))