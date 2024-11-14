// Function to increase quantity
function increaseQuantity() {
    const quantityInput = document.getElementById("quantityInput");
    let quantity = parseInt(quantityInput.value);
    if (!isNaN(quantity)) {
        quantityInput.value = ++quantity;
        updateTotal(quantity);
    }
}

// Function to decrease quantity
function decreaseQuantity() {
    const quantityInput = document.getElementById("quantityInput");
    let quantity = parseInt(quantityInput.value);
    if (!isNaN(quantity) && quantity > 1) {
        quantityInput.value = --quantity;
        updateTotal(quantity);
    }
}

// Function to update total price
function updateTotal(quantity) {
    const pricePerItem = 350000;
    const totalPrice = pricePerItem * quantity;
    document.getElementById("total").textContent = `Total (${quantity} Item${quantity > 1 ? 's' : ''}) Rp${totalPrice.toLocaleString()}`;
}

// Function to add item to cart
function addToCart() {
    alert("Item has been added to the cart!");
    // Here you would add functionality to add the item to the cart system
}
