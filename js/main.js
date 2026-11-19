// main.js - Role 3 (UX/UI designer)
// Loaded on EVERY page. Nothing here is written yet - build it step by step.
//
// Reserved IDs this file uses (already in the HTML of every page):
//   #menu-toggle  - the "Menu" button in the header
//   #site-nav     - the <nav> with the page links
//   #year         - the <span> in the footer copyright line
//
// ----------------------------------------------------------------
// STEP 1 - Copyright year that never goes out of date (easiest - start here)
//   - Find #year with document.getElementById
//   - Set its textContent to the current year: new Date().getFullYear()
//   - Check: the footer on every page shows this year
//
// STEP 2 - Mobile menu
//   - Find #menu-toggle and #site-nav
//   - When #menu-toggle is clicked, toggle the class "is-open" on #site-nav
//     (classList.toggle returns true/false - use it for the next line)
//   - Set aria-expanded on the button to "true" or "false" so screen readers know
//   - Needs the CSS from the NAV section TODO in styles.css
//   - Check: at phone width the links hide, and the Menu button shows/hides them
//
// STEP 3 - Sticky Book/Call bar on phones (nice to have)
//   - Option A: add the bar's HTML to each page; Option B: create it here with
//     document.createElement and append it to document.body
//   - Two links: "Book" -> book.html, "Call" -> tel:+16192990282
//   - Use CSS to show it only on small screens, fixed to the bottom
//   - Check: it appears on a phone-size screen and not on desktop
//
// Before your pull request: open every page and check the Console has no red errors.
