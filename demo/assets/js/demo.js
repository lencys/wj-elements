document.querySelector(".dark-light-mode").addEventListener("wje-button:click", () => {
  document.body.classList.toggle("wje-theme-dark");
  saveModePreference();
});
loadModePreference();

function saveModePreference() {
  var body = document.body;
  var isDarkMode = body.classList.contains("wje-theme-dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

function loadModePreference() {
  const body = document.body;
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    body.classList.add("wje-theme-dark");
  } else {
    body.classList.remove("wje-theme-dark");
  }
}