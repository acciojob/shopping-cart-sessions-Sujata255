const products = [
    { id: 1, name: 'Product1', price: 10 },
    { id: 2, name: 'Product2', price: 30 },
    { id: 3, name: 'Product3', price: 50 },
    { id: 4, name: 'Product4', price: 40 },
    { id: 5, name: 'Product5', price: 50 }
];

const productListEl = document.getElementById('product-list');
const cartListEl = document.getElementById('cart-list');
const clearCartBtn = document.getElementById('clear-cart-btn');

// Initialize Cart from Session Storage
let cart = JSON.parse(sessionStorage.getItem('cart')) || [];

// Render the list of products
function renderProducts() {
    products.forEach(product => {
        const productItem = document.createElement('li');
        productItem.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
        productListEl.appendChild(productItem);
    });
}

// Render the Cart
function renderCart() {
    cartListEl.innerHTML = ''; // Clear the current cart display
    cart.forEach(product => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${product.name} - $${product.price}`;
        cartListEl.appendChild(cartItem);
    });
}

// Add Product to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        sessionStorage.setItem('cart', JSON.stringify(cart)); // Store cart in sessionStorage
        renderCart(); // Update the cart display
    }
}

// Clear Cart
clearCartBtn.addEventListener('click', () => {
    cart = [];
    sessionStorage.removeItem('cart'); // Clear the cart from sessionStorage
    renderCart(); // Update the cart display
});

// Initial rendering
renderProducts(); // Display the products on page load
renderCart(); // Display the cart on page load, reflecting any items stored in sessionStorage
