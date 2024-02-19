export default function windowResize() {
  window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
      sideBar.classList.add("close");
    } else {
      sideBar.classList.remove("close");
    }
    if (window.innerWidth > 576) {
      searchBtnIcon.classList.replace("bx-x", "bx-search");
      searchForm.classList.remove("show");
    }
  });
}
