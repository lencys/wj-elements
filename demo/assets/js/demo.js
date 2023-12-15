import "../../../dist/wj-master.js";
import { makeServer } from './mirage-config.js';

if (import.meta.env.DEV) {
  makeServer();

  console.log("Development mode: Mirage server started.");
}

document.querySelector(".dark-light-mode").addEventListener("wj:button-click", () => {
  document.body.classList.toggle("wj-theme-dark");
});

function saveModePreference() {
  var body = document.body;
  var isDarkMode = body.classList.contains("wj-theme-dark");
  localStorage.setItem("darkMode", isDarkMode ? "enabled" : "disabled");
}