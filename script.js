// Products Data with Feature Vectors for Cosine Similarity
// Vector Schema: [Dry, Oily, Combination, Sensitive, Matte, Dewy, Natural]
const products = [
  {
    id: 1,
    name: "Aura Silk Poreless Primer",
    category: "primers",
    price: 1200,
    discount: 12,
    rating: 4.8,
    reviews: 142,
    image: "https://tse3.mm.bing.net/th?id=OIP.skQYSafgXEyAid_XVD6yogHaFj&pid=Api&P=0&h=180",
    description: "An ultra-velvety face primer that preps skin, blurs the look of pores, and locks in makeup for a flawless matte finish that lasts all day.",
    skinType: "All Skin Types",
    finish: "Soft Matte",
    size: "30ml",
    brand: "AURA",
    ingredients: "Silicone, Vitamin E, Dimethicone Crosspolymer",
    // Vector: [Dry, Oily, Combination, Sensitive, Matte, Dewy, Natural, AURA, Maybelline, L'Oreal, MAC, Sephora, Clinique]
    features: [0.5, 1.0, 0.8, 0.6, 1.0, 0.0, 0.3, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
  },
  {
    id: 2,
    name: "Glass Glow Hydrating Primer",
    category: "primers",
    price: 750,
    discount: 12,
    rating: 4.6,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop",
    description: "Infused with hyaluronic acid and rose water, this lightweight primer delivers deep hydration while leaving a dewy, glass-like radiance.",
    skinType: "Dry & Normal Skin",
    finish: "Dewy / Radiant",
    size: "30ml",
    brand: "AURA",
    ingredients: "Hyaluronic Acid, Rose Water, Glycerin",
    features: [1.0, 0.2, 0.5, 0.9, 0.0, 1.0, 0.5, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
  },
  {
    id: 3,
    name: "Liquid Radiance Foundation",
    category: "foundations",
    price: 3500,
    discount: 22,
    rating: 4.9,
    reviews: 218,
    image: "https://tse4.mm.bing.net/th?id=OIP.2d8RgGgFQIogZJSWtZcDjgHaFk&pid=Api&P=0&h=180",
    description: "A breathable, medium-to-full coverage foundation that mimics the natural behavior of beautiful skin, with 24-hour hydration and weightless wear.",
    skinType: "Normal, Dry, Combination",
    finish: "Natural Satin",
    size: "35ml",
    brand: "Maybelline",
    ingredients: "Water, Cyclopentasiloxane, Glycerin, Niacinamide",
    features: [0.8, 0.5, 0.9, 0.7, 0.2, 0.8, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0]
  },
  {
    id: 4,
    name: "Velvet Matte Full-Coverage Foundation",
    category: "foundations",
    price: 1800,
    discount: 22,
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=600&auto=format&fit=crop",
    description: "A high-pigment, transfer-proof liquid foundation that completely covers imperfections while controlling shine with a comfortable velvet feel.",
    skinType: "Oily & Combination",
    finish: "Ultra Matte",
    size: "30ml",
    brand: "L'Oreal",
    ingredients: "Water, Dimethicone, Silica, Talc, Salicylic Acid",
    features: [0.2, 1.0, 0.8, 0.5, 1.0, 0.0, 0.2, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0]
  },
  {
    id: 5,
    name: "Translucent Soft Focus Powder",
    category: "setting powders",
    price: 950,
    discount: 22,
    rating: 4.8,
    reviews: 320,
    image: "https://tse3.mm.bing.net/th?id=OIP.lymezD4EX2C87h3rSDzxJwHaFn&pid=Api&P=0&h=180",
    description: "Extremely finely-milled, weightless loose powder that sets makeup invisibly, absorbs excess sebum, and diffuses light to blur imperfections.",
    skinType: "All Skin Types",
    finish: "Sheer Matte",
    size: "20g",
    brand: "MAC",
    ingredients: "Talc, Silica, Zea Mays Starch, Tocopheryl Acetate",
    features: [0.5, 0.9, 0.8, 0.8, 0.9, 0.1, 0.5, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0]
  },
  {
    id: 6,
    name: "Micro-Blur HD Finishing Powder",
    category: "setting powders",
    price: 1350,
    discount: 22,
    rating: 4.5,
    reviews: 74,
    image: "https://images.unsplash.com/photo-1590156546746-c238b385a85b?q=80&w=600&auto=format&fit=crop",
    description: "An HD photo-ready finishing powder that creates an airbrushed effect, locking makeup down while keeping flashback-free in any lighting.",
    skinType: "Combination & Oily",
    finish: "Invisible HD Matte",
    size: "15g",
    brand: "Sephora",
    ingredients: "Silica, Dimethicone, Vinyl Dimethicone Crosspolymer",
    features: [0.3, 1.0, 0.9, 0.6, 1.0, 0.0, 0.3, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]
  },
  {
    id: 7,
    name: "Luminous Silk Liquid Blush",
    category: "blushes",
    price: 1600,
    discount: 10,
    rating: 4.9,
    reviews: 185,
    image: "https://tse2.mm.bing.net/th?id=OIP.Ahj-XtdvOpdmIPpWoaBqjwHaGs&pid=Api&P=0&h=180",
    description: "A lightweight liquid blush that melts effortlessly into cheeks, imparting a natural-looking, skin-kissed flush of color with a second-skin finish.",
    skinType: "All Skin Types",
    finish: "Natural Glow",
    size: "15ml",
    brand: "MAC",
    ingredients: "Water, Caprylic Triglyceride, Jojoba Seed Oil, Mica",
    features: [0.9, 0.4, 0.7, 0.9, 0.1, 0.9, 0.8, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0]
  },
  {
    id: 8,
    name: "Monochromatic Powder Blush Duo",
    category: "blushes",
    price: 2800,
    discount: 10,
    rating: 4.6,
    reviews: 95,
    image: "https://images.unsplash.com/photo-1631730359575-38e4755d772b?q=80&w=600&auto=format&fit=crop",
    description: "A luxury blush duo containing a rich matte shade and a soft shimmering shade to blend together or apply individually for customized color.",
    skinType: "All Skin Types",
    finish: "Matte & Shimmer",
    size: "8.5g",
    brand: "Clinique",
    ingredients: "Talc, Zinc Stearate, Mica, Octyldodecyl Stearoyl Stearate",
    features: [0.5, 0.8, 0.8, 0.7, 0.7, 0.3, 0.6, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0]
  },
  {
    id: 9,
    name: "Stardust Nude Eyeshadow Palette",
    category: "eye shadow palettes",
    price: 3800,
    discount: 32,
    rating: 4.9,
    reviews: 412,
    image: "https://tse2.mm.bing.net/th?id=OIP.TfHQS6FPRP7HHCIDs1ZgnwHaHa&pid=Api&P=0&h=180",
    description: "A highly acclaimed palette featuring 12 professional-grade pigments in velvety mattes, buttery shimmers, and metallic textures for endless day-to-night looks.",
    skinType: "Sensitive Skin Safe",
    finish: "Multiple Finishes",
    size: "18g",
    brand: "MAC",
    ingredients: "Mica, Talc, Zinc Stearate, Shea Butter, Silica",
    features: [0.7, 0.7, 0.7, 0.9, 0.6, 0.4, 0.8, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0]
  },
  {
    id: 10,
    name: "Rose Quartz Shimmer Palette",
    category: "eye shadow palettes",
    price: 2400,
    discount: 32,
    rating: 4.7,
    reviews: 130,
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=600&auto=format&fit=crop",
    description: "Indulge in romantic rose tones and champagne glitters. Formulated for rich single-swipe color payoff and zero fall-out.",
    skinType: "All Skin Types",
    finish: "Glitter & Metallic",
    size: "12g",
    brand: "L'Oreal",
    ingredients: "Mica, Mineral Oil, Magnesium Stearate, Synthetic Wax",
    features: [0.6, 0.6, 0.6, 0.8, 0.2, 0.8, 0.5, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0]
  },
  {
    id: 11,
    name: "Liquid Prism Glow Highlighter",
    category: "highlighters",
    price: 1400,
    discount: 52,
    rating: 4.9,
    reviews: 198,
    image: "https://tse4.mm.bing.net/th?id=OIP.gRLSXhCDDxBoXoPnI0ZajgHaFj&pid=Api&P=0&h=180",
    description: "An extraordinary liquid highlighter that reflects light multidimensionally. Mix with foundation or dab on high points for high-impact radiance.",
    skinType: "All Skin Types",
    finish: "Intense Strobing Glow",
    size: "20ml",
    brand: "AURA",
    ingredients: "Water, Glycerin, Mica, Squalane, Tin Oxide",
    features: [0.8, 0.4, 0.6, 0.8, 0.0, 1.0, 0.4, 1.0, 0.0, 0.0, 0.0, 0.0, 0.0]
  },
  {
    id: 12,
    name: "Celestial Shimmer Pressed Highlighter",
    category: "highlighters",
    price: 2200,
    discount: 52,
    rating: 4.8,
    reviews: 240,
    image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop",
    description: "A silky pressed powder highlighter that glides onto skin like silk. Contains light-refracting pearls for a natural luminous glow without looking chalky.",
    skinType: "All Skin Types",
    finish: "Soft Shimmer Glow",
    size: "9g",
    brand: "Sephora",
    ingredients: "Mica, Talc, Magnesium Myristate, Caprylic Triglyceride",
    features: [0.6, 0.7, 0.7, 0.8, 0.1, 0.7, 0.7, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0]
  }
];

// App State
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let activeCategory = "all";
let searchQuery = "";
let currentSort = "default";

// DOM Elements
const productsGrid = document.getElementById("products-grid");
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".filter-btn");
const sortSelect = document.getElementById("sort-select");
const cartTrigger = document.getElementById("cart-trigger");
const cartClose = document.getElementById("cart-close");
const cartDrawer = document.getElementById("cart-drawer");
const cartBackdrop = document.getElementById("cart-backdrop");
const cartItemsContainer = document.getElementById("cart-items");
const cartCountElement = document.getElementById("cart-count");
const cartSubtotalElement = document.getElementById("cart-subtotal");
const cartSavingsElement = document.getElementById("cart-savings");
const cartTotalElement = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const themeToggleBtn = document.getElementById("theme-toggle");
const quickViewModal = document.getElementById("quick-view-modal");
const modalCloseBtn = document.getElementById("modal-close");
const toastContainer = document.getElementById("toast-container");
const contactForm = document.getElementById("contact-form");
const newsletterForm = document.getElementById("newsletter-form");
const navTabs = document.querySelectorAll(".nav-tab");
const tabContents = document.querySelectorAll(".tab-content");

// Helper: Calculate Discounted Price
function getDiscountedPrice(price, discount) {
  return Math.round(price * (1 - discount / 100));
}

// Helper: Format Currency (INR)
function formatCurrency(amount) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(amount);
}

