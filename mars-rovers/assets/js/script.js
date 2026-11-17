// A small enhancement: readers can switch between light and dark themes.
const themeButton = document.querySelector(".theme-toggle");
if (themeButton) {
  themeButton.addEventListener("click", () => {
    const darkMode = document.body.classList.toggle("dark");
    themeButton.setAttribute("aria-pressed", String(darkMode));
    themeButton.textContent = darkMode ? "Switch to light mode" : "Switch to dark mode";
  });
}
