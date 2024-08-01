document.addEventListener("DOMContentLoaded", () => {
  const backButton = document.querySelector(".back-btn");
  if (backButton) {
    backButton.addEventListener("click", () => {
      history.back();
    });
  }
});
