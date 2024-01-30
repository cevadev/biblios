const toggler = document.getElementById("theme-toggle");

export default function lightOnOff() {
  toggler.addEventListener("change", function () {
    if (this.checked) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  });
}
