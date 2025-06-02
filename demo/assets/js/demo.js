import { setBasePath } from "/dist/base-path.js";

// Set the base path for the application
setBasePath("/dist/");

// Set the base variable for translations
window.translations = new Map();

/*********************************/

document.querySelector('.dark-light-mode').addEventListener('wje-button:click', () => {
  document.body.classList.toggle('wje-theme-dark');
  saveModePreference();
});
loadModePreference();

function saveModePreference() {
  const body = document.body;
  let isDarkMode = body.classList.contains('wje-theme-dark');
  localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
}

function loadModePreference() {
  const body = document.body;
  const darkMode = localStorage.getItem('darkMode');
  if (darkMode === 'enabled') {
    body.classList.add('wje-theme-dark');
  } else {
    body.classList.remove('wje-theme-dark');
  }
}
