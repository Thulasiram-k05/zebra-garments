
const container = document.getElementById("productContainer");

let allProducts = [];
let selectedGender = "All";
let selectedCategory = "All";

/* ===== FETCH PRODUCTS ===== */
async function fetchProducts() {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/products/");
    const data = await res.json();

    allProducts = data;
    applyFilters();

  } catch (error) {
    console.error(error);
    container.innerHTML = "Error loading products";
  }
}

/* ===== MAIN FILTER FUNCTION ===== */
function applyFilters() {
  let filtered = allProducts;

  if (selectedGender !== "All") {
    filtered = filtered.filter(p =>
      p.gender.toLowerCase() === selectedGender.toLowerCase()
    );
  }

  if (selectedCategory !== "All") {
    filtered = filtered.filter(p =>
      p.category.toLowerCase() === selectedCategory.toLowerCase()
    );
  }

  renderProducts(filtered);
}

/* ===== GENDER BUTTON ===== */
function setGender(gender) {
  selectedGender = gender;
  applyFilters();
}

/* ===== RENDER PRODUCTS ===== */
function renderProducts(products) {
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>No products found</p>";
    return;
  }

  products.forEach(product => {

    const imageUrl = product.image.startsWith("http")
      ? product.image
      : "http://127.0.0.1:8000" + product.image;

    const discount = product.old_price
      ? Math.round(((product.old_price - product.price) / product.old_price) * 100)
      : 0;

    const card = document.createElement("div");
    card.classList.add("card");

    // 🔥 CLICK → OPEN POPUP WITH DATA
    card.addEventListener("click", () => {
      openPopup(product);
    });

    card.innerHTML = `
      <img src="${imageUrl}">
      <div class="wishlist">♡</div>
      <div class="details">
        <div class="brand">${product.cloth}</div>
        <div class="title">${product.description || ""}</div>
        <div class="price">
          ₹ ${product.price}
          ${product.old_price ? `<span class="old-price">₹ ${product.old_price}</span>` : ""}
          ${discount ? `<span class="discount">${discount}% OFF</span>` : ""}
        </div>
        <div class="delivery">🚚 Express Delivery</div>
      </div>
    `;

    container.appendChild(card);
  });
}

/* ===== OPEN POPUP (MAIN LOGIC) ===== */
function openPopup(product) {

  const popup = document.querySelector(".popup");

  const image = popup.querySelector(".image-section img");
  const title = popup.querySelector("h2");
  const sub = popup.querySelector(".sub");
  const price = popup.querySelector(".price");
  const desc = popup.querySelector(".desc");

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : "http://127.0.0.1:8000" + product.image;

  // 🔥 SET BACKEND DATA
  image.src = imageUrl;
  title.textContent = product.cloth;
  sub.textContent = product.gender + " • " + product.category;
  price.textContent = "₹ " + product.price;
  desc.textContent = product.description || "No description";

  // SHOW POPUP
  popup.style.display = "flex";
}

/* ===== CATEGORY FILTER ===== */
const filters = document.querySelectorAll(".filter-item");
const contents = document.querySelectorAll(".filter-content");

filters.forEach((item, index) => {
  item.addEventListener("click", () => {

    selectedCategory = item.getAttribute("data-category");
    applyFilters();

    const arrow = item.querySelector(".arrow");
    const isOpen = contents[index].classList.contains("active");

    contents.forEach(c => c.classList.remove("active"));
    document.querySelectorAll(".arrow").forEach(a => a.classList.remove("rotate"));

    if (!isOpen) {
      contents[index].classList.add("active");
      arrow.classList.add("rotate");
    }
  });
});

/* ===== GLOBAL CLICK EVENTS ===== */
document.addEventListener("click", function (e) {

  /* 🔥 CLOSE POPUP */
  if (e.target.classList.contains("close-btn")) {
    document.querySelector(".popup").style.display = "none";
  }

  /* 🔥 MORE BUTTON */
  if (e.target.classList.contains("more-btn")) {

    const parent = e.target.closest(".sizes");
    const hiddenRow = parent.querySelector(".hidden-row");

    const isOpen = hiddenRow.style.display === "flex";
    hiddenRow.style.display = isOpen ? "none" : "flex";

    e.target.textContent = isOpen ? "+ More" : "Show Less";
  }

  /* 🔥 SIZE CLICK */
  if (e.target.classList.contains("size")) {

    const parent = e.target.closest(".sizes");

    parent.querySelectorAll(".size").forEach(s => {
      s.classList.remove("active");
    });

    e.target.classList.add("active");
  }

  /* 🔥 WISHLIST */
  if (e.target.classList.contains("wishlist")) {
    e.target.classList.toggle("active");
    e.target.textContent = e.target.classList.contains("active") ? "♥" : "♡";
  }

});

/* ===== LOAD ===== */
fetchProducts();