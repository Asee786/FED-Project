// product.js (Add to this or create a new file)

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.buy-button').forEach(button => {
        button.addEventListener('click', (event) => {
            const name = event.target.getAttribute('data-name');
            const price = parseFloat(event.target.getAttribute('data-price'));
            const image = event.target.getAttribute('data-image');

            // Create a new cart item
            const cartItem = { name, price, image, quantity: 1 };

            // Get existing cart items
            const cartItems = getCartItems();

            // Check if item already exists in the cart
            const existingItem = cartItems.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity if item exists
            } else {
                cartItems.push(cartItem); // Add new item if not exists
            }

            // Save updated cart items
            saveCartItems(cartItems);

            alert('Item added to cart!');
        });
    });
});
