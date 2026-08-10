# HTML & CSS Task

## Files
- `index.html` – Page markup
- `style.css` – Styling (linked externally, no inline CSS, no Bootstrap)

## What this covers
1. `index.html` and `style.css` created and linked via `<link rel="stylesheet" href="style.css">`.
2. Body background color set (`coral`).
3. Three heading tags (`h1`, `h2`, `h4`) share `class="head"`.
4. All `.head` elements get dark blue text.
5. The 2nd heading (`h2`) has `id="bglime"` giving it a lime background.
6. The 2nd heading's text is overridden to red via the more specific `#bglime.head` selector.
7. Three `<p>` tags with no id/class, styled purely with the `p` element selector (white text).
8. The 2nd paragraph has `id="para"` and green text.
9. The word "paragraph" inside the 3rd paragraph is wrapped in `<span class="big-black">` for black, larger text.
10. Two lists:
    - An unordered list with "Click here" links styled using `a:nth-of-type()` (no inline CSS, no id/class on the `a` tags).
    - An ordered list styled using `li:nth-child()` (no id/class) for the blue and red list items.

## How to run
Open `index.html` in any browser (no build step, no Bootstrap — plain HTML/CSS only).







<!-- Box Model -->

# Task3: CSS - Units, Box Models, Fonts

## Files
- `index.html` - document structure with an image container and button
- `style.css` - external stylesheet (linked via `<link>`, no inline CSS)

## Structure
1. **HTML Setup** - proper `<!DOCTYPE html>`, `<head>` with title and linked
   stylesheet.
2. **Body Content** - a `.image-container` div holding an `<img>` and a
   `<button class="cta-btn">Click Me</button>`.
3. **CSS Styling**
   - `.image-container` uses `width: 50%` with `margin: 10vh 25%`, giving
     equal 25% spacing on the left/right and 10% (viewport-height based)
     spacing on the top/bottom.
   - Button has a left-to-right gradient background (`orange -> green`) with
     custom font size, weight, and letter-spacing.
   - `box-sizing: border-box` applied globally so padding/border never add
     extra width/height.
   - Image and button heights are set with `vh` (viewport) units and kept
     within the viewport so the page does not scroll.
4. **Final Steps**
   - All tags are properly closed.
   - No `flex` used anywhere.
   - No `overflow: hidden` used.
   - No `position: relative` or `position: absolute` used.
   - `index.html` and `style.css` are in the same directory.

## How to run
Open `index.html` directly in a browser (requires an internet connection to
load the sample image from Unsplash). No build step or dependencies needed.