// Notification System
function showToast(message, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <i class="fa-solid ${type === 'success' ? 'fa-circle-check' : 'fa-circle-info'}"></i>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  // Auto remove toast
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(50px)";
    setTimeout(() => toast.remove(), 400);
  }, 3000);
}

// Tab Routing Handler
function initTabs() {
  navTabs.forEach(tab => {
    tab.addEventListener("click", (e) => {
      // If it's a normal link like About Us/Contact, don't prevent default
      const targetTab = tab.getAttribute("data-tab");
      if (!targetTab) return;

      e.preventDefault();

      // Deactivate all tabs
      navTabs.forEach(t => t.classList.remove("active"));
      tabContents.forEach(tc => tc.classList.remove("active"));

      // Activate selected
      tab.classList.add("active");
      const targetContent = document.getElementById(`${targetTab}-tab`);
      if (targetContent) {
        targetContent.classList.add("active");
      }

      // Smooth scroll to top of content
      window.scrollTo({
        top: document.getElementById("hero-section").offsetHeight - 40,
        behavior: "smooth"
      });
    });
  });
}

// Initial Theme Setup
function initTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`Switched to ${newTheme === 'dark' ? 'Luxury Dark' : 'Clean Light'} Mode`, "success");
}

function updateThemeIcon(theme) {
  const icon = themeToggleBtn.querySelector("i");
  if (theme === "light") {
    icon.className = "fa-solid fa-moon";
  } else {
    icon.className = "fa-solid fa-sun";
  }
}

