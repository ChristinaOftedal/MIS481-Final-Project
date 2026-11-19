// faq.js - Role 2 (Business analyst)
// FAQ accordion on about.html. Nothing here is written yet - build it step by step.
//
// HTML pattern to use in about.html (inside <div id="faq-list">), one per question:
//   <div class="faq-item">
//     <button class="faq-question" type="button" aria-expanded="false">Question?</button>
//     <div class="faq-answer hidden">Answer.</div>
//   </div>
//
// ----------------------------------------------------------------
// STEP 1 - Find the questions
//   - Find #faq-list, then all .faq-question buttons inside it (querySelectorAll)
//
// STEP 2 - Open and close
//   - Loop over the buttons (forEach) and add a "click" listener to each
//   - On click: the answer is the button's nextElementSibling
//   - Toggle the "hidden" class on the answer
//   - Set aria-expanded on the button to "true" when open, "false" when closed
//
// STEP 3 (nice to have) - Only one open at a time
//   - Before opening one, close all the others
//
// Check: at least 6 questions (hours, ages, what to bring, lessons, camps,
// cancellations) open and close, and work with the keyboard (Tab + Enter).
