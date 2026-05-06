const CART_STORAGE_KEY = "electromartCartV2";
const PRODUCT_IMAGE_FALLBACK = "assets/hero-electromart.png";

const products = [
    {
        id: 1,
        name: "Acer Business Laptop",
        category: "Laptop",
        brand: "Acer",
        price: 850,
        image: "https://i.pinimg.com/736x/83/8a/d6/838ad6dac83b6231587a442cccdd5ebe.jpg"
    },
    {
        id: 2,
        name: "Print ID card",
        category: "Printer",
        brand: "Evolis",
        price: 999,
        image: "https://i5.walmartimages.com/seo/Evolis-Primacy-Single-Sided-ID-Card-Printer-Complete-Supplies-Package-with-Bodno-Silver-Edition-ID-Software_57bd2e01-a4bf-485b-a783-eb998f98f0b2.ab2ab0bbedd4b2a624c326c83e5c130f.jpeg"
    },
    {
        id: 3,
        name: "Wireless Router",
        category: "Router",
        brand: "MikroTik",
        price: 120,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEJKT2YeUvIZEOtc2ZLe7UkVhVEopio7QzMQ&s"
    },
    {
        id: 4,
        name: "Cable Control",
        category: "CCTV",
        brand: "Alantek",
        price: 75,
        image: "https://ypkhmer.com/photos/main/9f9b5c1d4541c8a810c502d477a96aa0.png"
    },
    {
        id: 5,
        name: "Kobra X3D Printer",
        category: "Multifunction Printer",
        brand: "Evolis",
        price: 45,
        image: "https://eu.anycubic.com/cdn/shop/files/KX_4KG_PLA.jpg?v=1771204108&width=1946"
    },
    {
        id: 6,
        name: "MAXHUB MTR",
        category: "Interactive flat panel",
        brand: "MAXHUB",
        price: 430,
        image: "https://sgp-cstore-pub.maxhub.com/maxhub_global_public/upload/ls32jn1x/MAXHUB_MTR-banner.jpg"
    },
    {
        id: 7,
        name: "Printer Brother MFC-L2750DW",
        category: "Multifunction Printer",
        brand: "Brother",
        price: 1500,
        image: "https://content.syndigo.com/asset/fa54c450-4675-4c30-9acc-133a2e23ca4d/1920.webp"
    },
    {
        id: 8,
        name: "Ubiquiti UniFi AP AC Pro",
        category: "Access Point and Switch",
        brand: "Ubiquiti",
        price: 60,
        image: "https://www.threecubes.com.sg/cdn/shop/files/unifipackage1.png?v=1715856474&width=1445"
    },
    {
        id: 9,
        name: "Kingston NV3 1TB SSD",
        category: "Storage 64GB, 128GB, 256GB, 512GB, 1TB",
        brand: "Kingston",
        price: 69.99,
        image: "https://i.pinimg.com/736x/7f/30/7d/7f307d785721ea343136777380718fa6.jpg"
    },
    {
        id: 10,
        name: "Socomec Netys PR 3000VA UPS",
        category: "UPS",
        brand: "Socomec",
        price: 249,
        image: "https://www.awscambodia.com/assets/uploads/images/original/1549510580-1549510580136890.png"
    },
    {
        id: 11,
        name: "Fedus RJ45 Crimping Tool Kit",
        category: "Accessory",
        brand: "Commscope",
        price: 199,
        image: "https://www.fedus.in/cdn/shop/files/fedus-rj45-crimping-tool-kit-crimping-tool-for-cat6a-cat5e-connector-boot-covers-cut-strip-tool-rj45-coupler-black-7-in-1.webp?v=1754045174"
    },
    {
        id: 12,
        name: "Senor V6 2D Barcode Scanner",
        category: "Point of Sale",
        brand: "Senor",
        price: 179,
        image: "https://www.senortech.com/wp-content/uploads/2021/08/V_series_V6_500x500.png"
    },
    {
        id: 13,
        name: "M325S Wireless Mouse",
        category: "Accessory",
        brand: "Logitech",
        price: 18.99,
        image: "https://i.pinimg.com/1200x/5a/2a/f8/5a2af832c9abb5f2df29180e823ff26f.jpg"
    },
    {
        id: 14,
        name: "Wireless Headset",
        category: "Audio",
        brand: "Logitech",
        price: 120,
        image: "https://i.pinimg.com/736x/66/62/7e/66627e65c5484b44a7784e4ea85a6a7f.jpg"
    },
    {
        id: 15,
        name: "ViewSonic Monitor",
        category: "Monitor",
        brand: "ViewSonic",
        price: 249,
        image: "https://m.media-amazon.com/images/I/71VIOc7ityL.jpg"
    },
    {
        id: 16,
        name: "Logitech Driving Force G29 Racing Wheel",
        category: "Gaming",
        brand: "Logitech",
        price: 199,
        image: "https://i5.walmartimages.com/seo/Logitech-Driving-Force-G29-Racing-Wheel-for-PlayStation-4-and-PlayStation-3-Non-Retail-Packaging_28566fe5-8d6d-42e7-bde3-eba9bdce8c17.b3e44f28dc9f635ab525c4cafba64477.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
    },
    {
        id: 17,
        name: "Apple MacBook Air M2",
        category: "Laptop",
        brand: "Apple",
        price: 999,
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 18,
        name: "Samsung Galaxy S24 Ultra",
        category: "Phone",
        brand: "Samsung",
        price: 1199,
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 19,
        name: "Sony WH-1000XM5 Headphones",
        category: "Audio",
        brand: "Sony",
        price: 349,
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 20,
        name: "Apple iPad Pro 11",
        category: "Tablet",
        brand: "Apple",
        price: 799,
        image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 21,
        name: "Canon EOS R50 Camera",
        category: "Camera",
        brand: "Canon",
        price: 679,
        image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 22,
        name: "ASUS ROG Gaming Laptop",
        category: "Laptop",
        brand: "ASUS",
        price: 1399,
        image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 23,
        name: "Anker USB-C Hub",
        category: "Accessory",
        brand: "Anker",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 24,
        name: "TP-Link Archer AX55 Router",
        category: "Router",
        brand: "TP-Link",
        price: 129,
        image: "https://images.unsplash.com/photo-1606904825846-647eb07f5be2?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 25,
        name: "Apple Watch Series 9",
        category: "Wearable",
        brand: "Apple",
        price: 399,
        image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 26,
        name: "JBL Charge 5 Speaker",
        category: "Audio",
        brand: "JBL",
        price: 179,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 27,
        name: "Dell UltraSharp 27 Monitor",
        category: "Monitor",
        brand: "Dell",
        price: 429,
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 28,
        name: "Razer BlackWidow Keyboard",
        category: "Keyboard",
        brand: "Razer",
        price: 149,
        image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 29,
        name: "SanDisk Extreme Portable SSD",
        category: "Storage",
        brand: "SanDisk",
        price: 119,
        image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=900&q=80"
    },
    {
        id: 30,
        name: "DJI Mini Drone",
        category: "Camera",
        brand: "DJI",
        price: 459,
        image: "https://images.unsplash.com/photo-1506947411487-a56738267384?auto=format&fit=crop&w=900&q=80"
    }
];

