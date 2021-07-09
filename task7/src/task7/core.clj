(ns task7.core
  (:require [clojure.data.json :as json]
            [clojure.java.io   :as io])
  (:gen-class
   :name       task7.core.ApiHandler
   :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler]))

(defn calculate [a b c]
  (case c "+" (+ a b)
        "-" (- a b)
        "*" (* a b)
        "/" (if (= 0 b) "divide on zero!!!" (/ a b))
        "%" (rem a b)
        "undefinded c value"))

(defn handle-request [handler]
  (fn [_ input-stream output-stream context]
    (with-open [in  (io/reader input-stream)
                out (io/writer output-stream)]
      (let [request (json/read in :key-fn keyword)]
        (-> request
            (handler context)
            (json/write out))))))

(def -handleRequest
  "Lambda entry point"
  (handle-request
   (fn [event context]
     (let [data (event :queryStringParameters)
           a (Double.(data :a))
           b (Double.(data :b))
           c (data :c)
           calcul (str a c b "=" (calculate a b c))]
     {:status 200
      :body   calcul}))))