const formBtnRef = document.querySelector('.btn-form');
const currentQuestion = document.querySelector('.quiz__item--visible');
const answers = [];

currentQuestion.addEventListener('click', onInputClick);
formBtnRef.addEventListener('click', onBtnClick);

function onInputClick(event) {
  console.log('Клик по инпуту');
}

function onBtnClick(event) {
  const currentAnswer = currentQuestion.querySelector('input[checked]');
  console.log(currentAnswer);
}
