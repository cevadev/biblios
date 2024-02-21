const sideBar = document.querySelector(".sidebar");
const searchBtnIcon = document.querySelector(".form-element-container .bx");

const searchForm = document.querySelector(".search-form");

export default function windowResize() {
  window.addEventListener("resize", () => {
    try {
      if (
        (sideBar === null) |
        (searchBtnIcon === null) |
        (searchForm === null)
      ) {
        throw new Error(
          "Se produjo el siguiente error: Se encontro un problema en una de las siguientes clases: .sidebar, .searchForm, .form-element-container .bx"
        );
      }
      if (window.innerWidth < 768) {
        sideBar.classList.add("close");
      } else {
        sideBar.classList.remove("close");
      }
      if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace("bx-x", "bx-search");
        searchForm.classList.remove("show");
      }
    } catch (error) {
      console.error(error);
    }
  });
}
