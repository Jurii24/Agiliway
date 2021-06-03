(ns task0)

(defn fibonacci
  ([]
   (fibonacci 0 1))
  ([a b]
   (lazy-seq
    (cons a (fibonacci (+ a b) a)))))

(defn factorial
  ([]
   (factorial 1 1))
  ([res a]
   (lazy-seq
    (cons res (factorial (* res (inc a)) (inc a))))))


(comment
  ;;0 1 1 2 3
  (take 10 (fibonacci)) 
  
  ;;1*2*3*4*5*6 = 720
  (take 6 (factorial))
  )