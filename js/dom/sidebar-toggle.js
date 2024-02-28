// const menuBar = document.querySelector(".header-nav nav .bx.bx-menu");
const menuBar = document.querySelector(".sidebar a .bx.bx-menu");
const sideBar = document.querySelector(".sidebar");

export default function sidebarToggle() {
  menuBar.addEventListener("click", (e) => {
    e.preventDefault();
    sideBar.classList.toggle("close");
  });
}
