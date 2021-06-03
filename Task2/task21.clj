(ns task21)

(defn reduce*
  ([f coll]
   (reduce* f (first coll) (rest coll)))
  
  ([f out xs]
     (let [x    (first xs)
           tail (rest xs)]
       (if x
         (let [out (f out x)]
           (recur f out tail))
         out))))


(comment
  (reduce (fn [a b] (* a b)) [1 2 3 4 5])
  (reduce* (fn [a b] (* a b)) [1 2 3 4 5])
  (reduce (fn [a b] (* a b)) 100 [1 2 3 4])
  (reduce* (fn [a b] (* a b)) 100 [1 2 3 4])
  (reduce (fn [a b]
            (if (< (count a) (count b)) b a))
          ["which" "word" "is" "longest"])
  (reduce* (fn [a b]
            (if (< (count a) (count b)) b a))
          ["which" "word" "is" "longest"])
  )