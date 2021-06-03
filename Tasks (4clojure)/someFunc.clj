(ns task2.1)

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

