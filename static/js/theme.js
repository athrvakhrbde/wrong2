// Theme handling
const THEME_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

// Initialize theme on page load
function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY) || DARK_THEME;
  setTheme(savedTheme);
}

// Set theme
function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem(THEME_KEY, theme);
  
  // Update theme toggle button state
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.checked = theme === DARK_THEME;
  }
}

// Toggle theme
function toggleTheme() {
  const currentTheme = localStorage.getItem(THEME_KEY) || DARK_THEME;
  const newTheme = currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  setTheme(newTheme);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  
  // Add event listener to theme toggle
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('change', toggleTheme);
  }
}); 