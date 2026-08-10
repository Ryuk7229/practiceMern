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
