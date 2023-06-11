const bar = document.getElementsByClassName("hamburger")[0];
const list_nav = document.getElementsByClassName("list-nav")[0];
const is_Clicked = list_nav.getAttribute("data-isClicked");
var check = -1;

function navMenu() {
  if (check === -1) {
    list_nav.classList.add("show");
    bar.innerHTML = `<i class="fa-solid fa-xmark fa-xl" ></i>`;
    check = 1;
  } else if (check === 1) {
    list_nav.classList.remove("show");
    bar.innerHTML = `<i class="fa-regular fa-bars fa-xl"></i>`;
    check = -1;
  }
}
