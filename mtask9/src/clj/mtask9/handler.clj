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
;; [myblog.views :as views]
;; [myblog.posts :as posts]
;; [ring.util.response :as resp]
;; [ring.middleware.basic-authentication :refer :all]
   ;;[ring.middleware.defaults :refer [wrap-defaults site-defaults]]
   ;;[ring.middleware.json :as json]
   ))

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

(defn json-post [_request]
  (prn _request)
  ;;(response/ok (slurp "json"))
  )

(defroutes app-routes
  (GET "/" [] index-handler)
  (GET "/questions" [] json-get)
   (POST "/post" [] json-post)
    ;;(let [body (json/read-str (slurp (:body request)))]
      ;;(println (str "-" "=" "-request")));;)
  ;;(println site-defaults)
   ;;(POST "/post" [] )
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
;;  (defn json-get
;;    [_request]
;;    {:status 200
;;     :headers {"Content-Type" "application/json"}
;;     :body (slurp "resources/json/survey.json")})
;;  (def ar (atom {:title "" :results []}))
;;  (defn json-results
;;    [_request]
;;    {:status 200
;;     :headers {"Content-Type" "application/json"}
;;     :body (str @ar)})
;;  (defn json-post
;;    [_request]
;;    {:status 200
;;     :headers {"Content-Type" "application/json"}
;;     :body "csssss"})
;;  ;;(defroutes app1
;;  ;;  (GET "/" [] "<h1>Hello World</h1>")
;;  ;;  (GET "/data" [] json-handler)
;;  ;;  (route/not-found "<h1>Page not found</h1>"))
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
;;      [["/" {:get {:handler index-handler}
;;             :post {:handler json-post}
;;             }]
;;       ["/items"
;;        ["" {:get {:handler index-handler}}]
;;        ["/:item-id" {:get {:handler index-handler
;;                            :parameters {:path {:item-id int?}}}}]]
;;       ["/questions" {:get {:handler json-get}}]
;;       ["/post" {:post {:handler json-results}}]
;;       ["/results" {:get {:handler json-results}}]])
;;     (reitit-ring/routes
;;      (reitit-ring/create-resource-handler {:path "/" :root "/public"})
;;      (reitit-ring/create-default-handler))
;;     {:middleware middleware}))