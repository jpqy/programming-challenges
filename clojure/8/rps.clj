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

(ns rock-paper-scissors-tests
  (:require [clojure.test :refer :all]
            [rock-paper-scissors :refer [rps]]))

(deftest rps-tests
  (testing "player 1 win"
    (are [p1 p2] (= "Player 1 won!" (rps p1 p2))
      "rock" "scissors"
      "scissors" "paper"
      "paper" "rock"))
  (testing "player 2 win"
    (are [p1 p2] (= "Player 2 won!" (rps p1 p2))
      "scissors" "rock"
      "paper" "scissors"
      "rock" "paper"))
  (testing "draw"
    (are [p1 p2] (= "Draw!" (rps p1 p2))
      "rock" "rock"
      "scissors" "scissors"
      "paper" "paper")))

(run-tests)