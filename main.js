document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.container__left h1, .container__left .container__btn, #hero-shape, #hero-shape-1, .container__right .tent-1, .container__right .tent-2, .container__right h4, .container__right h2, .container__right h3, .container__right p, .counter, .socials span');

  let delay = 0;
  elements.forEach((el) => {
      setTimeout(() => {
          el.classList.add('fade-in');
      }, delay);
      delay += 500; // Add 500ms delay for each element
  });
});

(() => {
  const sec = 1000,
    min = sec * 60,
    hour = min * 60,
    day = hour * 24;

  const end = new Date("April 21, 2024 00:00:00").getTime();

  const int = setInterval(() => {
    const current = new Date().getTime();
    const remaining = end - current;

    document.querySelector("#days").innerHTML = Math.floor(remaining / day);
    document.querySelector("#hours").innerHTML = Math.floor(
      (remaining % day) / hour
    );
    document.querySelector("#minutes").innerHTML = Math.floor(
      (remaining % hour) / min
    );
    document.querySelector("#seconds").innerHTML = Math.floor(
      (remaining % min) / sec
    );

    if (remaining < 0) {
      document.querySelector(".content_para").innerHTML = "The big day is finally here <a href=#> view here </a>";
      document.querySelector(".btn").innerHTML =
        "<a href= "https://propertys-landing-page.vercel.app/">VIEW HERE</a>";
      const digits = document.querySelectorAll(".digit");
      digits.forEach((digit) => {
        digit.innerHTML = "00";
      });
      clearInterval(int);
    }
  }, 1000);
})();
