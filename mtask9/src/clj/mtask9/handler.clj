(ns mtask9.handler
  (:require
   [reitit.ring :as reitit-ring]
   [mtask9.middleware :refer [middleware]]
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]))

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

(defn json-post
  [_request]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (str "resources/json/survey.json")})

;;(defroutes app1
;;  (GET "/" [] "<h1>Hello World</h1>")
;;  (GET "/data" [] json-handler)
;;  (route/not-found "<h1>Page not found</h1>"))


(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    [["/" {:get {:handler index-handler}
           :post {:handler json-post}}]
     ["/items"
      ["" {:get {:handler index-handler}}]
      ["/:item-id" {:get {:handler index-handler
                          :parameters {:path {:item-id int?}}}}]]
     ["/thanks" {:get {:handler "json-post"}}]
     ["/data" {:get {:handler json-get}}]])
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
