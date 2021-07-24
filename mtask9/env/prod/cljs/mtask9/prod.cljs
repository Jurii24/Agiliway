(ns mtask9.prod
  (:require [mtask9.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
