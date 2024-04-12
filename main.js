
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".container__left h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".container__left .container__btn", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal("#hero-shape", {
  ...scrollRevealOption,
  delay: 700,
});

ScrollReveal().reveal("#hero-shape-1", {
  ...scrollRevealOption,
  delay: 850,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 1000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 1500,
});

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 2000,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 2500,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 3000,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 3500,
});
ScrollReveal().reveal(".counter", {
  ...scrollRevealOption,
  delay: 3800,
});

ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 3500,
  interval: 500,
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
        "<a href=#>VIEW HERE</a>";
      const digits = document.querySelectorAll(".digit");
      digits.forEach((digit) => {
        digit.innerHTML = "00";
      });
      clearInterval(int);
    }
  }, 1000);
})();
