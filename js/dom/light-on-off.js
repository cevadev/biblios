const toggler = document.getElementById("theme-toggle");

export default function lightOnOff() {
  toggler.addEventListener("change", function () {
    this.checked
      ? document.body.classList.add("dark")
      : document.body.classList.remove("dark");
  });
}