// Render Product Catalog
function renderProducts() {
  // Filter
  let filtered = products.filter(p => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  if (currentSort === "price-low") {
    filtered.sort((a, b) => getDiscountedPrice(a.price, a.discount) - getDiscountedPrice(b.price, b.discount));
  } else if (currentSort === "price-high") {
    filtered.sort((a, b) => getDiscountedPrice(b.price, b.discount) - getDiscountedPrice(a.price, a.discount));
  } else if (currentSort === "discount-high") {
    filtered.sort((a, b) => b.discount - a.discount);
  } else if (currentSort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  // Clear Grid
  productsGrid.innerHTML = "";

  if (filtered.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-magnifying-glass"></i>
        <h3>No Products Found</h3>
        <p>Try checking your spelling, selecting another category, or resetting filters.</p>
      </div>
    `;
    return;
  }

  // Generate Cards
  filtered.forEach(p => {
    const currentPrice = getDiscountedPrice(p.price, p.discount);
    const originalPriceFormatted = formatCurrency(p.price);
    const currentPriceFormatted = formatCurrency(currentPrice);

    const card = document.createElement("div");
    card.className = "product-card";
    card.setAttribute("data-id", p.id);

    card.innerHTML = `
      <div class="product-img-container">
        <span class="discount-badge">${p.discount}% OFF</span>
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        <div class="product-card-overlay">
          <button class="overlay-btn view-details" title="Quick View">
            <i class="fa-solid fa-eye"></i>
          </button>
          <button class="overlay-btn add-to-cart" title="Add to Cart">
            <i class="fa-solid fa-bag-shopping"></i>
          </button>
        </div>
      </div>
      <div class="product-details">
        <span class="product-category">${p.category}</span>
        <h3 class="product-name">${p.name}</h3>
        <div class="product-rating">
          <i class="fa-solid fa-star"></i>
          <span>${p.rating} (${p.reviews} reviews)</span>
        </div>
        <div class="product-price-box">
          <span class="current-price">${currentPriceFormatted}</span>
          <span class="original-price">${originalPriceFormatted}</span>
        </div>
      </div>
    `;

    // Event Listeners for Overlays
    card.querySelector(".view-details").addEventListener("click", () => openQuickView(p.id));
    card.querySelector(".add-to-cart").addEventListener("click", () => addToCart(p.id));

    productsGrid.appendChild(card);
  });
}

// Shopping Cart Management
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function updateCartUI() {
  // Update badge count
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCountElement.textContent = totalCount;
  cartCountElement.style.display = totalCount > 0 ? "flex" : "none";

  // Populate list
  cartItemsContainer.innerHTML = "";
  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty-message">
        <i class="fa-solid fa-bag-shopping"></i>
        <p>Your shopping bag is empty.</p>
      </div>
    `;
    checkoutBtn.disabled = true;
  } else {
    checkoutBtn.disabled = false;
    cart.forEach(item => {
      const product = products.find(p => p.id === item.productId);
      if (!product) return;

      const pricePerItem = getDiscountedPrice(product.price, product.discount);
      const totalItemPriceFormatted = formatCurrency(pricePerItem * item.quantity);

      const itemRow = document.createElement("div");
      itemRow.className = "cart-item";
      itemRow.innerHTML = `
        <div class="cart-item-img">
          <img src="${product.image}" alt="${product.name}">
        </div>
        <div class="cart-item-details">
          <h4 class="cart-item-name">${product.name}</h4>
          <span class="cart-item-price">${formatCurrency(pricePerItem)}</span>
          <div class="cart-item-control">
            <div class="qty-selector">
              <button class="qty-btn dec-qty" data-id="${item.productId}">-</button>
              <span class="qty-val">${item.quantity}</span>
              <button class="qty-btn inc-qty" data-id="${item.productId}">+</button>
            </div>
            <button class="cart-item-remove" data-id="${item.productId}">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        </div>
      `;

      // Event handlers for quantity & delete buttons
      itemRow.querySelector(".dec-qty").addEventListener("click", () => updateItemQty(item.productId, -1));
      itemRow.querySelector(".inc-qty").addEventListener("click", () => updateItemQty(item.productId, 1));
      itemRow.querySelector(".cart-item-remove").addEventListener("click", () => removeFromCart(item.productId));

      cartItemsContainer.appendChild(itemRow);
    });
  }

  // Calculate totals
  let rawSubtotal = 0;
  let discountedTotal = 0;

  cart.forEach(item => {
    const product = products.find(p => p.id === item.productId);
    if (product) {
      rawSubtotal += product.price * item.quantity;
      discountedTotal += getDiscountedPrice(product.price, product.discount) * item.quantity;
    }
  });

  const totalSavings = rawSubtotal - discountedTotal;

  cartSubtotalElement.textContent = formatCurrency(rawSubtotal);
  cartSavingsElement.textContent = `-${formatCurrency(totalSavings)}`;
  cartTotalElement.textContent = formatCurrency(discountedTotal);
}

function addToCart(productId) {
  const existingItem = cart.find(item => item.productId === productId);
  const product = products.find(p => p.id === productId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }

  saveCart();
  updateCartUI();
  showToast(`"${product.name}" added to shopping bag`, "success");
}

function updateItemQty(productId, change) {
  const item = cart.find(item => item.productId === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(productId) {
  const product = products.find(p => p.id === productId);
  cart = cart.filter(item => item.productId !== productId);
  saveCart();
  updateCartUI();
  showToast(`"${product.name}" removed from shopping bag`, "remove");
}

// Modal View
function openQuickView(productId) {
  const p = products.find(prod => prod.id === productId);
  if (!p) return;

  const currentPrice = getDiscountedPrice(p.price, p.discount);

  // Inject content into modal
  quickViewModal.querySelector(".modal-img-side img").src = p.image;
  quickViewModal.querySelector(".modal-img-side img").alt = p.name;
  quickViewModal.querySelector(".modal-content-side .product-category").textContent = p.category;
  quickViewModal.querySelector(".modal-title").textContent = p.name;
  quickViewModal.querySelector(".modal-price-row .current-price").textContent = formatCurrency(currentPrice);
  quickViewModal.querySelector(".modal-price-row .original-price").textContent = formatCurrency(p.price);
  quickViewModal.querySelector(".modal-description").textContent = p.description;

  // Set specifications
  const specs = quickViewModal.querySelectorAll(".spec-value");
  specs[0].textContent = p.brand;
  specs[1].textContent = p.skinType;
  specs[2].textContent = p.finish;
  specs[3].textContent = p.size;
  specs[4].textContent = p.ingredients;

  // Bind Add to Cart button inside modal
  const modalAddBtn = quickViewModal.querySelector(".modal-add-btn");
  // Clear old listener
  const newModalAddBtn = modalAddBtn.cloneNode(true);
  modalAddBtn.parentNode.replaceChild(newModalAddBtn, modalAddBtn);
  newModalAddBtn.addEventListener("click", () => {
    addToCart(p.id);
    closeQuickView();
  });

  quickViewModal.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent scrolling behind
}

function closeQuickView() {
  quickViewModal.classList.remove("active");
  document.body.style.overflow = "";
}

// Search and Filters Logic
function setupSearchAndFilters() {
  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderProducts();
  });

  // Categories
  categoryButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.getAttribute("data-category");
      renderProducts();
    });
  });

  // Sorting
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderProducts();
  });
}

// Drawer Open/Close
function setupCartDrawer() {
  cartTrigger.addEventListener("click", () => {
    cartDrawer.classList.add("active");
    cartBackdrop.classList.add("active");
    document.body.style.overflow = "hidden";
  });

  const closeCart = () => {
    cartDrawer.classList.remove("active");
    cartBackdrop.classList.remove("active");
    document.body.style.overflow = "";
  };

  cartClose.addEventListener("click", closeCart);
  cartBackdrop.addEventListener("click", closeCart);

  checkoutBtn.addEventListener("click", () => {
    showToast("Checkout simulator triggered. Order processed!", "success");
    cart = [];
    saveCart();
    updateCartUI();
    closeCart();
  });
}

// Navigation scroll effects & active highlight
function setupNavigation() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// Form Handlers
function setupFormHandlers() {
  // Contact Form
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = contactForm.querySelector("#contact-name").value;
    showToast(`Thank you, ${name}! Your query was sent successfully.`, "success");
    contactForm.reset();
  });

  // Newsletter Form
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector("input").value;
    showToast(`Subscribed successfully with ${email}!`, "success");
    newsletterForm.reset();
  });
}

// ==========================================
// AI FEATURE 1: Cosine Similarity Recommender
// ==========================================

// Calculate Cosine Similarity between two vectors
function calculateCosineSimilarity(vecA, vecB) {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }
  
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

function runAIPersonalizedRecommender() {
  const form = document.getElementById("recommender-form");
  const resultsContainer = document.getElementById("recommendations-list");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const skinType = document.getElementById("rec-skin-type").value;
    const finish = document.getElementById("rec-finish").value;
    const maxBudget = parseInt(document.getElementById("rec-budget").value);
    const brand = document.getElementById("rec-brand").value;
    const prioritize = document.getElementById("rec-prioritize").value;
    
    // User Vector Index: [Dry, Oily, Combination, Sensitive, Matte, Dewy, Natural, AURA, Maybelline, L'Oreal, MAC, Sephora, Clinique]
    let userVector = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    
    // Set Skin Type weights
    if (skinType === "dry") userVector[0] = 1.0;
    else if (skinType === "oily") userVector[1] = 1.0;
    else if (skinType === "combination") userVector[2] = 1.0;
    else if (skinType === "sensitive") userVector[3] = 1.0;
    
    // Set Finish weights
    if (finish === "matte") userVector[4] = 1.0;
    else if (finish === "dewy") userVector[5] = 1.0;
    else if (finish === "natural") userVector[6] = 1.0;

    // Set Brand Preference weights (higher weight of 1.5 to boost matching brands)
    if (brand === "aura") userVector[7] = 1.5;
    else if (brand === "maybelline") userVector[8] = 1.5;
    else if (brand === "loreal") userVector[9] = 1.5;
    else if (brand === "mac") userVector[10] = 1.5;
    else if (brand === "sephora") userVector[11] = 1.5;
    else if (brand === "clinique") userVector[12] = 1.5;
    
    // Compute Cosine Similarity for each product within budget
    let rankedProducts = products
      .filter(p => getDiscountedPrice(p.price, p.discount) <= maxBudget)
      .map(p => {
        let similarity = calculateCosineSimilarity(userVector, p.features);
        
        // Weight adjustments based on prioritizers
        if (prioritize === "rating") {
          similarity = similarity * 0.7 + (p.rating / 5.0) * 0.3;
        } else if (prioritize === "discount") {
          similarity = similarity * 0.7 + (p.discount / 100.0) * 0.3;
        }
        
        return {
          product: p,
          score: similarity
        };
      });
      
    // Sort descending by score
    rankedProducts.sort((a, b) => b.score - a.score);
    
    // Take Top 5
    const topMatches = rankedProducts.slice(0, 5);
    
    // Render Results
    resultsContainer.innerHTML = "";
    
    if (topMatches.length === 0) {
      resultsContainer.innerHTML = `
        <div class="empty-results-message">
          <i class="fa-solid fa-circle-exclamation"></i>
          <p>No products match your criteria. Try increasing your maximum budget option.</p>
        </div>
      `;
      return;
    }
    
    topMatches.forEach((match, index) => {
      const p = match.product;
      const matchPercent = Math.round(match.score * 100);
      const discountedPrice = getDiscountedPrice(p.price, p.discount);
      
      const itemHtml = document.createElement("div");
      itemHtml.className = "rec-item";
      itemHtml.innerHTML = `
        <div class="rec-rank">${index + 1}</div>
        <div class="rec-img">
          <img src="${p.image}" alt="${p.name}">
        </div>
        <div class="rec-info">
          <span class="rec-cat">${p.category}</span>
          <h4 class="rec-name">${p.name}</h4>
          <span class="rec-price">${formatCurrency(discountedPrice)}</span>
        </div>
        <div class="rec-match-box">
          <div class="rec-score-ring" title="Calculated Cosine Similarity matching score">
            ${matchPercent}%
            <span>Match</span>
          </div>
        </div>
      `;
      
      // Click details on recommended items
      itemHtml.addEventListener("click", (e) => {
        if (!e.target.classList.contains("rec-score-ring")) {
          openQuickView(p.id);
        }
      });
      
      resultsContainer.appendChild(itemHtml);
    });
    
    showToast("Cosine similarity matrices computed! Recommending top products.", "success");
  });
}

