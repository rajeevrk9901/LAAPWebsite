const hamBurger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

hamBurger.addEventListener("click", () => {
  console.log(navMenu);

  hamBurger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("ul").forEach((n) =>
  n.addEventListener("click", () => {
    hamBurger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
