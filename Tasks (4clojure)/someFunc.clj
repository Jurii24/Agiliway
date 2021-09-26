(ns task2.1)

;;63 reduce update conj tail recur
(defn group-by* [f xs]
  (loop [out {}
         xs  xs
         fir1 (first xs)
         res (f fir1)]
    (if (> (count xs) 0)
      (recur (if (contains? out res)
               (conj out res fir1) 
               (assoc out res fir1)) (rest xs) (first (rest xs)) (f (first (rest xs))))
      out)))

(comment
  (= (group-by* #(> % 5) [1 3 6 8]) {false [1 3], true [6 8]})
  (= (group-by #(> % 5) [1 3 6 8]) {false [1 3], true [6 8]})
(= (group-by* #(apply / %) [[1 2] [2 4] [4 6] [3 6]])
   {1/2 [[1 2] [2 4] [3 6]], 2/3 [[4 6]]})
  (= (group-by #(apply / %) [[1 2] [2 4] [4 6] [3 6]])
     {1/2 [[1 2] [2 4] [3 6]], 2/3 [[4 6]]})
(= (group-by* count [[1] [1 2] [3] [1 2 3] [2 3]])
   {1 [[1] [3]], 2 [[1 2] [2 3]], 3 [[1 2 3]]})
  )

;;partition [x y]
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
;;27
(denf palindrome [])

(comment
  (false? (palindrome '(1 2 3 4 5)))
  (true? (palindrome "racecar"))
  (true? (palindrome [:foo :bar :foo]))
  (true? (palindrome '(1 1 3 3 1 1)))
  (false? (palindrome '(:a :b :c)))
  )


;;26
(defn fibonacci [n]
  (loop [n n
         col '(1)]
    (if (= 1 n)
      col
      (recur (dec n)
             (if (= 1 (count col))
               (conj col 1)
               (reverse (conj (reverse col) (+ (last col) (second (reverse col))))))))))

(comment
  (= (fibonacci 3) '(1 1 2))
  (= (fibonacci 6) '(1 1 2 3 5 8))
  (= (fibonacci 8) '(1 1 2 3 5 8 13 21))
  )


;;25
(defn odd* [coll]
  (filter odd? coll))

(comment
  (= (odd* #{1 2 3 4 5}) '(1 3 5))
  (= (odd* [4 2 1 6]) '(1))
  (= (odd* [2 2 4 6]) '())
  (= (odd* [1 1 1 3]) '(1 1 1 3))
  )


;;24
(defn sum* [xs]
  (loop [num 0
         xs xs]
    (if (empty? xs)
      num
      (recur (+ num (first xs)) (rest xs)))))

(comment
  (= (sum* [1 2 3]) 6)
  (= (sum* (list 0 -2 5 5)) 8)
  (= (sum* #{4 2 1}) 7)
  (= (sum* '(0 0 -1)) -1)
  (= (sum* '(1 10 3)) 14)
  )


;;23
(defn rseq* [xs]
  (loop [out []
         xs xs]
    (if (empty? xs)
      out
      (recur (cons (first xs) out) (rest xs)))))

(comment
  (= (rseq [1 2 3 4 5]) [5 4 3 2 1])
  (= (rseq* [1 2 3 4 5]) [5 4 3 2 1])
  (= (rseq* (sorted-set 5 7 2 7)) '(7 5 2))
  (= (rseq* [[1 2] [3 4] [5 6]]) [[5 6] [3 4] [1 2]])
  )


;;22
(defn count* [xs]
  (loop [n 0
         xs xs]
    (if (empty? xs)
      n
      (recur (inc n) (rest xs)))
    ))

(comment
  (= (count '(1 2 3 3 1)) 5)
  (= (count* '(1 2 3 3 1)) 5)
  (= (count* "Hello World") 11)
  (= (count* [[1 2] [3 4] [5 6]]) 3)
  (= (count* '(13)) 1)
  (= (count* '(:a :b :c)) 3)
  )


;;21
(defn nth* [xs n]
  (loop [n  n
         xs xs]
    (let [x (first xs)]
      (if (= 0 n)
        x
        (recur (dec n) (rest xs))))))

(comment
  (= (nth '(4 5 6 7) 2) 6)
  (= (nth* '(4 5 6 7) 2) 6)
  (= (nth* [:a :b :c] 0) :a)
  (= (nth* [1 2 3 4] 1) 2)
  (= (nth* '([1 2] [3 4] [5 6]) 2) [5 6])
  )


;;20
(defn fun20 [x] (second (reverse x)))

(comment
  (= (fun20 (list 1 2 3 4 5)) 4)
  (= (fun20 ["a" "b" "c"]) "b")
  (= (fun20 [[1 2] [3 4]]) [1 2])
  )


;;19
(defn fun19 [x] (first (reverse x)))

(comment
  (= (fun19 [1 2 3 4 5]) 5)
  (= (fun19 '(5 4 3)) 3)
  (= (fun19 ["b" "c" "d"]) "d")
  )