// ==========================================
// AI FEATURE 2: Computer Vision Skin Detector
// ==========================================

function runAISkinToneDetector() {
  const imageUpload = document.getElementById("image-upload");
  const demoBtn = document.getElementById("demo-photo-btn");
  const canvas = document.getElementById("scanner-canvas");
  const ctx = canvas.getContext("2d");
  const viewport = document.querySelector(".scanner-viewport");
  const placeholder = document.getElementById("scanner-placeholder");
  const resultsContainer = document.getElementById("cv-results-body");
  
  // Set dimensions
  canvas.width = 300;
  canvas.height = 300;
  
  // Handle Upload
  imageUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        loadImageAndScan(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Handle Demo Model Photo
  demoBtn.addEventListener("click", () => {
    // Model face image
    const demoUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
    loadImageAndScan(demoUrl);
  });
  
  function loadImageAndScan(src) {
    // Show placeholder/reset UI
    placeholder.style.display = "none";
    viewport.classList.remove("scanning");
    
    const img = new Image();
    img.crossOrigin = "anonymous"; // Avoid tainted canvas with external URLs
    img.src = src;
    img.onload = () => {
      // Draw image to fill canvas (cover effect)
      const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width / 2) - (img.width / 2) * scale;
      const y = (canvas.height / 2) - (img.height / 2) * scale;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
      
      // Start scanning animation
      viewport.classList.add("scanning");
      
      setTimeout(() => {
        // Draw computer vision scanning box overlay
        ctx.strokeStyle = "#dfb67b";
        ctx.lineWidth = 2;
        ctx.setLineDash([4, 4]);
        // Box outline around central face area
        ctx.strokeRect(75, 75, 150, 150);
        ctx.setLineDash([]); // Reset
        
        // Analyze skin pixels
        const pixelData = ctx.getImageData(75, 75, 150, 150).data;
        analyzeColorPixels(pixelData);
        
        viewport.classList.remove("scanning");
      }, 3000); // 3 seconds scan simulation
    };
    
    img.onerror = () => {
      showToast("Cross-Origin security prevented direct pixel scanning. Using offline classification fallback.", "remove");
      // Load fallback simulation immediately
      placeholder.style.display = "none";
      simulateSkinToneFallback();
    };
  }
  
  function analyzeColorPixels(pixels) {
    let rSum = 0, gSum = 0, bSum = 0;
    let count = 0;
    
    // Skin color pixel heuristics: 
    // R > 95, G > 40, B > 20, R > G, R > B, |R-G| > 15
    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i+1];
      const b = pixels[i+2];
      
      if (r > 90 && g > 40 && b > 20 && r > g && r > b && Math.abs(r - g) > 10) {
        rSum += r;
        gSum += g;
        bSum += b;
        count++;
      }
    }
    
    let finalR = 210, finalG = 161, finalB = 130; // Fallback skin color
    if (count > 0) {
      finalR = Math.round(rSum / count);
      finalG = Math.round(gSum / count);
      finalB = Math.round(bSum / count);
    } else {
      // If no skin pixels match, average the center pixels directly
      let directR = 0, directG = 0, directB = 0;
      for (let i = 0; i < pixels.length; i += 4) {
        directR += pixels[i];
        directG += pixels[i+1];
        directB += pixels[i+2];
      }
      const len = pixels.length / 4;
      finalR = Math.round(directR / len);
      finalG = Math.round(directG / len);
      finalB = Math.round(directB / len);
    }
    
    const hex = rgbToHex(finalR, finalG, finalB);
    const hsl = rgbToHsl(finalR, finalG, finalB);
    
    displayCVResults(hex, hsl);
  }
  
  function simulateSkinToneFallback() {
    // Model fallback: beautiful Medium warm tone
    const sampleHex = "#dfad8b";
    const sampleHsl = { h: 24, s: 53, l: 71 };
    displayCVResults(sampleHex, sampleHsl);
  }

  function rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }
  
  function rgbToHsl(r, g, b) {
    r /= 255; g /= 255; b /= 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;
    
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }
    
    return {
      h: Math.round(h * 360),
      s: Math.round(s * 100),
      l: Math.round(l * 100)
    };
  }
  
  function displayCVResults(hex, hsl) {
    // Classification Heuristics
    let toneClass = "Fair";
    if (hsl.l > 65) toneClass = "Fair";
    else if (hsl.l > 48) toneClass = "Medium";
    else if (hsl.l > 32) toneClass = "Tan";
    else toneClass = "Deep";
    
    // Undertone check by Hue & Saturation
    // Warm: 12-28 deg (Golden/Peach). Cool: 340-10 deg (Pinkish/Rosy). Neutral: others.
    let undertoneClass = "Neutral";
    if (hsl.h >= 14 && hsl.h <= 26) {
      undertoneClass = "Warm (Golden)";
    } else if (hsl.h > 26 && hsl.h < 340) {
      undertoneClass = "Cool (Rosy)";
    } else {
      undertoneClass = "Neutral";
    }
    
    resultsContainer.innerHTML = `
      <div class="cv-stat-box">
        <div class="skin-color-swatch" style="background-color: ${hex};"></div>
        <div class="cv-data">
          <h4>Detected Color Value</h4>
          <p>${hex.toUpperCase()} (${toneClass} / ${undertoneClass})</p>
        </div>
      </div>
      
      <div class="results-header" style="border:none; margin-bottom: 8px; padding-bottom: 0;">
        <h3>Matching Shade Recommendations</h3>
      </div>
      
      <div class="cv-rec-grid">
        <div class="cv-rec-card">
          <h4>Foundation</h4>
          <p>Ideal shade match selected for your Fitzpatrick skin rating:</p>
          <span>AURA Velvet - Shade ${toneClass === 'Fair' ? '120 Alabaster' : toneClass === 'Medium' ? '220 Golden Honey' : toneClass === 'Tan' ? '330 Rich Warm' : '440 Mocha'}</span>
        </div>
        <div class="cv-rec-card">
          <h4>Concealer</h4>
          <p>Targeted color correction mapped to undertone matching:</p>
          <span>AURA Conceal - Shade ${undertoneClass.includes('Warm') ? 'Golden Matte' : 'Brightening Pearl'}</span>
        </div>
        <div class="cv-rec-card">
          <h4>Blush Shade</h4>
          <p>Color saturation adjusted to blend with skin color tone:</p>
          <span>Luminous Liquid - ${toneClass === 'Fair' || toneClass === 'Medium' ? 'Silk Peach' : 'Rose Crimson'}</span>
        </div>
        <div class="cv-rec-card">
          <h4>Lipstick Palette</h4>
          <p>Contrasting shades mapping skin color vibrancy:</p>
          <span>Stardust Rouge - ${undertoneClass.includes('Warm') ? 'Terra Cotta Velvet' : 'Royal Plum'}</span>
        </div>
      </div>
    `;
    
    showToast(`Skin tone detected: Fitzpatrick Category ${toneClass}`, "success");
  }
}

