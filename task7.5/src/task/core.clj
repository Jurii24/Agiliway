(ns task.core
  (:require [clojure.data.json :as json]
            [clojure.java.io   :as io])
  (:gen-class
   :name       task.core.ApiHandler
   :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler]))

(defmulti calculate (fn [c] (:c c)))
(defmethod calculate "+" [a b] (+ (:a a) (:b b)))
(defmethod calculate "-" [a b] (- (:a a) (:b b)))


(calculate "+" 2 1)

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
     (let [data (json/read-str (:body event) :key-fn keyword)
           data1 (vec (:expr data))
           a (Double. (str (first data1)))
           b (Double. (str (last data1)))
           c (str (nth data1 2))
           decision (calculate (assoc {} :a a :b b :c c))
           calc (str data1 "=" decision)]
     {:status 200
      :body   calc}))))