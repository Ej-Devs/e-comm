// Initialize the cart as an empty array
let cart = [1];

// Function to add items to the cart
function addToCart(productName, price) {
    const item = { name: productName, price: price, quantity: 1 };
    cart.push(item);
    updateCartDisplay();
}
