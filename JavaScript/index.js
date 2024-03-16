const btnDarkMode = document.querySelector(".dark-mode-btn");
const navListLink = document.querySelector(".nav-list__link");

// 1. Проверка темной темы в на уровне системных настройках.

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
}

// 2. Проверка темной темы в localStorage.

if (localStorage.getItem("darkMode") === "dark") {
  btnDarkMode.classList.add("dark-mode-btn--active");
  document.body.classList.add("dark");
} else if (localStorage.getItem("darkMode") === "light") {
  btnDarkMode.classList.remove("dark-mode-btn--active");
  document.body.classList.remove("dark");
}

// Если меняется системные настройки
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    const newColorScheme = event.matches ? "dark" : "light";

    alert("Меняемся!!!");

    if (newColorScheme === "dark") {
      btnDarkMode.classList.add("dark-mode-btn--active");
      document.body.classList.add("dark");
      localStorage.setItem("darkMode", "dark");
    } else {
      btnDarkMode.classList.remove("dark-mode-btn--active");
      document.body.classList.remove("dark");
      localStorage.setItem("darkMode", "light");
    }
  });

// Включение темной темы.
btnDarkMode.onclick = function () {
  btnDarkMode.classList.toggle("dark-mode-btn--active");
  navListLink.classList.toggle("nav-list__link--active");
  const isDark = document.body.classList.toggle("dark");
  if (isDark) {
    localStorage.setItem("darkMode", "dark");
  } else {
    localStorage.setItem("darkMode", "light");
  }
};
