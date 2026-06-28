let onCart = document.querySelectorAll(".card");

onCart.forEach((cart) => {
  cart.addEventListener("click", openCart);
});
/* ---------- DARK THEME ---------- */




const root = document.documentElement; // the <html> element
const STORAGE_KEY = 'purepore-theme';
 
// Step 1: On page load, check if a theme was saved previously.
const savedTheme = localStorage.getItem(STORAGE_KEY);
if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}
 
// Step 2: A helper function that does the actual switching.
function setTheme(theme) {
  root.setAttribute('data-theme', theme);   // updates the CSS variables
  localStorage.setItem(STORAGE_KEY, theme); // remembers the choice
  updateToggleVisuals(theme);
}
 
function getCurrentTheme() {
  return root.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
}
 
function toggleTheme() {
  const next = getCurrentTheme() === 'dark' ? 'light' : 'dark';
  setTheme(next);
}
 

function updateToggleVisuals(theme) {
  const iconBtn = document.getElementById('theme-toggle-icon');
  const textBtn = document.getElementById('theme-toggle-text');
 
  if (iconBtn) {
    iconBtn.textContent = theme === 'dark' ? '🌙' : '☀️';
  }
  if (textBtn) {
    textBtn.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
  }
 
}
 

const iconToggle = document.getElementById('theme-toggle-icon');
const switchToggle = document.getElementById('theme-toggle-switch');
const textToggle = document.getElementById('theme-toggle-text');
 
if (iconToggle) iconToggle.addEventListener('click', toggleTheme);
if (switchToggle) switchToggle.addEventListener('click', toggleTheme);
if (textToggle) textToggle.addEventListener('click', toggleTheme);
 

updateToggleVisuals(getCurrentTheme());
 
/* ---------- CART ---------- */

const cartToggle = document.getElementById("cart");
const cartDrawer = document.getElementById("cart-drawer");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartClose = document.getElementById("cart-close");

function openCart() {
  cartDrawer.classList.add("active");
  cartBackdrop.classList.add("active");
  document.body.classList.add("cart-open");
}

function closeCart() {
  cartDrawer.classList.remove("active");
  cartBackdrop.classList.remove("active");
  document.body.classList.remove("cart-open");
}

if (cartToggle) {
  cartToggle.addEventListener("click", function (e) {
    e.preventDefault();
    openCart();
  });
}

if (cartClose) {
  cartClose.addEventListener("click", closeCart);
}

if (cartBackdrop) {
  cartBackdrop.addEventListener("click", closeCart);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeCart();
});

/* Quantity +/- buttons (UI only, no live total recalculation yet) */
document.querySelectorAll(".qty-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const qtyValue = btn.parentElement.querySelector(".qty-value");
    let qty = parseInt(qtyValue.textContent, 10);
    if (btn.classList.contains("plus")) {
      qty++;
    } else if (btn.classList.contains("minus") && qty > 1) {
      qty--;
    }
    qtyValue.textContent = qty;
  });
});

/* Remove item buttons */
document.querySelectorAll(".remove-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    btn.closest(".cart-item").remove();
  });
});
