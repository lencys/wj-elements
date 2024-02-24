document.querySelector(".dark-light-mode").addEventListener("wj:button-click", () => {
  document.body.classList.toggle("wj-theme-dark");
  saveModePreference();
});
loadModePreference();

function saveModePreference() {
  var body = document.body;
  var isDarkMode = body.classList.contains("wj-theme-dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}

function loadModePreference() {
  const body = document.body;
  const darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    body.classList.add("wj-theme-dark");
  } else {
    body.classList.remove("wj-theme-dark");
  }
}