// search bar

const searchIcon = document.getElementById("search______bar");
const cross = document.getElementById("cross_____icon");
const searchBar = document.getElementById("main___search___bar");

searchIcon.addEventListener("click", function (e) {
  searchBar.classList.add("show___searchbar");
  document
    .querySelector(".admin____overlay")
    .classList.add("show__adminOverlay");
});

cross.addEventListener("click", () => {
  searchBar.classList.remove("show___searchbar");
  document
    .querySelector(".admin____overlay")
    .classList.remove("show__adminOverlay");
});

document.addEventListener("click", (event) => {
  if (event.target.closest("#search______bar")) return;
  if (event.target.closest("#main___search___bar")) return;

  if (event.target.classList[1] === "show__adminOverlay") {
    document
      .querySelector(".admin____overlay")
      .classList.remove("show__adminOverlay");
  }

  searchBar.classList.remove("show___searchbar");
});

// category
// const homeCat = document.getElementById("home___cat");
// const homeMaainCat = document.querySelector(".main____cat___div");
// homeCat.style.display = "none";

// function homeCategory() {
//   homeCat.style.display = "flex";
// }

// function homeLeave() {
//   homeCat.style.display = "none";
// }

// const shop = document.getElementById("shop__cat");
// shop.style.display = "none";

// function shopCategory() {
//   shop.style.display = "flex";
//   homeMaainCat.style.zIndex = "99999";
// }
// function shopLeave() {
//   shop.style.display = "none";
// }

// const page = document.getElementById("page__cat");
// page.style.display = "none";
// function pageCategory() {
//   page.style.display = "flex";
// }

// function pageLeave() {
//   page.style.display = "none";
// }

// slider frindly

// full screen grid
$(".snake").snakeify({
  speed: 200,
});
