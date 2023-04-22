const quizForm = document.querySelector('.quiz__form');
const quizItems = document.querySelector('.quiz__list').children;
const quizBtn = document.querySelector('.btn-form');
const answers = [];

quizForm.addEventListener('change', () => {
  const currentItem = quizForm.querySelector('.quiz__item--visible');
  const currentAnswer = currentItem.querySelectorAll(
    'input[type="radio"]:checked'
  );
  if (currentAnswer.length > 0) {
    quizBtn.removeAttribute('disabled');
  } else {
    quizBtn.setAttribute('disabled', 'disabled');
  }
});

quizBtn.addEventListener('click', () => {
  const currentItem = quizForm.querySelector('.quiz__item--visible');
  const currentIndex = Array.from(quizItems).indexOf(currentItem);
  currentItem.classList.remove('quiz__item--visible');
  currentItem.classList.add('quiz__item--hidden');
  const nextItem = quizItems[currentIndex + 1];

  if (nextItem) {
    nextItem.classList.remove('quiz__item--hidden');
    nextItem.classList.add('quiz__item--visible');
    quizBtn.setAttribute('disabled', 'disabled');
  } else {
    const checkedInputs = document.querySelectorAll(
      'input[type="radio"]:checked'
    );
    checkedInputs.forEach(el => {
      const { name, value } = el;
      answers.push({ [name]: value });
    });
  }
});
