// booking.js - Role 5 (Content, AI & quality specialist)
// ONLINE BOOKING FLOW (demo mode) on book.html - our main technology enhancement.
// Nothing here is written yet - build it step by step. Nothing is ever sent or stored.
//
// Reserved IDs (you add these to book.html):
//   #booking-form          - the <form novalidate>
//   #booking-name, #booking-email, #booking-phone,
//   #booking-service, #booking-date, #booking-time   - the fields
//   #booking-confirmation  - hidden box shown after a valid request
//   Each field sits in a .form-group with a <label> and an empty .form-error <span>
//
// ----------------------------------------------------------------
// STEP 1 - Stop the real submit
//   - Add a "submit" listener on #booking-form
//   - First line inside it: event.preventDefault()   (demo mode - nothing is sent)
//
// STEP 2 - Validate
//   - Write validateBooking() that checks each field and returns true/false:
//       name at least 2 characters
//       email looks like an email (a simple regular expression is fine)
//       phone optional, but 10 digits if filled in
//       service, date and time are chosen
//   - Write showError(fieldId, message) that puts the message in that field's
//     .form-error and clearErrors() that empties them all
//
// STEP 3 - Confirm
//   - If valid: add "hidden" to the form, remove "hidden" from #booking-confirmation,
//     and show a message with the person's first name, service, date and time
//   - Add a "Make another request" button that resets the form and shows it again
//
// STEP 4 (nice to have)
//   - Pre-select the service from the link, e.g. book.html?service=cage
//     (new URLSearchParams(window.location.search).get('service'))
//   - Block past dates: set the date input's min to today
//
// Check: empty form, bad email, short phone, and a full valid request all behave
// correctly, with no Console errors.
