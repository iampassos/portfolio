const buttons = document.querySelectorAll(".top-button");
const normalTexts = document.querySelectorAll(".normal-text");
const darkModeButton = document.querySelector("#mode");

let dark = false;

const toggleDark = function () {
  document.body.classList.toggle("dark-mode");
  normalTexts.forEach((p) => p.classList.toggle("dark-mode"));
  buttons.forEach((b) => b.classList.toggle("dark-mode"));
  const links = document.querySelectorAll(".link");
  const name = document.querySelector(".name");

  if (links) {
    links.forEach((l) => l.classList.toggle("dark-mode"));
  }

  if (name) {
    name.classList.toggle("dark-mode");
  }

  dark = dark ? false : true;

  darkModeButton.textContent = dark ? "Light Mode" : "Dark Mode";
};

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    const id = button.id;

    if (id == "mode") {
      toggleDark();
    }

    if (window.location.href !== button.href && id !== "mode") {
      window.location.href = this.getAttribute("href");
    }
  });
});
