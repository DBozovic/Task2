"use strict";
const qas = document.querySelectorAll(".questions_answers");

qas.forEach((questions_answers) => {
  questions_answers.addEventListener("click", (e) => {
    let p = questions_answers;
    qas.forEach((questions_answers) => {
      if (!(p == questions_answers)) {
        questions_answers.classList.remove("active");
      }
    });
    p.classList.toggle("active");
  });
});
