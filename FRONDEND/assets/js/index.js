const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dotsNav = document.querySelector('.carousel-dots');

let currentIndex = 0;
let autoPlayInterval;

// Create dots dynamically

slides.forEach((_, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  if (index === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(index));
  dotsNav.appendChild(dot);
});

const dots = Array.from(dotsNav.children);

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function goToSlide(index) {
  currentIndex = (index + slides.length) % slides.length;
  updateCarousel();
  resetAutoPlay();
}

function nextSlide() {
  goToSlide(currentIndex + 1);
}

function prevSlide() {
  goToSlide(currentIndex - 1);
}

function startAutoPlay() {
  autoPlayInterval = setInterval(nextSlide, 3000);
}

function resetAutoPlay() {
  clearInterval(autoPlayInterval);
  startAutoPlay();
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

startAutoPlay();

// ------------------------------heading 2------------------------------------------------------


const container = document.getElementById("productContainer");

let allProducts = []; // store globally

// ✅ Render Function
function renderProducts(products) {
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "No products found";
    return;
  }

  products.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("addd1");

    const imageUrl = product.image.startsWith("http")
      ? product.image
      : "http://127.0.0.1:8000" + product.image;

    div.innerHTML = `
      <img src="${imageUrl}" class="img-thumbnail" alt="image">
      <p class="aria">${product.gender}</p>
    `;

    // ✅ Click Event
    div.addEventListener("click", () => {
      alert("Category: " + product.gender);
    });

    container.appendChild(div);
  });
}

// ✅ Filter Function
function filterProducts(category) {
  if (category === "ALL") {
    renderProducts(allProducts);
  } else {
    const filtered = allProducts.filter(
      p => p.gender.toUpperCase() === category
    );
    renderProducts(filtered);
  }
}

// ✅ Fetch from Django API
function loadProducts() {
  container.innerHTML = "Loading...";

  fetch("http://127.0.0.1:8000/api/products/")
    .then(res => res.json())
    .then(data => {
      allProducts = data;
      renderProducts(allProducts);
    })
    .catch(error => {
      console.error("Error:", error);
      container.innerHTML = "Failed to load data";
    });
}

// ✅ Start App
loadProducts();
// --------------------------------------------------------------------

// Cards Script

const data = [
  {
    title: "Party Perfect",
    desc: "Dress-up styles for modern women",
    img: "https://i.pinimg.com/originals/a5/cb/fe/a5cbfe3fcc1932ba364ef3cf75313415.png"
  },
  {
    title: "Varsity Vibe",
    desc: "Classic layers meets modern street",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930"
  },
  {
    title: "Wild Wonder",
    desc: "Playful styles inspired by nature",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930"
  },
  {
    title: "Modern Cozy",
    desc: "Elevated sweatshirts for effortless style",
    img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930"
  }
];

const cards = document.getElementById("cards");

