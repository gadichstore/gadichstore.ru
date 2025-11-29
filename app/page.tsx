"use client"

import { useState } from "react"
import "./gadich-store.css"

const generateRandomDiscount = () => {
  const discounts = [15, 20, 25, 35, 45, 55, 65, 75, 85]
  return discounts[Math.floor(Math.random() * discounts.length)]
}

export default function GadichStore() {
  const [cart, setCart] = useState<any[]>([])
  const [currentCategory, setCurrentCategory] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [isCartOpen, setIsCartOpen] = useState(false)

  const getOriginalPrice = (currentPrice: number, discount: number) => {
    return Math.round(currentPrice / (1 - discount / 100))
  }

  const products = [
    // Phones - SIGMA with SigmaOS
    {
      id: 1,
      name: "SIGMA Pro Max Ultra",
      brand: "SIGMA",
      category: "phones",
      price: 89990,
      discount: 0,
      specs: '6.7", 256GB, 12GB RAM, SigmaOS 5',
      icon: "📱",
      sale: false,
    },
    {
      id: 2,
      name: "SIGMA Fold 5 Extreme",
      brand: "SIGMA",
      category: "phones",
      price: 149990,
      discount: 0,
      specs: '7.6", 512GB, 12GB RAM, SigmaOS 5',
      icon: "📱",
      sale: false,
    },
    {
      id: 3,
      name: "SIGMA Ultra",
      brand: "SIGMA",
      category: "phones",
      price: 79990,
      discount: generateRandomDiscount(),
      specs: '6.5", 128GB, 8GB RAM, SigmaOS 5',
      icon: "📱",
      sale: true,
    },
    // Phones - gnusmaS with VantuziUI
    {
      id: 4,
      name: "gnusmaS S20 FE",
      brand: "gnusmaS",
      category: "phones",
      price: 44990,
      discount: generateRandomDiscount(),
      specs: '6.4", 128GB, 6GB RAM, VantuziUI 8',
      icon: "📱",
      sale: true,
    },
    {
      id: 5,
      name: "gnusmaS S21 FE",
      brand: "gnusmaS",
      category: "phones",
      price: 49990,
      discount: 0,
      specs: '6.5", 256GB, 8GB RAM, VantuziUI 8',
      icon: "📱",
      sale: false,
    },
    {
      id: 6,
      name: "gnusmaS 888",
      brand: "gnusmaS",
      category: "phones",
      price: 64990,
      discount: 0,
      specs: '6.3", 256GB, 8GB RAM, VantuziUI 8',
      icon: "📱",
      sale: false,
    },
    {
      id: 7,
      name: "gnusmaS Note 7",
      brand: "gnusmaS",
      category: "phones",
      price: 69990,
      discount: generateRandomDiscount(),
      specs: '6.7", 512GB, 12GB RAM, VantuziUI 8',
      icon: "📱",
      sale: true,
    },
    {
      id: 8,
      name: "gnusmaS S24 Ultra",
      brand: "gnusmaS",
      category: "phones",
      price: 79990,
      discount: 0,
      specs: '6.8", 256GB, 12GB RAM, VantuziUI 8',
      icon: "📱",
      sale: false,
    },
    // Phones - SUS with XUI
    {
      id: 9,
      name: "SUS Phone 15 Pro Max",
      brand: "SUS",
      category: "phones",
      price: 94990,
      discount: 0,
      specs: '6.8", 512GB, 16GB RAM, XUI 10',
      icon: "📱",
      sale: false,
    },
    {
      id: 10,
      name: "SUS Phone SE Mini",
      brand: "SUS",
      category: "phones",
      price: 54990,
      discount: generateRandomDiscount(),
      specs: '5.8", 128GB, 6GB RAM, XUI 10',
      icon: "📱",
      sale: true,
    },
    // Phones - Hlaomi with HyperBugOS
    {
      id: 11,
      name: "Hlaomi 14T Ultra Turbo",
      brand: "Hlaomi",
      category: "phones",
      price: 69990,
      discount: generateRandomDiscount(),
      specs: '6.6", 256GB, 12GB RAM, HyperBugOS 2.2',
      icon: "📱",
      sale: true,
    },
    {
      id: 12,
      name: "Hlaomi Poco X6 Pro",
      brand: "Hlaomi",
      category: "phones",
      price: 29990,
      discount: 0,
      specs: '6.5", 256GB, 8GB RAM, HyperBugOS 2.2',
      icon: "📱",
      sale: false,
    },
    // Phones - Rigmi with HyperBugOS
    {
      id: 13,
      name: "Rigmi Note 13 Pro Plus",
      brand: "Rigmi",
      category: "phones",
      price: 34990,
      discount: 0,
      specs: '6.4", 128GB, 8GB RAM, HyperBugOS 2.2',
      icon: "📱",
      sale: false,
    },
    {
      id: 14,
      name: "Rigmi K60 Gaming Edition",
      brand: "Rigmi",
      category: "phones",
      price: 49990,
      discount: 0,
      specs: '6.7", 256GB, 12GB RAM, HyperBugOS 2.2',
      icon: "📱",
      sale: false,
    },

    // Laptops - SUS
    {
      id: 21,
      name: "SUS Tuff Gaming A15 RTX",
      brand: "SUS",
      category: "laptops",
      price: 124990,
      discount: 0,
      specs: '15.6", Intel i5, RTX 4060, 16GB RAM, 512GB SSD, Windows 11',
      icon: "💻",
      sale: false,
    },
    {
      id: 22,
      name: "SUS VivoBook Pro 14X",
      brand: "SUS",
      category: "laptops",
      price: 89990,
      discount: generateRandomDiscount(),
      specs: '14", Intel i7, Встроенная графика, 16GB RAM, 256GB M.2 SSD, Без ОС',
      icon: "💻",
      sale: true,
    },
    {
      id: 23,
      name: "SUS ROG Strix G17 Ultimate",
      brand: "SUS",
      category: "laptops",
      price: 189990,
      discount: 0,
      specs: '17.3", Intel i9, RTX 4070, 32GB RAM, 1TB M.2 SSD, Windows 11',
      icon: "💻",
      sale: false,
    },
    {
      id: 24,
      name: "SUS ZenBook 14 OLED",
      brand: "SUS",
      category: "laptops",
      price: 119990,
      discount: 0,
      specs: '14", Intel i7, Встроенная графика, 16GB RAM, 512GB M.2 SSD, Windows 11',
      icon: "💻",
      sale: false,
    },
    {
      id: 25,
      name: "SUS Tuff Dash F15",
      brand: "SUS",
      category: "laptops",
      price: 99990,
      discount: generateRandomDiscount(),
      specs: '15.6", Ryzen 5, RTX 3050, 8GB RAM, 512GB SSD, Windows 11',
      icon: "💻",
      sale: true,
    },
    // Laptops - Huinya
    {
      id: 26,
      name: "Huinya MateBook X Pro",
      brand: "Huinya",
      category: "laptops",
      price: 109990,
      discount: 0,
      specs: '13.9", Intel i5, Встроенная графика, 16GB RAM, 512GB M.2 SSD, Windows 11',
      icon: "💻",
      sale: false,
    },
    {
      id: 27,
      name: "Huinya MateBook D15 Lite",
      brand: "Huinya",
      category: "laptops",
      price: 64990,
      discount: 0,
      specs: '15.6", Ryzen 5, Встроенная графика, 8GB RAM, 256GB SSD, Без ОС',
      icon: "💻",
      sale: false,
    },
    {
      id: 28,
      name: "Huinya MateBook 13s",
      brand: "Huinya",
      category: "laptops",
      price: 84990,
      discount: 0,
      specs: '13.4", Intel i5, Встроенная графика, 16GB RAM, 512GB M.2 SSD, Без ОС',
      icon: "💻",
      sale: false,
    },
    // Laptops - Ohnor
    {
      id: 29,
      name: "Ohnor MagicBook 16 Pro",
      brand: "Ohnor",
      category: "laptops",
      price: 79990,
      discount: generateRandomDiscount(),
      specs: '16", Ryzen 7, RTX 3060, 16GB RAM, 512GB SSD, Windows 11',
      icon: "💻",
      sale: true,
    },
    {
      id: 30,
      name: "Ohnor MagicBook Pro X",
      brand: "Ohnor",
      category: "laptops",
      price: 94990,
      discount: generateRandomDiscount(),
      specs: '16.1", Intel i7, RTX 4050, 16GB RAM, 512GB M.2 SSD, Windows 11',
      icon: "💻",
      sale: true,
    },

    // RAM - Downloadable
    {
      id: 41,
      name: "DDR4 8GB 3200MHz Download",
      brand: "Gadich",
      category: "ram",
      price: 0,
      discount: 0,
      specs: '8GB, DDR4, 3200MHz',
      icon: "⬇️",
      sale: false,
    },
    {
      id: 42,
      name: "DDR4 16GB 3600MHz Download",
      brand: "Gadich",
      category: "ram",
      price: 0,
      discount: 0,
      specs: '16GB, DDR4, 3600MHz',
      icon: "⬇️",
      sale: false,
    },
    {
      id: 43,
      name: "DDR5 16GB 5600MHz Download",
      brand: "Gadich",
      category: "ram",
      price: 0,
      discount: 0,
      specs: '16GB, DDR5, 5600MHz',
      icon: "⬇️",
      sale: false,
    },
    {
      id: 44,
      name: "DDR5 32GB 6000MHz Download",
      brand: "Gadich",
      category: "ram",
      price: 0,
      discount: 0,
      specs: '32GB, DDR5, 6000MHz',
      icon: "⬇️",
      sale: false,
    },
  ]

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      currentCategory === "all" ? true : currentCategory === "sale" ? p.sale : p.category === currentCategory
    const matchesSearch =
      searchQuery === ""
        ? true
        : p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.specs.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (productId: number) => {
    const product = products.find((p) => p.id === productId)
    if (!product) return

    const existingItem = cart.find((item) => item.id === productId)
    if (existingItem) {
      setCart(cart.map((item) => (item.id === productId ? { ...item, quantity: item.quantity + 1 } : item)))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((item) => item.id !== productId))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const checkout = () => {
    if (cart.length === 0) {
      alert("Корзина пуста!")
      return
    }
    alert(`Спасибо за заказ!\n\nИтого: ${totalPrice.toLocaleString()} ᵴ\n\nМы свяжемся с вами для подтверждения.`)
    setCart([])
    setIsCartOpen(false)
  }

  const downloadRAM = (productName: string) => {
    alert(`⚠️ ЗАГРУЗКА: ${productName}\n\n✓ Без вирусов, закачайте\n✓ Без вирусов, закачайте\n✓ Без вирусов, закачайте`)
  }

  return (
    <div className="gadich-store">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="logo">
              <h1>Gadich Store</h1>
              <p className="tagline">Электроника и гаджеты</p>
            </div>
            <div className="search-bar">
              <input
                type="text"
                placeholder="Поиск товаров..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && setSearchQuery(e.currentTarget.value)}
              />
              <button className="search-btn">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="header-actions">
              <button className="icon-btn" onClick={() => setIsCartOpen(!isCartOpen)}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 2L7 6H3l3 9h12l3-9h-4l-2-4H9z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinejoin="round"
                  />
                  <circle cx="9" cy="20" r="1" fill="currentColor" />
                  <circle cx="18" cy="20" r="1" fill="currentColor" />
                </svg>
                <span className="cart-count">{totalItems}</span>
              </button>
            </div>
          </div>
          <nav className="nav">
            <a
              href="#"
              className={currentCategory === "all" ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                e.preventDefault()
                setCurrentCategory("all")
              }}
            >
              Все товары
            </a>
            <a
              href="#"
              className={currentCategory === "phones" ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                e.preventDefault()
                setCurrentCategory("phones")
              }}
            >
              Смартфоны
            </a>
            <a
              href="#"
              className={currentCategory === "laptops" ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                e.preventDefault()
                setCurrentCategory("laptops")
              }}
            >
              Ноутбуки
            </a>
            <a
              href="#"
              className={currentCategory === "ram" ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                e.preventDefault()
                setCurrentCategory("ram")
              }}
            >
              Загрузить ОЗУ
            </a>
            <a
              href="#"
              className={currentCategory === "sale" ? "nav-link active" : "nav-link"}
              onClick={(e) => {
                e.preventDefault()
                setCurrentCategory("sale")
              }}
            >
              Акции
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h2 className="hero-title">Новинки электроники</h2>
            <p className="hero-subtitle">Смартфоны и ноутбуки по лучшим ценам</p>
            <button
              className="btn-primary"
              onClick={() => document.getElementById("productsSection")?.scrollIntoView({ behavior: "smooth" })}
            >
              Смотреть каталог
            </button>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <h2 className="section-title">Категории</h2>
          <div className="category-grid">
            <div className="category-card" onClick={() => setCurrentCategory("phones")}>
              <div className="category-icon">📱</div>
              <h3>Смартфоны</h3>
              <p>Все бренды</p>
            </div>
            <div className="category-card" onClick={() => setCurrentCategory("laptops")}>
              <div className="category-icon">💻</div>
              <h3>Ноутбуки</h3>
              <p>Для работы и игр</p>
            </div>
            <div className="category-card" onClick={() => setCurrentCategory("ram")}>
              <div className="category-icon">⬇️</div>
              <h3>Загрузить ОЗУ</h3>
              <p>Бесплатно!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="products" id="productsSection">
        <div className="container">
          <h2 className="section-title">{currentCategory === "ram" ? "Загрузить оперативную память" : "Каталог товаров"}</h2>
          <div className="product-grid">
            {filteredProducts.length === 0 ? (
              <p style={{ gridColumn: "1/-1", textAlign: "center", padding: "40px", color: "#666" }}>
                Ничего не найдено
              </p>
            ) : (
              filteredProducts.map((product) => {
                const originalPrice = product.discount > 0 ? getOriginalPrice(product.price, product.discount) : 0
                
                return (
                  <div key={product.id} className="product-card" style={{ position: "relative" }}>
                    {product.sale && (
                      <div style={{ position: "absolute", top: "10px", right: "10px", background: "#ff4444", color: "white", padding: "8px 12px", borderRadius: "4px", fontWeight: "bold", zIndex: 10 }}>
                        РАСПРОДАЖА
                      </div>
                    )}
                    {product.sale && (
                      <div style={{ position: "absolute", top: "10px", left: "10px", background: "#ff1744", color: "white", padding: "6px 10px", borderRadius: "3px", fontSize: "12px", fontWeight: "bold", zIndex: 10 }}>
                        -{product.discount}%
                      </div>
                    )}
                    <div className="product-image">{product.icon}</div>
                    <div className="product-info">
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-name">{product.name}</div>
                      <div className="product-specs">{product.specs}</div>
                      {product.sale && product.discount > 0 && (
                        <div style={{ fontSize: "12px", color: "#999", textDecoration: "line-through", marginTop: "8px" }}>
                          Стоило {originalPrice.toLocaleString()} ᵴ
                        </div>
                      )}
                      <div className="product-footer">
                        <div className="product-price">
                          {product.category === "ram" ? (
                            <span style={{ color: "#00bcd4", fontWeight: "bold" }}>Бесплатно</span>
                          ) : (
                            `${product.price.toLocaleString()} ᵴ`
                          )}
                        </div>
                        {product.category === "ram" ? (
                          <button
                            className="btn-add-cart"
                            onClick={() => {
                              downloadRAM(product.name)
                            }}
                            style={{ background: "#00bcd4" }}
                          >
                            ⬇️ Скачать
                          </button>
                        ) : (
                          <button className="btn-add-cart" onClick={() => addToCart(product.id)}>
                            В корзину
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </section>

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "active" : ""}`}>
        <div className="cart-header">
          <h3>Корзина</h3>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>
            ✕
          </button>
        </div>
        <div className="cart-items">
          {cart.length === 0 ? (
            <p className="empty-cart">Корзина пуста</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">{item.icon}</div>
                <div className="cart-item-info">
                  <div className="cart-item-name">{item.name}</div>
                  <div className="cart-item-price">
                    {item.price.toLocaleString()} ᵴ × {item.quantity}
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
        <div className="cart-footer">
          <div className="cart-total">
            <span>Итого:</span>
            <span>{totalPrice.toLocaleString()} ᵴ</span>
          </div>
          <button className="btn-primary btn-full" onClick={checkout}>
            Оформить заказ
          </button>
        </div>
      </div>

      {/* Overlay */}
      <div className={`overlay ${isCartOpen ? "active" : ""}`} onClick={() => setIsCartOpen(false)}></div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <h4>Gadich Store</h4>
              <p>Интернет-магазин электроники и гаджетов</p>
            </div>
            <div className="footer-col">
              <h4>Покупателям</h4>
              <a href="#">Доставка</a>
              <a href="#">Оплата</a>
              <a href="#">Гарантия</a>
            </div>
            <div className="footer-col">
              <h4>Контакты</h4>
              <a
                href="https://www.google.com/search?q=gadichstore@europe.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                gadichstore@europe.com
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Gadich Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