function loadCart() {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);

    if (!savedCart) {
        return [];
    }

    try {
        return JSON.parse(savedCart);
    } catch (error) {
        return [];
    }
}

function saveCart() {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

let cart = loadCart();
let selectedBrand = "all";

function updateCartMenuCount() {
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    document.querySelectorAll(".nav-cart-count").forEach(link => {
        link.innerText = `Cart (${totalQuantity})`;
    });
}

function displayProducts(productArray) {
    const productList = document.getElementById("productList");

    if (!productList) {
        return;
    }

    productList.innerHTML = "";

    if (productArray.length === 0) {
        productList.innerHTML = "<p>No products found.</p>";
        return;
    }

    productArray.forEach(product => {
        productList.innerHTML += `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='${PRODUCT_IMAGE_FALLBACK}';">
                <div class="product-card-content">
                    <h3>${product.name}</h3>
                    <p class="category">${product.brand} | ${product.category}</p>
                    <p class="price">$${product.price}</p>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

function addToCart(productId) {
    const product = products.find(item => item.id === productId);

    if (!product) {
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    updateCartMenuCount();
    window.location.href = "cart.html";
}

function showCart() {
    const cartPanel = document.getElementById("cart");
    const container = document.querySelector(".container");

    if (!cartPanel || !container) {
        window.location.href = "cart.html";
        return;
    }

    cartPanel.classList.remove("cart-hidden");
    container.classList.add("cart-open");
}

function hideCart() {
    const cartPanel = document.getElementById("cart");
    const container = document.querySelector(".container");

    if (!cartPanel || !container) {
        return;
    }

    cartPanel.classList.add("cart-hidden");
    container.classList.remove("cart-open");
}

function displayCart() {
    const cartItems = document.getElementById("cartItems");
    const subtotalPrice = document.getElementById("subtotalPrice");
    const deliveryPrice = document.getElementById("deliveryPrice");
    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems || !subtotalPrice || !deliveryPrice || !totalPrice) {
        return;
    }

    cartItems.innerHTML = "";
    let subtotal = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = "<p>Your cart is empty.</p>";
    }

    cart.forEach(item => {
        subtotal += item.price * item.quantity;

        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>${item.brand} | ${item.category}</p>
                    <div class="cart-actions">
                        <button onclick="decreaseQuantity(${item.id})">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="increaseQuantity(${item.id})">+</button>
                    </div>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
    });

    const delivery = cart.length > 0 ? 10 : 0;
    subtotalPrice.innerText = subtotal;
    deliveryPrice.innerText = delivery;
    totalPrice.innerText = subtotal + delivery;
}

function displayCartPage() {
    const cartPageItems = document.getElementById("cartPageItems");
    const subtotalAmount = document.getElementById("cartSubtotalAmount");
    const deliveryAmount = document.getElementById("cartDeliveryAmount");
    const totalAmount = document.getElementById("cartTotalAmount");
    const paymentButton = document.getElementById("cartPaymentButton");

    if (!cartPageItems) {
        return;
    }

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const delivery = cart.length > 0 ? 10 : 0;
    const total = subtotal + delivery;

    if (subtotalAmount && deliveryAmount && totalAmount && paymentButton) {
        subtotalAmount.innerText = `$${subtotal.toFixed(2)}`;
        deliveryAmount.innerText = `$${delivery.toFixed(2)}`;
        totalAmount.innerText = `$${total.toFixed(2)}`;
        paymentButton.classList.toggle("disabled", cart.length === 0);
        paymentButton.setAttribute("aria-disabled", String(cart.length === 0));
    }

    if (cart.length === 0) {
        cartPageItems.innerHTML = `
            <section class="cart-page-card" aria-label="Empty cart">
                <div class="cart-page-info">
                    <h2>Your cart is empty.</h2>
                    <p>Choose a product from the shop to add it here.</p>
                </div>
            </section>
        `;
        return;
    }

    cartPageItems.innerHTML = cart.map(item => `
        <section class="cart-page-card" aria-label="${item.name}">
            <img src="${item.image}" alt="${item.name}">

            <div class="cart-page-info">
                <h2>${item.name}</h2>
                <p>${item.brand}</p>
                <p>${item.category}</p>
                <strong>In Stock</strong>

                <div class="cart-page-quantity" aria-label="Quantity">
                    <button type="button" onclick="decreaseQuantity(${item.id})" aria-label="Decrease quantity">-</button>
                    <span>${item.quantity}</span>
                    <button type="button" onclick="increaseQuantity(${item.id})" aria-label="Increase quantity">+</button>
                </div>
            </div>

            <div class="cart-page-price">
                <strong>$${(item.price * item.quantity).toFixed(2)}</strong>
            </div>

            <div class="cart-page-actions">
                <button type="button" onclick="removeFromCart(${item.id})" aria-label="Remove item">
                    <span aria-hidden="true">&#128465;</span>
                    Remove
                </button>
                <button type="button" aria-label="Move item to wishlist">
                    <span aria-hidden="true">&#9825;</span>
                    Move to Wishlist
                </button>
            </div>
        </section>
    `).join("");
}

function increaseQuantity(productId) {
    const item = cart.find(product => product.id === productId);

    if (!item) {
        return;
    }

    item.quantity++;
    saveCart();
    updateCartMenuCount();
    displayCart();
    displayCartPage();
}

function decreaseQuantity(productId) {
    const item = cart.find(product => product.id === productId);

    if (!item) {
        return;
    }

    if (item.quantity > 1) {
        item.quantity--;
    } else {
        removeFromCart(productId);
        return;
    }

    saveCart();
    updateCartMenuCount();
    displayCart();
    displayCartPage();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartMenuCount();
    displayCart();
    displayCartPage();
}

function filterProducts() {
    const searchValue = document.getElementById("searchInput").value.trim().toLowerCase();
    const categoryValue = document.getElementById("categoryFilter").value;
    const priceValue = document.getElementById("priceFilter").value;
    const productSection = document.getElementById("products");
    const productList = document.getElementById("productList");

    productSection.classList.toggle("search-active", Boolean(searchValue));

    const exactProduct = products.find(product => product.name.toLowerCase() === searchValue);

    if (exactProduct) {
        displayProducts([exactProduct]);
        productList.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
    }

    const filteredProducts = products.filter(product => {
        const matchesSearch =
            product.name.toLowerCase().includes(searchValue) ||
            product.brand.toLowerCase().includes(searchValue) ||
            product.category.toLowerCase().includes(searchValue);
        const matchesCategory = categoryValue === "all" || product.category === categoryValue;
        const matchesBrand = selectedBrand === "all" || product.brand === selectedBrand;

        let matchesPrice = true;

        if (priceValue === "low") {
            matchesPrice = product.price < 100;
        } else if (priceValue === "medium") {
            matchesPrice = product.price >= 100 && product.price <= 500;
        } else if (priceValue === "high") {
            matchesPrice = product.price > 500;
        }

        return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
    });

    displayProducts(filteredProducts);

    if (searchValue) {
        productList.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Thank you for shopping with ElectroMart!");
        cart = [];
        saveCart();
        updateCartMenuCount();
        displayCart();
        displayCartPage();
    }
}

updateCartMenuCount();
displayProducts(products);
displayCart();
displayCartPage();

const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", event => {
        event.preventDefault();
        alert("Thank you for contacting ElectroMart. We will reply soon.");
        contactForm.reset();
    });
}

document.querySelectorAll(".cart-toggle").forEach(button => {
    button.addEventListener("click", event => {
        event.preventDefault();
        window.location.href = "payment.html";
    });
});

document.querySelectorAll(".brand-tile").forEach(tile => {
    tile.addEventListener("click", event => {
        if (tile.dataset.openPage === "true") {
            return;
        }

        event.preventDefault();
        selectedBrand = tile.dataset.brand;

        document.querySelectorAll(".brand-tile").forEach(item => {
            item.classList.toggle("active", item === tile);
        });

        filterProducts();
        document.getElementById("products").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.querySelectorAll(".gallery-arrow").forEach(button => {
    button.addEventListener("click", () => {
        const gallery = document.getElementById("productGallery");

        if (!gallery) {
            return;
        }

        const direction = Number(button.dataset.galleryDirection);
        gallery.scrollBy({
            left: direction * gallery.clientWidth * 0.8,
            behavior: "smooth"
        });
    });
});
