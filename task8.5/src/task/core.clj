(ns task.core
  (:require [clojure.data.json :as json]
            [clojure.java.io   :as io]
            [clojure.string :as string])
  (:gen-class
   :name       task.core.ApiHandler
   :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler]))

(defmulti calculate (fn [c] (:c c)))
(defmethod calculate "+" [m] (+ (:a m) (:b m)))
(defmethod calculate "-" [m] (- (:a m) (:b m)))
(defmethod calculate "*" [m] (* (:a m) (:b m)))
(defmethod calculate "/" [m] (if (= 0.0 (:b m)) "divide on zero!!!" (/ (:a m) (:b m))))
(defmethod calculate "%" [m] (rem (:a m) (:b m)))

(defn positions [pred coll]
  (keep-indexed (fn [idx x]
                  (when (pred x)
                    idx))
                coll))

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
           data1 (vec (string/split (:expr data) #" "))
           a (Double. (first data1))
           b (Double. (last data1))
           c (second data1)
           decision (calculate (assoc {} :a a :b b :c c))
           ;;calc (pos)
           ]
     {:status 200
      :body   decision}))))
