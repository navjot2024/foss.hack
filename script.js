document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    const cart = document.getElementById("cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productRow = this.closest("tr");
            const productName = productRow.querySelector(".product-info h3").textContent;
            const productPrice = productRow.cells[1].textContent;
            const productQuantity = productRow.querySelector(".quantity-input").value;

            // Clear "No items in the cart" message
            if (cart.querySelector("p")) {
                cart.innerHTML = "";
            }

            // Add product to the cart
            const cartItem = document.createElement("div");
            cartItem.innerHTML = `
                <p>
                    <strong>${productName}</strong><br>
                    Quantity: ${productQuantity}<br>
                    Price: ${productPrice}
                </p>
                <hr>
            `;
            cart.appendChild(cartItem);
        });
    });
});
