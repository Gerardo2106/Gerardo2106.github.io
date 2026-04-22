let itemImages = ["img/f_2a.png", "img/3pck.webp", "img/socks.webp"];
document.getElementById("item-img1").src = itemImages[0];
let prices = [79.99, 29.99, 19.99];
const shippingCosts = {
    standard: 0,
    express: 5.99,
    two: 15.99
};
const promoCodes = {
    SAVE10: 0.10,
    SAVE20: 0.20
};
document.getElementById("update-btn").addEventListener("click", function () {
    let qty1 = document.getElementById("qty1").value;
    let qty2 = document.getElementById("qty2").value;
    let qty3 = document.getElementById("qty3").value;

    let subtotal1 = prices[0] * qty1;
    let subtotal2 = prices[1] * qty2;
    let subtotal3 = prices[2] * qty3;

    document.getElementById("subtotal1").textContent = "Subtotal: $" + subtotal1.toFixed(2);
    document.getElementById("subtotal2").textContent = "Subtotal: $" + subtotal2.toFixed(2);
    document.getElementById("subtotal3").textContent = "Subtotal: $" + subtotal3.toFixed(2);

    let cartSubtotal = subtotal1 + subtotal2 + subtotal3;
    let shippingMethod = document.querySelector('input[name="shipping-method"]:checked').value;
    let shippingCost = 0;

    if (shippingMethod === "standard") {
        shippingCost = 0;
    } else if (shippingMethod === "express") {
        shippingCost = 5.99;
    } else if (shippingMethod === "two") {
        shippingCost = 15.99;
    }
    let code = document.getElementById("promo-code").value.toUpperCase();
    let discountRate = 0;
    if (code === "SAVE10") {
        discountRate = promoCodes.SAVE10;
        document.getElementById("promo-message").textContent = "Code applied: 10% off!";
        document.getElementById("promo-message").style.color = "green";
    } else if (code === "SAVE20") {
        discountRate = promoCodes.SAVE20;
        document.getElementById("promo-message").textContent = "Code applied: 20% off!";
        document.getElementById("promo-message").style.color = "green";
    } else if (code === "") {
        discountRate = 0;
        document.getElementById("promo-message").textContent = "";
    } else {
        discountRate = 0;
        document.getElementById("promo-message").textContent = "Invalid promo code.";
        document.getElementById("promo-message").style.color = "red";
    }
    let discountAmount = cartSubtotal * discountRate;
    let taxableAmount = cartSubtotal - discountAmount + shippingCost;
    let tax = taxableAmount * 0.08;
    let total = taxableAmount + tax;
    document.getElementById("subtotal").textContent = "$" + cartSubtotal.toFixed(2);
    document.getElementById("shipping-cost").textContent = shippingCost === 0 ? "Free" : "$" + shippingCost.toFixed(2);
    document.getElementById("discount").textContent = "-$" + discountAmount.toFixed(2);
    document.getElementById("tax").textContent = "$" + tax.toFixed(2);
    document.getElementById("total").textContent = "$" + total.toFixed(2);
});

document.getElementById("checkout-btn").addEventListener("click", function () {
    alert("Thank you for your purchase!");
});