// camps.js - Role 1 (Project manager)
// Camp filter on services.html. Nothing here is written yet - build it step by step.
//
// Why this fixes problem 2: every camp lives in ONE list, and every camp card is
// built from that list, so dates and prices can't contradict each other.
//
// Reserved IDs (Role 4 adds these elements to services.html - agree on them early):
//   #camp-list          - empty <div class="grid"> where your cards go
//   #camp-filter-age    - <select> with values: all, 6-9, 10-13, 14-18
//   #camp-filter-month  - <select> with values: all, nov, dec, apr, jun, jul, aug
//   #camp-count         - (optional) text like "Showing 3 of 6 camps"
//
// ----------------------------------------------------------------
// STEP 1 - The data
//   - Create a constant array named CAMPS (UPPER_SNAKE_CASE because it's fixed data)
//   - Each camp is an object with: name, minAge, maxAge, month, dates, price
//     Example shape (write your own camps - at least 5):
//       { name: 'Thanksgiving Break Camp', minAge: 6, maxAge: 12, month: 'nov',
//         dates: 'Mon-Wed, Nov 23-25', price: 109 }
//   - Make sure no camp is scheduled on a day the facility is closed
//
// STEP 2 - Build one card
//   - Write a function buildCampCard(camp) that returns an HTML string for one
//     <article class="card"> with the name, ages, dates, price and a
//     "Register" link to book.html?service=camp
//
// STEP 3 - Show the cards
//   - Write renderCamps(list): put every card into #camp-list with innerHTML
//   - If the list is empty, show a message like "No camps match those filters"
//   - Call renderCamps(CAMPS) once at the bottom so all camps show on page load
//
// STEP 4 - Filtering
//   - Write matchesAge(camp, ageGroup): "all" matches everything; otherwise split
//     "6-9" into 6 and 9 and check the camp's age range overlaps it
//   - Write filterCamps(): read both <select> values, use CAMPS.filter(...) to keep
//     camps that match the age AND the month, then call renderCamps with the result
//   - Add a "change" event listener on both <select>s that calls filterCamps
//
// Check: every age/month combination shows the right camps, and the empty
// message appears when nothing matches.
