// shop.js - Role 2 (Business analyst)
// Pro Shop on shop.html. Keep it simple. Nothing here is written yet.
// Demo only: no real checkout or payment.
//
// Reserved IDs / classes (you add these to shop.html):
//   .chip           - category buttons, each with data-category="all", "bats", "gloves" ...
//   #product-list   - empty <div class="grid"> where product cards go
//   #cart-count     - text like "0 items"
//
// ----------------------------------------------------------------
// STEP 1 - The data
//   - Create a constant array named PRODUCTS; each product has name, category, price
//     (generic product names, not real brand names; at least 6 products)
//
// STEP 2 - Show products
//   - Write renderProducts(category): if category is "all" use every product,
//     otherwise PRODUCTS.filter(...) by category; build a card for each into
//     #product-list (name, category, price, an "Add to cart" button)
//   - Call renderProducts('all') on page load
//
// STEP 3 - Category buttons
//   - Add a click listener to each .chip that calls renderProducts with the
//     button's dataset.category, and moves the "active" class to that button
//
// STEP 4 - Cart counter
//   - Keep a variable itemsInCart = 0
//   - Because the buttons are re-created every time, listen for clicks on
//     #product-list and check event.target.closest('.add-to-cart')
//   - Add 1 and update #cart-count
//
// Check: each category shows the right products, and the counter goes up.
