// Product data
const products = [
  // Phones
  {
    id: 1,
    name: "SIGMA Pro Max Ultra",
    brand: "SIGMA",
    category: "phones",
    price: 89990,
    specs: '6.7", 256GB, 12GB RAM, XUI 10',
    icon: "📱",
    sale: false,
  },
  {
    id: 2,
    name: "gnusmaS Galaxy S24 Mega",
    brand: "gnusmaS",
    category: "phones",
    price: 79990,
    specs: '6.5", 128GB, 8GB RAM, SigmaOS 5',
    icon: "📱",
    sale: true,
  },
  {
    id: 3,
    name: "SUS Phone 15 Pro Max",
    brand: "SUS",
    category: "phones",
    price: 94990,
    specs: '6.8", 512GB, 16GB RAM, HyperBugOS 2.2',
    icon: "📱",
    sale: false,
  },
  {
    id: 4,
    name: "Hlaomi 14T Ultra Turbo",
    brand: "Hlaomi",
    category: "phones",
    price: 69990,
    specs: '6.6", 256GB, 12GB RAM, XUI 10',
    icon: "📱",
    sale: true,
  },
  {
    id: 5,
    name: "Rigmi Note 13 Pro Plus",
    brand: "Rigmi",
    category: "phones",
    price: 34990,
    specs: '6.4", 128GB, 8GB RAM, SigmaOS 5',
    icon: "📱",
    sale: false,
  },
  {
    id: 6,
    name: "SIGMA Fold 5 Extreme",
    brand: "SIGMA",
    category: "phones",
    price: 149990,
    specs: '7.6", 512GB, 12GB RAM, XUI 10',
    icon: "📱",
    sale: false,
  },
  {
    id: 7,
    name: "gnusmaS A54 5G",
    brand: "gnusmaS",
    category: "phones",
    price: 44990,
    specs: '6.4", 128GB, 6GB RAM, SigmaOS 5',
    icon: "📱",
    sale: true,
  },
  {
    id: 8,
    name: "Hlaomi Poco X6 Pro",
    brand: "Hlaomi",
    category: "phones",
    price: 29990,
    specs: '6.5", 256GB, 8GB RAM, HyperBugOS 2.2',
    icon: "📱",
    sale: false,
  },
  {
    id: 9,
    name: "SUS Phone SE Mini",
    brand: "SUS",
    category: "phones",
    price: 54990,
    specs: '5.8", 128GB, 6GB RAM, HyperBugOS 2.2',
    icon: "📱",
    sale: true,
  },
  {
    id: 10,
    name: "Rigmi K60 Gaming Edition",
    brand: "Rigmi",
    category: "phones",
    price: 49990,
    specs: '6.7", 256GB, 12GB RAM, XUI 10',
    icon: "📱",
    sale: false,
  },

  // Laptops
  {
    id: 11,
    name: "SUS Tuff Gaming A15 RTX",
    brand: "SUS",
    category: "laptops",
    price: 124990,
    specs: '15.6", RTX 4060, 16GB RAM, Windows 11',
    icon: "💻",
    sale: false,
  },
  {
    id: 12,
    name: "SUS VivoBook Pro 14X",
    brand: "SUS",
    category: "laptops",
    price: 89990,
    specs: '14", Intel i7, 16GB RAM, Без ОС',
    icon: "💻",
    sale: true,
  },
  {
    id: 13,
    name: "Huinya MateBook X Pro",
    brand: "Huinya",
    category: "laptops",
    price: 109990,
    specs: '13.9", Intel i5, 16GB RAM, Windows 11',
    icon: "💻",
    sale: false,
  },
  {
    id: 14,
    name: "Ohnor MagicBook 16 Pro",
    brand: "Ohnor",
    category: "laptops",
    price: 79990,
    specs: '16", Ryzen 7, 16GB RAM, Windows 11',
    icon: "💻",
    sale: true,
  },
  {
    id: 15,
    name: "SUS ROG Strix G17 Ultimate",
    brand: "SUS",
    category: "laptops",
    price: 189990,
    specs: '17.3", RTX 4070, 32GB RAM, Windows 11',
    icon: "💻",
    sale: false,
  },
  {
    id: 16,
    name: "Huinya MateBook D15 Lite",
    brand: "Huinya",
    category: "laptops",
    price: 64990,
    specs: '15.6", Intel i5, 8GB RAM, Без ОС',
    icon: "💻",
    sale: false,
  },
  {
    id: 17,
    name: "Ohnor MagicBook Pro X",
    brand: "Ohnor",
    category: "laptops",
    price: 94990,
    specs: '16.1", Intel i7, 16GB RAM, HyperBugOS 2.2',
    icon: "💻",
    sale: true,
  },
  {
    id: 18,
    name: "SUS ZenBook 14 OLED",
    brand: "SUS",
    category: "laptops",
    price: 119990,
    specs: '14", Intel i7, 16GB RAM, Windows 11',
    icon: "💻",
    sale: false,
  },
  {
    id: 19,
    name: "Huinya MateBook 13s",
    brand: "Huinya",
    category: "laptops",
    price: 84990,
    specs: '13.4", Intel i5, 16GB RAM, Без ОС',
    icon: "💻",
    sale: false,
  },
  {
    id: 20,
    name: "SUS Tuff Dash F15",
    brand: "SUS",
    category: "laptops",
    price: 99990,
    specs: '15.6", RTX 3050, 8GB RAM, Windows 11',
    icon: "💻",
    sale: true,
  },
]