// ==========================================
// AI FEATURE 3: Shade Matcher Classifier
// ==========================================

function runAIShadeMatcher() {
  const form = document.getElementById("matcher-form");
  const resultsContainer = document.getElementById("tree-results-body");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const tone = document.getElementById("match-tone").value;
    const undertone = document.getElementById("match-undertone").value;
    const occasion = document.getElementById("match-occasion").value;
    const season = document.getElementById("match-season").value;
    const finish = document.getElementById("match-finish").value;
    
    // Simulate Decision Tree traversal paths
    const pathNodes = [
      { name: "Root Node (All Shades Classifier)", desc: "Dataset categorized by skin characteristics" },
      { name: `Tone Branch -> ${tone.toUpperCase()}`, desc: `Splits classification space into ${tone} skin spectrums` },
      { name: `Undertone Branch -> ${undertone.toUpperCase()}`, desc: `Refines pigment values using cooler/warmer thresholds` },
      { name: `Finish Leaf -> ${finish.toUpperCase()}`, desc: `Locks formula texture based on user specification` }
    ];
    
    // Shade assignment matrix (Simulated Decision Tree Classifiers)
    let foundationShade = "100 Porcelain";
    let blushShade = "Satin Peach";
    let lipShade = "Nude Rose";
    
    if (tone === "fair") {
      foundationShade = undertone === "cool" ? "110 Cool Ivory" : "120 Alabaster";
      blushShade = finish === "matte" ? "Soft Powder Pink" : "Dewy Rose Quartz";
      lipShade = occasion === "daily" ? "Soft Pink Nude" : occasion === "party" ? "Ruby Metallic" : "Classic Crimson Satin";
    } else if (tone === "medium") {
      foundationShade = undertone === "cool" ? "210 Almond" : undertone === "warm" ? "220 Golden Honey" : "215 Soft Sand";
      blushShade = finish === "matte" ? "Peach Matte" : "Luminous Coral Dew";
      lipShade = occasion === "daily" ? "Mauve Velvet" : occasion === "party" ? "Gilded Bronze" : "Deep Cinnamon Spice";
    } else if (tone === "tan") {
      foundationShade = undertone === "cool" ? "310 Toffee" : undertone === "warm" ? "330 Amber Gold" : "320 Caramel Satin";
      blushShade = finish === "matte" ? "Canyon Sunset Clay" : "Stardust Copper Glow";
      lipShade = occasion === "daily" ? "Warm Caramel Nude" : occasion === "party" ? "Metallic Cherry" : "Burgundy Silk";
    } else if (tone === "deep") {
      foundationShade = undertone === "cool" ? "410 Espresso" : undertone === "warm" ? "430 Dark Chestnut" : "420 Rich Mocha";
      blushShade = finish === "matte" ? "Deep Ruby Powder" : "Gilded Plum Shimmer";
      lipShade = occasion === "daily" ? "Deep Cocoa Matte" : occasion === "party" ? "Midnight Velvet Plum" : "Sparkling Wine Gloss";
    }
    
    // Season adjust specs
    let formulationTips = "";
    if (season === "summer") {
      formulationTips = "Formulated with Sebum-control polymers. Recommend applying with Setting Powder.";
    } else if (season === "winter") {
      formulationTips = "Infused with Hyaluronic hydrates to lock in moisture and prevent flaking.";
    } else {
      formulationTips = "Standard skin balancing formula with medium humidity protection.";
    }
    
    // Clear and Render
    resultsContainer.innerHTML = "";
    
    const treeVisual = document.createElement("div");
    treeVisual.className = "tree-flow-visual";
    treeVisual.innerHTML = `
      <h4>Model Decision Path Traversal</h4>
      <div class="tree-path-container">
        <div class="tree-node"><i class="fa-solid fa-folder-tree"></i> <span>${pathNodes[0].name} (${pathNodes[0].desc})</span></div>
        <div class="tree-node-arrow"><i class="fa-solid fa-arrow-down-long"></i></div>
        <div class="tree-node"><i class="fa-solid fa-code-branch"></i> <span>${pathNodes[1].name} (${pathNodes[1].desc})</span></div>
        <div class="tree-node-arrow"><i class="fa-solid fa-arrow-down-long"></i></div>
        <div class="tree-node"><i class="fa-solid fa-code-branch"></i> <span>${pathNodes[2].name} (${pathNodes[2].desc})</span></div>
        <div class="tree-node-arrow"><i class="fa-solid fa-arrow-down-long"></i></div>
        <div class="tree-node active-leaf"><i class="fa-solid fa-tag"></i> <span>${pathNodes[3].name} (${pathNodes[3].desc})</span></div>
      </div>
    `;
    
    const shadeResults = document.createElement("div");
    shadeResults.className = "shade-rec-grid";
    shadeResults.innerHTML = `
      <div class="cv-rec-card">
        <h4>Target Shade Recommendation</h4>
        <span>Foundation: ${foundationShade}</span>
        <p style="margin-top: 10px; font-size:12px;">Mapped matching shade classified via Decision Tree rules.</p>
      </div>
      <div class="cv-rec-card">
        <h4>Complementary Shade</h4>
        <span>Lipstick: ${lipShade}</span>
        <span>Blush: ${blushShade}</span>
      </div>
      <div class="cv-rec-card" style="grid-column: 1 / -1;">
        <h4>Season & Finish Formula adjustment</h4>
        <p>${formulationTips}</p>
        <span style="font-size:12px; margin-top:8px; font-weight:normal;">Occasion setting: classified for ${occasion === 'daily' ? 'casual wear profile' : occasion === 'party' ? 'high-contrast profile' : 'long-wear bridal profile'}</span>
      </div>
    `;
    
    resultsContainer.appendChild(treeVisual);
    resultsContainer.appendChild(shadeResults);
    
    showToast("Decision tree classifier calculated! Leaf node match reached.", "success");
  });
}

// ==========================================
// AI FEATURE 4: Virtual Try-On Mirror
// ==========================================

const tryonState = {
  image: null,
  landmarks: null,
  selectedLipstickColor: "#b80c09",
  selectedEyeshadowColor: "#9a6e60",
  selectedBlushColor: "#f0968f",
  faceMesh: null
};

