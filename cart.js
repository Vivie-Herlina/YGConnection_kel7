// Fungsi untuk menghitung total harga dari item yang dipilih
function updateTotalPrice() {
    let total = 0;
    document.querySelectorAll(".cart-item").forEach(item => {
        const isChecked = item.querySelector(".item-select").checked;
        if (isChecked) {
            const price = parseInt(item.getAttribute("data-price"));
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            total += price * quantity;
        }
    });
    document.getElementById("total-price").textContent = "Rp" + total.toLocaleString("id-ID");
}

// Fungsi untuk memperbarui jumlah item
function updateQuantity(button, change) {
    const quantityElem = button.parentElement.querySelector(".quantity");
    let quantity = parseInt(quantityElem.textContent);
    quantity = Math.max(1, quantity + change); // Minimal 1 item
    quantityElem.textContent = quantity;
    updateTotalPrice(); // Perbarui total harga saat jumlah berubah
}

// Fungsi untuk menghapus item dari keranjang
function removeItem(button) {
    button.closest(".cart-item").remove();
    updateTotalPrice(); // Perbarui total harga saat item dihapus
}

// Event listener untuk checkbox setiap item
document.querySelectorAll(".item-select").forEach(checkbox => {
    checkbox.addEventListener("change", updateTotalPrice);
});

// Event listener untuk checkbox "Select All"
document.getElementById("selectAll").addEventListener("change", function() {
    const isChecked = this.checked;
    document.querySelectorAll(".item-select").forEach(checkbox => {
        checkbox.checked = isChecked;
    });
    updateTotalPrice();
});
