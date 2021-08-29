(ns mtask9.handler
  (:require
  ;; [reitit.ring :as reitit-ring]
  ;; [mtask9.middleware :refer [middleware]]
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]

   [compojure.core :refer [defroutes GET POST]]
   [compojure.route :as route]
   [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   ;;[ring.util.http-response :as response]
;; [ring.util.response :as resp]
;; [ring.middleware.basic-authentication :refer :all]
   ;;[ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   ;;[ring.middleware.json :as json]
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

(defn json-post [_request]
  (let [result (edn/read-string (pr-str (ch/parse-string (slurp (:body _request)) true)))]
    (if (empty? @results-atom)
      (swap! results-atom merge result)
      (merge-results (:results result)))))

(defroutes app-routes
  (GET "/" [] index-handler)
  (GET "/questions" [] json-get)
  (GET "/results" [] json-results)
  (POST "/post" [] json-post)
  (route/not-found "<h1>Page not found</h1>"))

;;(def app (wrap-defaults app-routes site-defaults))
(def app (wrap-defaults app-routes (assoc-in site-defaults [:security :anti-forgery] false)))



;;  (def mount-target
;;    [:div#app
;;     [:h2 "Welcome to mtask9"]
;;     [:p "please wait while Figwheel/shadow-cljs is waking up ..."]
;;     [:p "(Check the js console for hints if nothing exciting happens.)"]])
;;  (defn head []
;;    [:head
;;     [:meta {:charset "utf-8"}]
;;     [:meta {:name "viewport"
;;             :content "width=device-width, initial-scale=1"}]
;;     (include-css (if (env :dev) "/css/site.css" "/css/site.min.css"))])
;;  (defn loading-page []
;;    (html5
;;     (head)
;;     [:body {:class "body-container"}
;;      mount-target
;;      (include-js "/js/app.js")
;;      [:script "mtask9.core.init_BANG_()"]]))
;;  (defn index-handler
;;    [_request]
;;    {:status 200
;;     :headers {"Content-Type" "text/html"}
;;     :body (loading-page)})
;;  (defn positions [pred coll]
;;    (keep-indexed (fn [idx x]
;;                    (when (pred x)
;;                      idx))
;;                  coll))
;;  ;; (defn handle-request [handler]
;;  ;;   (fn [_ input-stream output-stream context]
;;  ;;     ;;(with-open [in  (io/reader input-stream)
;;  ;;       ;;          out (io/writer output-stream)]
;;  ;;       (let [request (json/read in :key-fn keyword)]
;;  ;;         (-> request
;;  ;;             ;; (handler context)
;;  ;;             (json/write out)))));;)
;;  ;; (def json-resultss ;;-handleRequest
;;  ;;   "Lambda entry point"
;;  ;;   (handle-request
;;  ;;   (fn [event context]
;;  ;;       ;;let [data (json/read-str (:body event) :key-fn keyword)]
;;  ;;     {:status 200
;;  ;;      :body   event})))
;;  (def app
;;    (reitit-ring/ring-handler
;;     (reitit-ring/router
;;      [["/" {:get {:handler index-handler}}]
;;       ["/items"
;;        ["" {:get {:handler index-handler}}]
;;        ["/:item-id" {:get {:handler index-handler
;;                            :parameters {:path {:item-id int?}}}}]]
;;       ["/questions" {:get {:handler json-get}}]
;;     (reitit-ring/routes
;;      (reitit-ring/create-resource-handler {:path "/" :root "/public"})
;;      (reitit-ring/create-default-handler))
;;     {:middleware middleware}))