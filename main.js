
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

ScrollReveal().reveal(".container__right h4", {
  ...scrollRevealOption,
  delay: 800,
});
ScrollReveal().reveal(".container__right h2", {
  ...scrollRevealOption,
  delay: 900,
});
ScrollReveal().reveal(".container__right h3", {
  ...scrollRevealOption,
  delay: 900,
});
ScrollReveal().reveal(".container__right p", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".container__right .tent-1", {
  duration: 1000,
  delay: 2000,
});
ScrollReveal().reveal(".container__right .tent-2", {
  duration: 1000,
  delay: 2000,
});



ScrollReveal().reveal(".socials span", {
  ...scrollRevealOption,
  origin: "top",
  delay: 5500,
  interval: 500,
});
