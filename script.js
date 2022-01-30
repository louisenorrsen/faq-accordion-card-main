function showAnswer(questionNumber) {
  let answer = document.getElementById(`a${questionNumber}`)
  let question = document.getElementById(`q${questionNumber}`)
  let arrow = document.getElementById(`i${questionNumber}`)
  if (answer.style.display === "none") {
    answer.style.display = "block"
    question.style.fontWeight = '700'
    arrow.style.transform = 'rotateX(180deg)'
  } else {
    answer.style.display = "none"
    question.style.fontWeight = "400"
    arrow.style.transform = 'rotateX(0deg)'
  }
}
