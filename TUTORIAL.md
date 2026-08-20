# HAMIS Website Tutorial

This small site is built with plain HTML and CSS so it can be hosted easily on
`hamis.in` later.

## Files

- `index.html` contains the page content and section structure.
- `products.html` is the full product hub.
- `category.html` is one reusable category template.
- `product.html` is one reusable product-detail template.
- `assets/js/catalog.js` stores all category and product data in one place.
- `assets/js/site.js` renders the reusable product/category pages.
- `styles.css` contains all layout, colors, typography, and responsive behavior.
- `assets/` contains copied website-ready images from the original source files.

## How The Page Is Structured

The HTML is divided into clear sections:

1. `header` keeps the logo, navigation, and sales call button.
2. `.hero` is the first screen with the main marketing message.
3. `.category-strip` shows the main product categories.
4. `.showcase` displays featured product cards.
5. `.about` explains the brand and key selling points using editable text.
6. `.catalogue` links to the PDF catalogue.
7. `.contact` gives email and phone actions.

## How The CSS Works

The `:root` block defines reusable brand tokens like `--red`, `--black`, and
`--white`. This makes future color changes easier because you update the value
once and the whole website follows.

Large layouts use CSS Grid. For example, the hero has two columns on desktop:
text on the left and the catalogue image on the right. In the media queries,
those columns become one column on smaller screens.

## Mobile Responsive Layer

The mobile layout is controlled near the bottom of `styles.css` with media
queries.

- `@media (max-width: 980px)` starts the tablet layout.
- `@media (max-width: 640px)` creates the main phone layout.
- `@media (max-width: 380px)` tightens spacing for smaller phones.
- The landscape query helps short phone screens avoid an oversized sticky hero.

On mobile, the header becomes two rows: logo and call button on top, navigation
buttons below. The hero stacks into text first and catalogue image second. Cards
switch into a single column so product names and buttons stay readable.

The `Call Sales` header button uses `inline-flex` with `align-items: center`.
That keeps the text vertically centered on mobile, even when the button height
changes in smaller breakpoints.

## How To Edit Content

To change a heading or paragraph, edit the text directly in `index.html`.
For category or product copy, edit `assets/js/catalog.js`. This is easier than
editing many duplicated HTML files.

Example category link:

```html
category.html?category=football
```

Example product link:

```html
product.html?product=football-range
```

To change a product image, replace the `src` value:

```html
<img src="assets/products/football-ball.jpg" alt="HAMIS football" />
```

To change a color, edit the variable in `styles.css`:

```css
:root {
  --red: #ef111d;
}
```

## Hosting Later

For normal static hosting, upload these files and folders together:

- `index.html`
- all other `.html` pages
- `styles.css`
- `assets/`
- `HAMIS CATALOGO DESIGN FINAL.pdf`

Keep the folder paths the same so images and the catalogue link continue to
work.

## Hosting On GitHub Pages

This website can run directly from GitHub Pages because it is a static site:
HTML, CSS, JavaScript, images, and one PDF catalogue.

GitHub Pages is configured to publish from:

```text
Branch: main
Folder: /
```

The `.nojekyll` file tells GitHub Pages to serve the files exactly as they are,
without trying to process the site through Jekyll. That is useful for simple
static websites like this one.
