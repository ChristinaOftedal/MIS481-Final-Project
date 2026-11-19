// calculator.js - Role 4 (Front-end developer)
// Price calculator on services.html. Nothing here is written yet - build it step by step.
//
// Reserved IDs (you add these elements to services.html):
//   #calc-service   - <select>: cage, hitting, pitching
//   #calc-length    - <select>: 30, 60 (minutes)
//   #calc-sessions  - <input type="number" min="1" max="20">
//   #calc-total     - where the total shows, e.g. <output>
//   #calc-error     - (optional) error message for bad input
//
// ----------------------------------------------------------------
// STEP 1 - The prices
//   - Create a constant object named CAGE_RATES with a price per session for each
//     service and length, for example: cage 30 min, cage 60 min, hitting 30 min ...
//   - Use the SAME prices as the rate and lesson cards on the page, labeled as samples
//
// STEP 2 - Calculate
//   - Write calculateTotal():
//       read the three inputs (.value), turn sessions into a number (parseInt),
//       look up the rate in CAGE_RATES, multiply by sessions,
//       show it in #calc-total as dollars, e.g. '$' + total.toFixed(2)
//
// STEP 3 - Bad input
//   - If sessions is empty, 0, negative or over 20: show a message instead of a
//     total, and never show NaN
//
// STEP 4 - Live updates
//   - Add "input" and "change" event listeners on all three inputs that call
//     calculateTotal, and call it once when the page loads
//
// Check: 3 x 60-minute hitting lessons gives the right total; empty and 0 show
// your message.
