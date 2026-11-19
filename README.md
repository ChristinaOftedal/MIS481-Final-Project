# Brickyard Cages Website Redesign (MIS 481, Project 2)

Academic redesign concept of [The Brickyard Cages](https://www.brickyardcages.com/), an indoor baseball and softball batting cage facility in San Diego. **Not affiliated with The Brickyard Cages.** No real bookings, payments or personal data are collected.

**Live site:** (add Netlify URL)
**Design reference:** our team's Figma Make prototype
**Colors:** maroon, navy blue, baby blue, white and black

## How this repo is set up
The shared header, footer, colors and fonts are done. Every page has `TODO` comments saying what goes in each section, and every JavaScript file has step-by-step instructions. Each owner builds their own files on their own branch. See the team doc for roles, naming rules and deadlines.

## Pages
| Page | File | Owner |
| --- | --- | --- |
| Project overview | `index.html` | Role 1 |
| Home | `home.html` | Role 3 |
| The Dugout (about, coaches, FAQ) | `about.html` | Role 2 |
| Lessons & Camps (rates, calculator, camps) | `services.html` | Role 4 (camp cards: Role 1) |
| Pro Shop | `shop.html` | Role 2 |
| Book & Contact | `book.html` | Role 5 |

## Main technology enhancement
**Online booking flow** (demo mode) on `book.html`: validates the visitor's details and shows a confirmation, replacing the old "call to prepay & register" process.

## Interactive features (JavaScript)
- `js/booking.js` – online booking flow with validation (Role 5)
- `js/calculator.js` – price calculator (Role 4)
- `js/camps.js` – camp filter by age and month (Role 1)
- `js/faq.js` – FAQ accordion (Role 2)
- `js/shop.js` – product filter and cart counter (Role 2)
- `js/main.js` – mobile menu, sticky Book/Call bar, auto copyright year (Role 3)

## Team
| Role | Name | Branch |
| --- | --- | --- |
| Project manager / GitHub coordinator | Christina Oftedal | christina-overview-camps |
| Business analyst / UX researcher | | |
| UX/UI designer | | |
| Front-end developer | | |
| Content, AI & quality specialist | | |

## Credits
- Fonts: Inter and Oswald from Google Fonts
- Photos: (list your Unsplash or AI-generated image sources here)
- AI use is logged in `docs/ai-log.md`
