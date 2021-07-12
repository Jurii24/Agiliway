(ns task7.core
  (:require [clojure.data.json :as json]
            [clojure.java.io   :as io]
            [taoensso.faraday  :as far])
  (:import (com.amazonaws.services.dynamodbv2 AmazonDynamoDBClientBuilder)
           (com.amazonaws.services.s3 AmazonS3ClientBuilder))
  (:gen-class
   :name       task7.core.ApiHandler
   :implements [com.amazonaws.services.lambda.runtime.RequestStreamHandler]))

;; ---------------- Client access ------------------------------
(def client
  (delay {:client (let [builder (AmazonDynamoDBClientBuilder/standard)]
                    (.withRegion builder "us-east-2")
                    (.build builder))}))

;; ---------------------- Get Item --------------------------------
(defn- get-item [id]
  (far/get-item @client :datas {:id id}))


(comment
  ;; Update item example
  (defn- update-item [id name]
    (far/update-item @client
                     :storage {:id id}
                     :update-expr "SET #name = :name, #field = :val"
                     :expr-attr-names {"#name" "name"
                                       "#field" "date"}
                     :expr-attr-vals  {":name" name
                                       ":val" "2021-05-25"})))
;; ---------------------- Put Item --------------------------------
(defn- put-item [id]
  (far/put-item @client :datas {:id id}))

;; ---------------------- Update Item --------------------------------
(defn- update-item [id]
  (far/update-item @client :datas {:id id}))

;; ---------------------- Delete Item --------------------------------
(defn- delete-item [id]
  (far/delete-item @client :datas {:id id}))

;; ---------------------- Handlers ----------------------------------
;; ---------------------- S3 ----------------------------------------
(def s3-client
  (delay (let [builder (AmazonS3ClientBuilder/standard)]
           (.withRegion builder "us-east-2")
           (.build builder))))

(defn get-s3-file [bucket-name object-key]
  (let [object (.getObject @s3-client bucket-name object-key)]
    (with-open [file-stream (io/input-stream (.getObjectContent object))]
      (slurp file-stream))))

(defn- handle-s3 [event]
  (let [record (-> event :Records first :s3)
        file   (get-s3-file (-> record :bucket :name) (-> record :object :key))]
    (prn file)
    {:status 200
     :body   "Noice)"}))

;; ---------------------- Api Gateway ----------------------------------
(defn handle-request [handler]
  (fn [_ input-stream output-stream context]
    (with-open [in  (io/reader input-stream)
                out (io/writer output-stream)]
      (let [request (json/read in :key-fn keyword)]
        (-> request
            (handler context)
            (json/write out))))))

(defmulti handle (fn [event] (-> event :requestContext :http :method)))

(defmethod handle "GET" [event]
  {:status 200
   :body   (get-item "adsf")})

(defmethod handle "PUT" [event]
  {:status 210
   :body   (put-item "assd")})

(defmethod handle "UPDATE" [event]
  {:status 220
   :body (update-item "ytr")})

(defmethod handle "DELETE" [event]
  {:status 230
   :body   event})

(defmethod handle nil [event]
  {:status 400
   :body   "Invalid method!"})

(def -handleRequest
  "Lambda entry point"
  (handle-request
   (fn [event context]
     (prn event)

     (if (:Records event)
       (handle-s3 event)
       (handle event))

     ;;(far/list-tables @client)
     ;;(handle event)
)))