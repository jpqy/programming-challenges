;; Let's play! You have to return which player won! In case of a draw return Draw!.

;; Examples:

;; rps('scissors','paper') // Player 1 won!
;; rps('scissors','rock') // Player 2 won!
;; rps('paper','paper') // Draw!

(ns rock-paper-scissors)

(defn rps [p1 p2]
  (or (and (= p1 p2)                        "Draw!")
      (and (= (- (count p1) (count p2)) -4) "Player 1 won!")
      (and (= (- (count p1) (count p2))  4) "Player 2 won!")
      (and (> (count p1)    (count p2))     "Player 1 won!")
      "Player 2 won!"))