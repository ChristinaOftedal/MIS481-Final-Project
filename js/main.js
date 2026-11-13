// Role 3 (Designer) - loaded on every page
// TODO: #menu-toggle opens/closes #site-nav on mobile
// TODO: sticky Book/Call bar on small screens

// Auto-updating copyright year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
