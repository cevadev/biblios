const menuBar = document.querySelector(".header-nav nav .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");

export default function sidebarToggle() {
  menuBar.addEventListener("click", () => {
    sideBar.classList.toggle("close");
  });
}