// Cart
let cart = []
let currentCategory = "all"

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  updateCartUI()
})

// Render products
function renderProducts() {
  const productGrid = document.getElementById("productGrid")
  const filteredProducts =
    currentCategory === "all"
      ? products
      : currentCategory === "sale"
        ? products.filter((p) => p.sale)
        : products.filter((p) => p.category === currentCategory)

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" style="position: relative;">
            ${product.sale ? '<div class="badge">АКЦИЯ</div>' : ""}
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-specs">${product.specs}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toLocaleString()} ᵴ</div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Add to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity++
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  updateCartUI()

  // Show feedback
  const btn = event.target
  const originalText = btn.textContent
  btn.textContent = "✓ Добавлено"
  btn.style.background = "#4caf50"
  setTimeout(() => {
    btn.textContent = originalText
    btn.style.background = ""
  }, 1000)
}

// Remove from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartUI()
}

// Update cart UI
function updateCartUI() {
  const cartCount = document.getElementById("cartCount")
  const cartItems = document.getElementById("cartItems")
  const cartTotal = document.getElementById("cartTotal")

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  cartCount.textContent = totalItems
  cartTotal.textContent = `${totalPrice.toLocaleString()} ᵴ`

  if (cart.length === 0) {
    cartItems.innerHTML = '<p class="empty-cart">Корзина пуста</p>'
  } else {
    cartItems.innerHTML = cart
      .map(
        (item) => `
            <div class="cart-item">
                <div class="cart-item-image">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${item.price.toLocaleString()} ᵴ × ${item.quantity}</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">✕</button>
            </div>
        `,
      )
      .join("")
  }
}

// Toggle cart
function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar")
  const overlay = document.getElementById("overlay")

  cartSidebar.classList.toggle("active")
  overlay.classList.toggle("active")
}

// Show category
function showCategory(category) {
  currentCategory = category
  renderProducts()

  // Update active nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active")
  })
  event.target.classList.add("active")
}

// Search products
function searchProducts() {
  const searchInput = document.getElementById("searchInput")
  const query = searchInput.value.toLowerCase()

  if (!query) {
    renderProducts()
    return
  }

  const productGrid = document.getElementById("productGrid")
  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(query) ||
      p.brand.toLowerCase().includes(query) ||
      p.specs.toLowerCase().includes(query),
  )

  if (filteredProducts.length === 0) {
    productGrid.innerHTML =
      '<p style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">Ничего не найдено</p>'
    return
  }

  productGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <div class="product-card" style="position: relative;">
            ${product.sale ? '<div class="badge">АКЦИЯ</div>' : ""}
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <div class="product-brand">${product.brand}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-specs">${product.specs}</div>
                <div class="product-footer">
                    <div class="product-price">${product.price.toLocaleString()} ᵴ</div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        В корзину
                    </button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")
}

// Scroll to products
function scrollToProducts() {
  document.getElementById("productsSection").scrollIntoView({ behavior: "smooth" })
}

// Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Корзина пуста!")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  alert(`Спасибо за заказ!\n\nИтого: ${total.toLocaleString()} ᵴ\n\nМы свяжемся с вами для подтверждения.`)

  cart = []
  updateCartUI()
  toggleCart()
}

// Search on Enter key
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput")
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      searchProducts()
    }
  })
})
