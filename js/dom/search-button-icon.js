const searchBtn = document.querySelector(".form-element-container button");
const searchBtnIcon = document.querySelector(
  ".form-element-container button .bx"
);
const searchForm = document.querySelector(".search-form");

export default function searchButtonIcon() {
  searchBtn.addEventListener("click", function (e) {
    if (window.innerWidth < 576) {
      e.preventDefault;
      searchForm.classList.toggle("show");
      if (searchForm.classList.contains("show")) {
        searchBtnIcon.classList.replace("bx-search", "bx-x");
      } else {
        searchBtnIcon.classList.replace("bx-x", "bx-search");
      }
    }
  });
}
