const categoryById = new Map(catalog.categories.map((item) => [item.id, item]));
const productById = new Map(catalog.products.map((item) => [item.id, item]));

function queryValue(name, fallback) {
  return new URLSearchParams(window.location.search).get(name) || fallback;
}

function categoryUrl(id) {
  return `category.html?category=${id}`;
}

function productUrl(id) {
  return `product.html?product=${id}`;
}

function card(item, href) {
  return `
    <a class="mini-card" href="${href}">
      <img src="${item.image}" alt="${item.imageAlt}" />
      <div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </div>
    </a>
  `;
}

function contactSection(title = "Need A Product Quote?") {
  return `
    <section class="contact" id="contact" aria-labelledby="contact-title">
      <div class="contact-copy">
        <h2 id="contact-title">${title}</h2>
        <p>Talk to HAMIS sales for bulk orders, team requirements, and availability.</p>
      </div>
      <div class="contact-list">
        <a href="mailto:hamisindia.in@gmail.com">hamisindia.in@gmail.com</a>
        <a href="mailto:info@hamis.in">info@hamis.in</a>
        <a href="tel:+911815142840">+91 181 514 2840</a>
        <a href="tel:+918360171817">+91 8360171817</a>
      </div>
    </section>
  `;
}

function renderProductsPage() {
  const root = document.querySelector("[data-page='products']");
  if (!root) return;

  document.title = "Products | HAMIS Sports Equipment";
  root.innerHTML = `
    <section class="page-hero">
      <div>
        <h1>Products <span>Catalogue</span></h1>
        <p>
          Browse HAMIS categories and featured product lines for match play,
          training, cricket, badminton, and fitness buyers.
        </p>
        <div class="page-hero-actions">
          <a class="button button-primary" href="#categories">View Categories</a>
          <a class="button button-secondary" href="index.html#contact">Contact Sales</a>
        </div>
      </div>
      <div class="page-hero-media">
        <img src="assets/source/catalogue-cover.png" alt="HAMIS sports catalogue" />
      </div>
    </section>
    <section class="page-section" id="categories">
      <h2>Product Categories</h2>
      <p>Choose a category to see the relevant product families.</p>
      <div class="category-list">
        ${catalog.categories.map((item) => card(item, categoryUrl(item.id))).join("")}
      </div>
    </section>
    <section class="related-band">
      <h2>Featured Products</h2>
      <div class="product-list">
        ${catalog.products.map((item) => card(item, productUrl(item.id))).join("")}
      </div>
    </section>
    ${contactSection()}
  `;
}

function renderCategoryPage() {
  const root = document.querySelector("[data-page='category']");
  if (!root) return;

  const category = categoryById.get(queryValue("category", "football"));
  if (!category) {
    window.location.replace("products.html");
    return;
  }

  const products = category.products.map((id) => productById.get(id)).filter(Boolean);
  const related = category.relatedCategories.map((id) => categoryById.get(id)).filter(Boolean);
  const ctaHref = category.ctaProduct
    ? productUrl(category.ctaProduct)
    : "index.html#contact";

  document.title = `${category.title} | HAMIS Sports Equipment`;
  root.innerHTML = `
    <section class="page-hero">
      <div>
        <h1>${category.title} <span>${category.subtitle}</span></h1>
        <p>${category.description}</p>
        <div class="page-hero-actions">
          <a class="button button-primary" href="${ctaHref}">${category.cta}</a>
          <a class="button button-secondary" href="products.html">All Products</a>
        </div>
      </div>
      <div class="page-hero-media">
        <img src="${category.image}" alt="${category.imageAlt}" />
      </div>
    </section>
    <section class="page-section">
      <h2>${category.title} Category</h2>
      <p>Browse HAMIS product families related to ${category.title.toLowerCase()}.</p>
      <div class="product-list">
        ${products.map((item) => card(item, productUrl(item.id))).join("")}
        ${related.map((item) => card(item, categoryUrl(item.id))).join("")}
      </div>
    </section>
  `;
}

function renderProductPage() {
  const root = document.querySelector("[data-page='product']");
  if (!root) return;

  const product = productById.get(queryValue("product", "football-range"));
  if (!product) {
    window.location.replace("products.html");
    return;
  }

  const category = categoryById.get(product.category);
  const specs = Object.entries(product.specs)
    .map(([label, value]) => `<div><strong>${label}</strong><span>${value}</span></div>`)
    .join("");

  document.title = `${product.title} | HAMIS Sports Equipment`;
  root.innerHTML = `
    <section class="detail-section">
      <div class="detail-media">
        <img src="${product.image}" alt="${product.imageAlt}" />
      </div>
      <div class="detail-copy">
        <h1 class="visually-hidden">${product.title}</h1>
        <h2>${product.title}</h2>
        <p>${product.description}</p>
        <div class="spec-list">${specs}</div>
        <div class="page-hero-actions">
          <a class="button button-primary" href="index.html#contact">Request Quote</a>
          <a class="button button-secondary" href="${categoryUrl(category.id)}">
            Back To ${category.title}
          </a>
        </div>
      </div>
    </section>
  `;
}

renderProductsPage();
renderCategoryPage();
renderProductPage();
