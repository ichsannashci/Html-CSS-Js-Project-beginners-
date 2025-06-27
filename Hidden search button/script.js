const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.getElementsByClassName(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  console.log(document.querySelector("div").className);
});

console.info(document.querySelector("div").className);
