const modal = document.getElementById("productModal");
const closeBtn = document.querySelector(".close");

function openModal(product) {

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : "http://127.0.0.1:8000/api/products/" + product.image;

  document.getElementById("modalImg").src = imageUrl;
  document.getElementById("modalTitle").innerText = product.cloth;
  document.getElementById("modalBrand").innerText = product.category;
  document.getElementById("modalPrice").innerText = "₹ " + product.price;
  document.getElementById("modalDesc").innerText = product.description || "";

  modal.style.display = "block";
}

// ❌ close button
closeBtn.onclick = () => modal.style.display = "none";

// ❌ click outside
window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};