/**
 * Simple quiz widget: equal-length answers, instant feedback.
 * Usage: data-quiz on container, data-correct on the right button index (0-based).
 */
document.querySelectorAll('[data-quiz]').forEach((quiz) => {
  const correct = parseInt(quiz.dataset.correct, 10);
  const feedback = quiz.querySelector('.quiz-feedback');
  const options = quiz.querySelectorAll('.quiz-option');

  options.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      if (quiz.dataset.answered) return;
      quiz.dataset.answered = '1';

      options.forEach((b) => { b.disabled = true; });

      if (i === correct) {
        btn.classList.add('correct');
        feedback.textContent = quiz.dataset.ok || 'נכון! מצוין.';
        feedback.className = 'quiz-feedback show ok';
      } else {
        btn.classList.add('wrong');
        options[correct].classList.add('correct');
        feedback.textContent = quiz.dataset.no || 'לא בדיוק. תסתכל על התשובה הירוקה.';
        feedback.className = 'quiz-feedback show no';
      }
    });
  });
});