// Fallback Coordinates Mapper for Demo Photo (Scaled to fit Canvas dimensions)
function getScaledFallbackLandmarks(width, height) {
  const baseW = 300;
  const baseH = 300;
  const scaleX = width / baseW;
  const scaleY = height / baseH;
  
  const baseCoordinates = {
    contour: [[80, 100], [70, 140], [75, 180], [90, 220], [115, 250], [150, 260], [185, 250], [210, 220], [225, 180], [230, 140], [220, 100], [195, 80], [150, 75], [105, 80]],
    leftEyelid: [[95, 122], [103, 115], [115, 112], [125, 114], [130, 122], [120, 123], [110, 124], [95, 122]],
    rightEyelid: [[170, 122], [175, 114], [185, 112], [197, 115], [205, 122], [190, 124], [180, 123], [170, 122]],
    leftLash: [[95, 122], [110, 118], [120, 119], [130, 122]],
    rightLash: [[170, 122], [180, 119], [190, 118], [205, 122]],
    leftCheek: [110, 165],
    rightCheek: [190, 165],
    lipOuter: [[120, 210], [132, 203], [142, 204], [150, 206], [158, 204], [168, 203], [180, 210], [168, 220], [158, 223], [150, 224], [142, 223], [132, 220]],
    lipInner: [[126, 210], [135, 208], [150, 209], [165, 208], [174, 210], [165, 213], [150, 214], [135, 213]]
  };
  
  const mapPairs = (arr) => arr.map(pt => ({ x: pt[0] * scaleX, y: pt[1] * scaleY }));
  const mapSingle = (pt) => ({ x: pt[0] * scaleX, y: pt[1] * scaleY });
  
  return {
    contour: mapPairs(baseCoordinates.contour),
    leftEyelid: mapPairs(baseCoordinates.leftEyelid),
    rightEyelid: mapPairs(baseCoordinates.rightEyelid),
    leftLash: mapPairs(baseCoordinates.leftLash),
    rightLash: mapPairs(baseCoordinates.rightLash),
    leftCheek: mapSingle(baseCoordinates.leftCheek),
    rightCheek: mapSingle(baseCoordinates.rightCheek),
    lipOuter: mapPairs(baseCoordinates.lipOuter),
    lipInner: mapPairs(baseCoordinates.lipInner),
    isFallback: true
  };
}

function generateGlitterOffsets(landmarks) {
  if (!landmarks) return;
  tryonState.leftGlitter = landmarks.leftEyelid.map(() => ({
    dx: Math.random() * 6 - 3,
    dy: Math.random() * 6 - 3,
    show: Math.random() > 0.4
  }));
  tryonState.rightGlitter = landmarks.rightEyelid.map(() => ({
    dx: Math.random() * 6 - 3,
    dy: Math.random() * 6 - 3,
    show: Math.random() > 0.4
  }));
}

