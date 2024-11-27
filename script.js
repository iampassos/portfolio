const buttons = document.querySelectorAll(".top-button");

buttons.forEach((button) => {
  button.addEventListener("click", function (event) {
    event.preventDefault();

    if (window.location.href !== button.href) {
      window.location.href = this.getAttribute("href");
    }
  });
});
