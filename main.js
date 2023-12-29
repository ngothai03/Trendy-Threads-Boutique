var currentCategory = "tatca";

function addToCart(productName, productCategory) {
    var cartItemsDiv = document.getElementById("cartItems");
    var newItem = document.createElement("div");
    newItem.className = "cart-item";
    newItem.innerHTML = `<img src="product-image.jpg" alt="${productName}"><span>${productName}</span>`;
    cartItemsDiv.appendChild(newItem);

    newItem.setAttribute("data-category", productCategory);

    document.getElementById("cartContainer").style.display = "block";
}

function filterProducts(category) {
    var productCards = document.querySelectorAll(".product-card");
    productCards.forEach(card => {
        var cardCategory = card.getAttribute("data-category");
        var shouldDisplay = category === "tatca" || category === cardCategory;
        card.style.display = shouldDisplay ? "block" : "none";
    });

    // Lưu trạng thái của lựa chọn hiện tại
    currentCategory = category;
}

function closeCart() {
    document.getElementById("cartContainer").style.display = "none";
}