data.forEach(item => {
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <img src="${item.img}">
    <div class="card-info">
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
      <span>SHOP NOW</span>
    </div>
  `;
  cards.appendChild(div);
});

// -----------------------------------------------------------


// Carousel Images


document.addEventListener("DOMContentLoaded", () => {

  const carouselData = [
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },
    { img: "https://img.lovepik.com/photo/48016/7142.jpg_wh860.jpg" },
    { img: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2016/12/attachment_79338592-e1513616794692.jpg?auto=format&q=60&fit=max&w=930" },

  ];
  const carousel = document.getElementById("carousel");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");

  rightBtn.addEventListener("click", () => {
    index++;
    update();

    if (index === carouselCards.length - clones) {
      setTimeout(() => {
        index = clones;
        update(false);
      }, 460);
    }
  });

  leftBtn.addEventListener("click", () => {
    index--;
    update()

    if (index === clones - 1) {
      setTimeout(() => {
        index = carouselCards.length - clones * 2;
        update(false);
      }, 460);
    }
  });

  if (!leftBtn || !rightBtn) {
    console.error("❌ Navigation buttons not found");
  }


  if (!carousel) {
    console.error("❌ #carousel element not found");
    return;
  }

  const visible = 5;
  const clones = 2;
  let index = clones;

  function createCard(src) {
    const card = document.createElement("div");
    card.className = "card2";
    card.innerHTML =
      `<img src="${src}">
      <button class="shop-btn">🛍 Shop All</button>`;
    return card;
  }

  const items = [...carouselData];

  // prepend clones
  items.slice(-clones).forEach(i => carousel.appendChild(createCard(i.img)));

  // main items
  items.forEach(i => carousel.appendChild(createCard(i.img)));

  // append clones
  items.slice(0, clones).forEach(i => carousel.appendChild(createCard(i.img)));

  const carouselCards = [...document.querySelectorAll(".card2")];

  function update(animate = true) {
    carousel.style.transition = animate ? "transform 0.45s ease" : "none";

    carouselCards.forEach((card, i) => {
      card.classList.remove("small", "medium", "large");
      card.style.display = Math.abs(i - index) <= 2 ? "block" : "none";

      if (i === index) card.classList.add("large");
      else if (i === index - 1 || i === index + 1) card.classList.add("medium");
      else if (i === index - 2 || i === index + 2) card.classList.add("small");
    });

    const active = carouselCards[index];
    const wrap = document.querySelector(".carousel-wrapper");

    if (!active || !wrap) return;

    const offset =
      active.offsetLeft -
      wrap.offsetWidth / 2 +
      active.offsetWidth / 2;

    carousel.style.transform = `translateX(-${offset}px)`;
  }

  update(false);
});


// --------------------------------------------------------------------------------

const slider3 = document.getElementById("slider3");
const leftBtn3 = document.querySelector(".left3");
const rightBtn3 = document.querySelector(".right3");

const products3 = [
  { img: "https://picsum.photos/400/500?2", brand: "ALLEN SOLLY", title: "Denim Shirt", price: "₹2099" },
  { img: "https://picsum.photos/400/500?3", brand: "ALLEN SOLLY", title: "Joggers", price: "₹1699" },
  { img: "https://picsum.photos/400/500?1", brand: "ALLEN SOLLY", title: "Casual Jacket", price: "₹1699" },
  { img: "https://picsum.photos/400/500?2", brand: "ALLEN SOLLY", title: "Denim Shirt", price: "₹2099" },
  { img: "https://picsum.photos/400/500?3", brand: "ALLEN SOLLY", title: "Joggers", price: "₹1699" },
  { img: "https://picsum.photos/400/500?1", brand: "ALLEN SOLLY", title: "Casual Jacket", price: "₹1699" },
  { img: "https://picsum.photos/400/500?2", brand: "ALLEN SOLLY", title: "Denim Shirt", price: "₹2099" },
  { img: "https://picsum.photos/400/500?3", brand: "ALLEN SOLLY", title: "Joggers", price: "₹1699" },
  { img: "https://picsum.photos/400/500?1", brand: "ALLEN SOLLY", title: "Casual Jacket", price: "₹1699" },
  { img: "https://picsum.photos/400/500?2", brand: "ALLEN SOLLY", title: "Denim Shirt", price: "₹2099" },
  { img: "https://picsum.photos/400/500?3", brand: "ALLEN SOLLY", title: "Joggers", price: "₹1699" },
  { img: "https://picsum.photos/400/500?1", brand: "ALLEN SOLLY", title: "Casual Jacket", price: "₹1699" },
  { img: "https://picsum.photos/400/500?4", brand: "ALLEN SOLLY", title: "Puffer Jacket", price: "₹2699" },
  { img: "https://picsum.photos/400/500?5", brand: "ALLEN SOLLY", title: "Cargo Jeans", price: "₹2499" }
];

const visible3 = 4;
let index3 = visible3;

function createCard(p) {
  return `
    <div class="card3">
      <img src="${p.img}">
      <div class="icons3">
        <div class="icon3 wishlist3"><i class="fa fa-heart"></i></div>
        <div class="icon3 cart3"><i class="fa fa-shopping-cart"></i></div>
      </div>
      <div class="brand3">${p.brand}</div>
      <div class="title3">${p.title}</div>
      <div class="price3">${p.price}</div>
    </div>
  `;
}

const items3 = [...products3];
items3.slice(-visible3).forEach(p => slider3.innerHTML += createCard(p));
items3.forEach(p => slider3.innerHTML += createCard(p));
items3.slice(0, visible3).forEach(p => slider3.innerHTML += createCard(p));

const cards3 = document.querySelectorAll(".card3");

function update(animate = true) {
  slider3.style.transition = animate ? "transform 0.45s ease" : "none";
  slider3.style.transform = `translateX(-${index3 * (cards3[0].offsetWidth + 20)}px)`;
}

rightBtn3.onclick = () => {
  index3++;
  update();
  if (index3 === cards3.length - visible3) {
    setTimeout(() => {
      index3 = visible3;
      update(false);
    }, 460);
  }
};

leftBtn3.onclick = () => {
  index3--;
  update();
  if (index3 === visible3 - 1) {
    setTimeout(() => {
      index3 = cards3.length - visible3 * 2 - 1;
      update(false);
    }, 460);
  }
};

update(false);


// --------------------------------------------------------------------

const slider4 = document.getElementById("slider4");
const leftBtn4 = document.querySelector(".left4");
const rightBtn4 = document.querySelector(".right4");

const products4 = [
  { img: "https://picsum.photos/400/500?2", brand: "ALLEN SOLLY", title: "Denim Shirt", price: "₹2099" },
  { img: "https://picsum.photos/400/500?3", brand: "ALLEN SOLLY", title: "Joggers", price: "₹1699" },
  { img: "https://picsum.photos/400/500?1", brand: "ALLEN SOLLY", title: "Casual Jacket", price: "₹1699" },
  { img: "https://picsum.photos/400/500?4", brand: "ALLEN SOLLY", title: "Puffer Jacket", price: "₹2699" },
  { img: "https://picsum.photos/400/500?5", brand: "ALLEN SOLLY", title: "Cargo Jeans", price: "₹2499" }
];

const visible4 = 4;
let index4 = visible4;

function createCard4(p) {
  return `
    <div class="card4">
      <img src="${p.img}">
      <div class="icons4">
        <div class="icon4 wishlist4"><i class="fa fa-heart"></i></div>
        <div class="icon4 cart4"><i class="fa fa-shopping-cart"></i></div>
      </div>
      <div class="brand4">${p.brand}</div>
      <div class="title4">${p.title}</div>
      <div class="price4">${p.price}</div>
    </div>
  `;
}

const items4 = [...products4];
items4.slice(-visible4).forEach(p => slider4.innerHTML += createCard4(p));
items4.forEach(p => slider4.innerHTML += createCard4(p));
items4.slice(0, visible4).forEach(p => slider4.innerHTML += createCard4(p));

const cards4 = document.querySelectorAll(".card4");

function update4(animate = true) {
  slider4.style.transition = animate ? "transform 0.45s ease" : "none";
  slider4.style.transform =
    `translateX(-${index4 * (cards4[0].offsetWidth + 20)}px)`;
}

rightBtn4.onclick = () => {
  index4++;
  update4();
  if (index4 === cards4.length - visible4) {
    setTimeout(() => {
      index4 = visible4;
      update4(false);
    }, 460);
  }
};

leftBtn4.onclick = () => {
  index4--;
  update4();
  if (index4 === visible4 - 1) {
    setTimeout(() => {
      index4 = cards4.length - visible4 * 2 - 1;
      update4(false);
    }, 460);
  }
};

update4(false);

// ------------------------------------------------------------


// ---------------------------------------------------------------------------
