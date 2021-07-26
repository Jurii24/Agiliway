(ns mtask9.handler
  (:require
   [reitit.ring :as reitit-ring]
   [mtask9.middleware :refer [middleware]]
   [hiccup.page :refer [include-js include-css html5]]
   [config.core :refer [env]]
   [clojure.data.json :as json]
   ))

(def survey (json/read-str (slurp "src/clj/mtask9/survey.json")
                                :key-fn keyword))

(defn ques [text]
  [:p  text])

(defn question [questions]
  (loop [quest (first questions)
        questions (rest questions)]

    (ques (:question quest))
    (prn (:question quest))
    (if (>= (count questions) 1) 
      (recur (first questions) (rest questions))))
    )

(def mount-target
  (let [{title :title
         questions :questions}
        survey]

    [:div#app
     [:h2 title]
     [:p (str (first questions))]
     [:div (question questions)]
     [:p "s"]
     [:p "(Check the js console for hints if nothing exciting happens.)"]]))

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
    (include-js "/js/aapp.js")
    [:script "mtask9.core.init_BANG_()"]
    ]))


(defn index-handler
  [_request]
  {:status 200
   :headers {"Content-Type" "text/html"}
   :body (loading-page)})

(def app
  (reitit-ring/ring-handler
   (reitit-ring/router
    [["/" {:get {:handler index-handler}}]
     ["/items"
      ["" {:get {:handler index-handler}}]
      ["/:item-id" {:get {:handler index-handler
                          :parameters {:path {:item-id int?}}}}]]
     ["/about" {:get {:handler index-handler}}]])
   (reitit-ring/routes
    (reitit-ring/create-resource-handler {:path "/" :root "/public"})
    (reitit-ring/create-default-handler))
   {:middleware middleware}))
