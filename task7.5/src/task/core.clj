(ns task.core
  (:require [clojure.data.json :as json]
            [clojure.java.io   :as io])
  (:gen-class
   :name       task.core.ApiHandler
   :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler]))

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
           data1 (data :expr)
           calc (str data "///" data1)]
     {:status 200
      :body   data1}))))