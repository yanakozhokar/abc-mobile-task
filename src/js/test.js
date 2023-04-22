const quizSectionRef = document.querySelector('.quiz');
const quizFormRef = document.querySelector('.quiz__form');
const quizItemsRef = document.querySelector('.quiz__list').children;
const quizBtnRef = document.querySelector('.btn-form');
const quizIndicatorEmptyRef = document.querySelector('.quiz__indicator');
const quizIndicatorFillRef = document.querySelector('.quiz__indicator-fill');
const answers = [];

const maxFillWidth =
  quizIndicatorEmptyRef.clientWidth -
  quizIndicatorEmptyRef.clientWidth / quizItemsRef.length;

quizIndicatorFillRef.style.width = `${Math.round(
  maxFillWidth / quizItemsRef.length
)}px`;

quizFormRef.addEventListener('change', () => {
  const currentItem = quizFormRef.querySelector('.quiz__item--visible');
  const checkedInput = currentItem.querySelectorAll(
    'input[type="radio"]:checked'
  );
  if (checkedInput.length > 0) {
    quizBtnRef.removeAttribute('disabled');
  }
});

quizBtnRef.addEventListener('click', () => {
  const currentItem = quizFormRef.querySelector('.quiz__item--visible');
  const currentIndex = Array.from(quizItemsRef).indexOf(currentItem);
  currentItem.classList.remove('quiz__item--visible');
  currentItem.classList.add('quiz__item--hidden');
  const nextItem = quizItemsRef[currentIndex + 1];

  quizIndicatorFillRef.style.width = `${Math.round(
    ((currentIndex + 2) * maxFillWidth) / quizItemsRef.length
  )}px`;

  if (nextItem) {
    nextItem.classList.remove('quiz__item--hidden');
    nextItem.classList.add('quiz__item--visible');
    quizBtnRef.setAttribute('disabled', 'disabled');
  } else {
    quizSectionRef.classList.add('is-hidden');

    const checkedInputs = document.querySelectorAll(
      'input[type="radio"]:checked'
    );
    checkedInputs.forEach(el => {
      const { name, value } = el;
      answers.push({ [name]: value });
    });
  }
});