function initMediaPipeFaceMesh() {
  if (typeof FaceMesh === "undefined") {
    console.warn("MediaPipe Face Mesh library is not loaded. Fallback coordinates active.");
    return;
  }
  
  tryonState.faceMesh = new FaceMesh({
    locateFile: (file) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`
  });
  
  tryonState.faceMesh.setOptions({
    maxNumFaces: 1,
    refineLandmarks: true,
    minDetectionConfidence: 0.5,
    minTrackingConfidence: 0.5
  });
  
  tryonState.faceMesh.onResults((results) => {
    const canvas = document.getElementById("tryon-canvas");
    if (results.multiFaceLandmarks && results.multiFaceLandmarks.length > 0) {
      const landmarks = results.multiFaceLandmarks[0];
      
      // Map normalized landmarks to canvas space
      tryonState.landmarks = {
        contour: [10, 338, 297, 332, 284, 251, 389, 356, 454, 323, 361, 288, 397, 365, 379, 378, 400, 377, 152, 148, 176, 149, 150, 136, 172, 58, 132, 93, 234, 127, 162, 21, 54, 103, 67, 109].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        leftEyelid: [226, 247, 30, 29, 27, 28, 56, 190, 244, 112].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        rightEyelid: [446, 467, 260, 259, 257, 258, 286, 414, 464, 341].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        leftLash: [246, 161, 160, 159, 158, 157, 173].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        rightLash: [466, 388, 387, 386, 385, 384, 398].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        leftCheek: {
          x: landmarks[123].x * canvas.width,
          y: landmarks[123].y * canvas.height
        },
        rightCheek: {
          x: landmarks[352].x * canvas.width,
          y: landmarks[352].y * canvas.height
        },
        lipOuter: [61, 185, 40, 39, 37, 0, 267, 269, 270, 409, 291, 375, 321, 405, 314, 17, 84, 181, 91, 146].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        lipInner: [78, 191, 80, 81, 82, 13, 312, 311, 310, 415, 308, 324, 318, 402, 317, 14, 87, 178, 95, 88].map(i => ({
          x: landmarks[i].x * canvas.width,
          y: landmarks[i].y * canvas.height
        })),
        isFallback: false
      };
      
      generateGlitterOffsets(tryonState.landmarks);
      drawTryOnMakeup();
      showToast("Facial features mapped successfully!", "success");
    } else {
      showToast("No face detected. Falling back to default canvas overlays.", "remove");
      // Use fallback layout mapping
      tryonState.landmarks = getScaledFallbackLandmarks(canvas.width, canvas.height);
      generateGlitterOffsets(tryonState.landmarks);
      drawTryOnMakeup();
    }
  });
}

function drawTryOnMakeup() {
  const canvas = document.getElementById("tryon-canvas");
  const ctx = canvas.getContext("2d");
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Draw base image
  if (tryonState.image) {
    ctx.drawImage(tryonState.image, 0, 0, canvas.width, canvas.height);
  }
  
  if (!tryonState.landmarks) return;
  const landmarks = tryonState.landmarks;
  
  // ==================== 1. FOUNDATION LAYER ====================
  if (document.getElementById("toggle-foundation").checked) {
    const shade = document.getElementById("tryon-foundation-shade").value;
    const coverage = parseFloat(document.getElementById("tryon-foundation-coverage").value);
    const finish = document.getElementById("tryon-foundation-finish").value;
    
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(landmarks.contour[0].x, landmarks.contour[0].y);
    for (let i = 1; i < landmarks.contour.length; i++) {
      ctx.lineTo(landmarks.contour[i].x, landmarks.contour[i].y);
    }
    ctx.closePath();
    
    // Set opacity & blend mode
    ctx.globalAlpha = coverage * 0.35;
    ctx.fillStyle = shade;
    ctx.fill();
    
    // Dewy highlight sheen
    if (finish === "dewy") {
      ctx.globalAlpha = 0.2;
      const gradient = ctx.createRadialGradient(
        (landmarks.leftCheek.x + landmarks.rightCheek.x) / 2,
        (landmarks.leftCheek.y + landmarks.leftCheek.y) / 2 - 20,
        5,
        (landmarks.leftCheek.x + landmarks.rightCheek.x) / 2,
        (landmarks.leftCheek.y + landmarks.leftCheek.y) / 2 - 20,
        40
      );
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fill();
    }
    ctx.restore();
  }

  // ==================== 2. EYESHADOW LAYER ====================
  if (document.getElementById("toggle-eyeshadow").checked) {
    const color = tryonState.selectedEyeshadowColor;
    const opacity = parseFloat(document.getElementById("tryon-eyeshadow-opacity").value);
    const effect = document.getElementById("tryon-eyeshadow-effect").value;
    
    ctx.save();
    ctx.globalAlpha = opacity * 0.4;
    ctx.fillStyle = color;
    
    // Draw Left Eye
    ctx.beginPath();
    ctx.moveTo(landmarks.leftEyelid[0].x, landmarks.leftEyelid[0].y);
    for (let i = 1; i < landmarks.leftEyelid.length; i++) {
      ctx.lineTo(landmarks.leftEyelid[i].x, landmarks.leftEyelid[i].y);
    }
    ctx.closePath();
    ctx.fill();
    
    // Draw Right Eye
    ctx.beginPath();
    ctx.moveTo(landmarks.rightEyelid[0].x, landmarks.rightEyelid[0].y);
    for (let i = 1; i < landmarks.rightEyelid.length; i++) {
      ctx.lineTo(landmarks.rightEyelid[i].x, landmarks.rightEyelid[i].y);
    }
    ctx.closePath();
    ctx.fill();
    
    // Sparkle Glitter effect
    if (effect === "glitter" && tryonState.leftGlitter) {
      ctx.globalAlpha = 0.85;
      ctx.fillStyle = "#ffffff";
      landmarks.leftEyelid.forEach((pt, i) => {
        const offset = tryonState.leftGlitter[i];
        if (offset && offset.show) {
          ctx.fillRect(pt.x + offset.dx, pt.y + offset.dy, 2.5, 2.5);
        }
      });
      landmarks.rightEyelid.forEach((pt, i) => {
        const offset = tryonState.rightGlitter[i];
        if (offset && offset.show) {
          ctx.fillRect(pt.x + offset.dx, pt.y + offset.dy, 2.5, 2.5);
        }
      });
    }
    ctx.restore();
  }

  // ==================== 3. BLUSH LAYER ====================
  if (document.getElementById("toggle-blush").checked) {
    const color = tryonState.selectedBlushColor;
    const intensity = parseFloat(document.getElementById("tryon-blush-opacity").value);
    
    ctx.save();
    ctx.globalAlpha = intensity * 0.5;
    
    // Draw Left Cheek Blush (Radial Gradient)
    const leftGrad = ctx.createRadialGradient(
      landmarks.leftCheek.x, landmarks.leftCheek.y, 2,
      landmarks.leftCheek.x, landmarks.leftCheek.y, 35
    );
    leftGrad.addColorStop(0, color);
    leftGrad.addColorStop(1, "transparent");
    ctx.fillStyle = leftGrad;
    ctx.beginPath();
    ctx.arc(landmarks.leftCheek.x, landmarks.leftCheek.y, 35, 0, Math.PI * 2);
    ctx.fill();
    
    // Draw Right Cheek Blush
    const rightGrad = ctx.createRadialGradient(
      landmarks.rightCheek.x, landmarks.rightCheek.y, 2,
      landmarks.rightCheek.x, landmarks.rightCheek.y, 35
    );
    rightGrad.addColorStop(0, color);
    rightGrad.addColorStop(1, "transparent");
    ctx.fillStyle = rightGrad;
    ctx.beginPath();
    ctx.arc(landmarks.rightCheek.x, landmarks.rightCheek.y, 35, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.restore();
  }

  // ==================== 4. EYELINER LAYER ====================
  if (document.getElementById("toggle-eyeliner").checked) {
    const style = document.getElementById("tryon-eyeliner-style").value;
    const color = document.getElementById("tryon-eyeliner-color").value;
    
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = style === "bold" ? 3.5 : 2.0;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    
    // Draw Left Lashline
    ctx.beginPath();
    ctx.moveTo(landmarks.leftLash[0].x, landmarks.leftLash[0].y);
    for (let i = 1; i < landmarks.leftLash.length; i++) {
      ctx.lineTo(landmarks.leftLash[i].x, landmarks.leftLash[i].y);
    }
    // Eyeliner Wing
    if (style === "winged" || style === "cat") {
      const endX = landmarks.leftLash[0].x;
      const endY = landmarks.leftLash[0].y;
      ctx.quadraticCurveTo(endX - 10, endY - 4, endX - 15, endY - (style === "cat" ? 10 : 6));
    }
    ctx.stroke();
    
    // Draw Right Lashline
    ctx.beginPath();
    ctx.moveTo(landmarks.rightLash[0].x, landmarks.rightLash[0].y);
    for (let i = 1; i < landmarks.rightLash.length; i++) {
      ctx.lineTo(landmarks.rightLash[i].x, landmarks.rightLash[i].y);
    }
    // Eyeliner Wing Right
    if (style === "winged" || style === "cat") {
      const endX = landmarks.rightLash[landmarks.rightLash.length - 1].x;
      const endY = landmarks.rightLash[landmarks.rightLash.length - 1].y;
      ctx.quadraticCurveTo(endX + 10, endY - 4, endX + 15, endY - (style === "cat" ? 10 : 6));
    }
    ctx.stroke();
    
    ctx.restore();
  }

  // ==================== 5. LIPSTICK LAYER ====================
  if (document.getElementById("toggle-lipstick").checked) {
    const color = tryonState.selectedLipstickColor;
    const opacity = parseFloat(document.getElementById("tryon-lipstick-opacity").value);
    const finish = document.getElementById("tryon-lipstick-finish").value;
    
    ctx.save();
    
    // Draw outer lip loop path
    ctx.beginPath();
    ctx.moveTo(landmarks.lipOuter[0].x, landmarks.lipOuter[0].y);
    for (let i = 1; i < landmarks.lipOuter.length; i++) {
      ctx.lineTo(landmarks.lipOuter[i].x, landmarks.lipOuter[i].y);
    }
    ctx.closePath();
    
    // Subtractive clipping of inner mouth loop
    ctx.moveTo(landmarks.lipInner[0].x, landmarks.lipInner[0].y);
    for (let i = landmarks.lipInner.length - 1; i >= 0; i--) {
      ctx.lineTo(landmarks.lipInner[i].x, landmarks.lipInner[i].y);
    }
    ctx.closePath();
    
    ctx.globalAlpha = opacity * 0.85;
    ctx.fillStyle = color;
    ctx.fill();
    
    // Finish highlights
    if (finish === "glossy" || finish === "satin") {
      ctx.globalAlpha = finish === "glossy" ? 0.35 : 0.15;
      ctx.fillStyle = "#ffffff";
      
      // Bottom lip shine dots
      ctx.beginPath();
      ctx.ellipse(
        landmarks.lipOuter[15].x,
        landmarks.lipOuter[15].y - 3,
        14, 3, 0, 0, Math.PI * 2
      );
      ctx.fill();
      
      // Top lip peak highlights
      ctx.beginPath();
      ctx.arc(landmarks.lipOuter[4].x, landmarks.lipOuter[4].y + 2, 2, 0, Math.PI * 2);
      ctx.arc(landmarks.lipOuter[8].x, landmarks.lipOuter[8].y + 2, 2, 0, Math.PI * 2);
      ctx.fill();
    }
    
    ctx.restore();
  }
}

function runAITryOnMirror() {
  const fileUpload = document.getElementById("tryon-file-upload");
  const demoBtn = document.getElementById("tryon-demo-btn");
  const beforeCanvas = document.getElementById("tryon-before-canvas");
  const canvas = document.getElementById("tryon-canvas");
  const placeholder = document.getElementById("tryon-placeholder");
  
  beforeCanvas.width = 340;
  beforeCanvas.height = 340;
  canvas.width = 340;
  canvas.height = 340;
  
  // Setup Accordion toggles click
  document.querySelectorAll(".section-group-header").forEach(header => {
    header.addEventListener("click", (e) => {
      if (e.target.tagName !== "INPUT") {
        const checkbox = header.querySelector("input[type='checkbox']");
        checkbox.checked = !checkbox.checked;
        checkbox.dispatchEvent(new Event("change"));
      }
    });
  });
  
  // Re-draw triggers on sliders & toggles changes
  const redrawElements = [
    "toggle-foundation", "tryon-foundation-shade", "tryon-foundation-coverage", "tryon-foundation-finish",
    "toggle-lipstick", "tryon-lipstick-opacity", "tryon-lipstick-finish",
    "toggle-eyeshadow", "tryon-eyeshadow-opacity", "tryon-eyeshadow-effect",
    "toggle-blush", "tryon-blush-opacity",
    "toggle-eyeliner", "tryon-eyeliner-style", "tryon-eyeliner-color"
  ];
  
  redrawElements.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("change", drawTryOnMakeup);
    if (el && el.tagName === "INPUT" && el.type === "range") {
      el.addEventListener("input", drawTryOnMakeup);
    }
  });
  
  // Bind Color Presets
  const bindPresets = (containerId, stateVar) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    const dots = container.querySelectorAll(".color-dot");
    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        dots.forEach(d => d.classList.remove("active"));
        dot.classList.add("active");
        tryonState[stateVar] = dot.getAttribute("data-color");
        drawTryOnMakeup();
      });
    });
  };
  
  bindPresets("lipstick-color-presets", "selectedLipstickColor");
  bindPresets("eyeshadow-color-presets", "selectedEyeshadowColor");
  bindPresets("blush-color-presets", "selectedBlushColor");
  
  // File upload trigger
  fileUpload.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        loadTryOnImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Demo Photo trigger
  demoBtn.addEventListener("click", () => {
    const demoUrl = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop";
    loadTryOnImage(demoUrl);
  });
  
  function loadTryOnImage(src) {
    placeholder.style.display = "none";
    showToast("Processing face mesh tracking...", "success");
    
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = src;
    img.onload = () => {
      tryonState.image = img;
      
      // Render original image on Before canvas
      const beforeCanvas = document.getElementById("tryon-before-canvas");
      const beforeCtx = beforeCanvas.getContext("2d");
      beforeCtx.clearRect(0, 0, beforeCanvas.width, beforeCanvas.height);
      beforeCtx.drawImage(img, 0, 0, beforeCanvas.width, beforeCanvas.height);
      
      if (tryonState.faceMesh) {
        // Send image to MediaPipe Face Mesh model
        tryonState.faceMesh.send({ image: img }).catch(err => {
          console.error("FaceMesh execution failed: ", err);
          // Fallback
          tryonState.landmarks = getScaledFallbackLandmarks(canvas.width, canvas.height);
          generateGlitterOffsets(tryonState.landmarks);
          drawTryOnMakeup();
        });
      } else {
        // Direct local fallback coordinates mapping
        tryonState.landmarks = getScaledFallbackLandmarks(canvas.width, canvas.height);
        generateGlitterOffsets(tryonState.landmarks);
        drawTryOnMakeup();
      }
    };
    img.onerror = () => {
      showToast("Security policies restricted image parsing. Loading fallback layout.", "remove");
      tryonState.landmarks = getScaledFallbackLandmarks(canvas.width, canvas.height);
      generateGlitterOffsets(tryonState.landmarks);
      drawTryOnMakeup();
    };
  }
  
  // Look Presets triggers
  document.getElementById("look-bridal").addEventListener("click", () => {
    applyLookPreset({
      foundation: { active: true, shade: "#f5c19d", coverage: 0.8, finish: "dewy" },
      lipstick: { active: true, color: "#b80c09", opacity: 0.9, finish: "satin" },
      eyeshadow: { active: true, color: "#c69f69", opacity: 0.8, effect: "glitter" },
      blush: { active: true, color: "#db8269", opacity: 0.7 },
      eyeliner: { active: true, style: "cat", color: "#1c1c1c" }
    });
    showToast("Bridal Glam Look applied!", "success");
  });
  
  document.getElementById("look-natural").addEventListener("click", () => {
    applyLookPreset({
      foundation: { active: true, shade: "#fcd1af", coverage: 0.4, finish: "dewy" },
      lipstick: { active: true, color: "#e05370", opacity: 0.5, finish: "glossy" },
      eyeshadow: { active: true, color: "#9a6e60", opacity: 0.3, effect: "gradient" },
      blush: { active: true, color: "#f0968f", opacity: 0.3 },
      eyeliner: { active: true, style: "thin", color: "#4a3b32" }
    });
    showToast("Glowy Natural Look applied!", "success");
  });
  
  document.getElementById("look-reset").addEventListener("click", () => {
    applyLookPreset({
      foundation: { active: false, shade: "#fcd1af", coverage: 0.5, finish: "dewy" },
      lipstick: { active: false, color: "#b80c09", opacity: 0.7, finish: "matte" },
      eyeshadow: { active: false, color: "#9a6e60", opacity: 0.5, effect: "gradient" },
      blush: { active: false, color: "#f0968f", opacity: 0.4 },
      eyeliner: { active: false, style: "winged", color: "#1c1c1c" }
    });
    showToast("Looks reset successfully.", "success");
  });
  
  function applyLookPreset(preset) {
    const setPresetVal = (toggleId, inputId, val, attr = "value") => {
      const toggle = document.getElementById(toggleId);
      toggle.checked = val.active;
      
      if (inputId) {
        const input = document.getElementById(inputId);
        input[attr] = val[attr === "value" ? attr : ""];
        if (attr === "value") input.value = val.value || val.color || val.shade || val.opacity || val.coverage || val.style || val.effect || val.intensity;
      }
    };
    
    setPresetVal("toggle-foundation", "tryon-foundation-shade", preset.foundation, "value");
    document.getElementById("tryon-foundation-coverage").value = preset.foundation.coverage;
    document.getElementById("tryon-foundation-finish").value = preset.foundation.finish;
    
    setPresetVal("toggle-lipstick", "tryon-lipstick-finish", preset.lipstick, "value");
    document.getElementById("tryon-lipstick-opacity").value = preset.lipstick.opacity;
    tryonState.selectedLipstickColor = preset.lipstick.color;
    updatePresetColorDotActive("lipstick-color-presets", preset.lipstick.color);
    
    setPresetVal("toggle-eyeshadow", "tryon-eyeshadow-effect", preset.eyeshadow, "value");
    document.getElementById("tryon-eyeshadow-opacity").value = preset.eyeshadow.opacity;
    tryonState.selectedEyeshadowColor = preset.eyeshadow.color;
    updatePresetColorDotActive("eyeshadow-color-presets", preset.eyeshadow.color);
    
    setPresetVal("toggle-blush", null, preset.blush);
    document.getElementById("tryon-blush-opacity").value = preset.blush.opacity;
    tryonState.selectedBlushColor = preset.blush.color;
    updatePresetColorDotActive("blush-color-presets", preset.blush.color);
    
    setPresetVal("toggle-eyeliner", "tryon-eyeliner-style", preset.eyeliner, "value");
    document.getElementById("tryon-eyeliner-color").value = preset.eyeliner.color;
    
    drawTryOnMakeup();
  }
  
  function updatePresetColorDotActive(containerId, color) {
    const container = document.getElementById(containerId);
    if (!container) return;
    const dots = container.querySelectorAll(".color-dot");
    dots.forEach(d => {
      d.classList.remove("active");
      if (d.getAttribute("data-color") === color) {
        d.classList.add("active");
      }
    });
  }
}

// Initial Execution
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initTheme();
  renderProducts();
  updateCartUI();
  setupSearchAndFilters();
  setupCartDrawer();
  setupNavigation();
  setupFormHandlers();
  
  // Initialize AI Labs systems
  runAIPersonalizedRecommender();
  runAISkinToneDetector();
  runAIShadeMatcher();
  initMediaPipeFaceMesh();
  runAITryOnMirror();

  // Close modals on Escape key
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeQuickView();
      cartDrawer.classList.remove("active");
      cartBackdrop.classList.remove("active");
      document.body.style.overflow = "";
    }
  });

  // Theme Toggler Event
  themeToggleBtn.addEventListener("click", toggleTheme);

  // Close Modal trigger
  modalCloseBtn.addEventListener("click", closeQuickView);
  quickViewModal.addEventListener("click", (e) => {
    if (e.target === quickViewModal) {
      closeQuickView();
    }
  });
});
