// Initialize theme
(function initializeTheme() {
  let currentTheme = window.localStorage.getItem('theme') || 'dark';
  document.body.className = currentTheme;
})();

// Toggle theme
function toggleColors() {
  let currentTheme = window.localStorage.getItem('theme') || 'dark';
  let newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  window.localStorage.setItem('theme', newTheme);
  document.body.className = newTheme;
} 