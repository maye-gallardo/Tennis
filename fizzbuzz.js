function isFizz(numberToEvaluate) {
  return numberToEvaluate % 3 === 0;
}

function isBuzz(numberToEvaluate) {
  return numberToEvaluate % 5 === 0;
}

function isFizzBuzz(numberToEvaluate) {
  return numberToEvaluate % 3 === 0 && numberToEvaluate % 5 === 0;
}

function getFizzBuzzEvaluation(numberToEvaluate) {
  switch(true) {
    case (isFizzBuzz(numberToEvaluate)):
      return "FizzBuzz";

    case (isFizz(numberToEvaluate)):
      return "Fizz";

    case (isBuzz(numberToEvaluate)):
      return "Buzz";

    default:
      return numberToEvaluate;
  }
}


module.exports = getFizzBuzzEvaluation;