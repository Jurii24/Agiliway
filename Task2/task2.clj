(ns filter*)

(defn filter* [f coll]
  (loop [out []
         xs  coll]
    (let [x    (first xs)
          tail (rest xs)]
      (if x
        (let [out (if (f x)
                    (conj out x)
                    out)]
          (recur out tail))
        out))))

(comment
  (filter (fn [x] (keyword (str x 2))) '(:anything :goes :here))
  (filter* (fn [x] (keyword (str x 2))) '(:anything :goes :here))
  (filter :a '(:anything :goes :here :b0 :a))
  (filter* :a '(:anything :goes :here :b0 :a))
  (filter even? (range 10))
  (filter* even? (range 10))
  (filter odd? (range 10))
  (filter* odd? (range 10))
  )