let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cart-items");

if (cart.length === 0) {
    cartItems.innerHTML = "<p style='color:white;font-size:20px;'>Корзина пустая</p>";
}

cart.forEach((item, index) => {
    cartItems.innerHTML += `
        <div class="product-card">
            <h2>${item.title}</h2>x
            <p class="product-price">${item.price} ₽</p>
            <button onclick="removeItem(${index})" class="product-btn">Удалить</button>
        </div>
    `;
});

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}
function updateTotal(){
    let total=0;
    cart.forEach(item=>{
        total+=item.price;
    });
    document.getElementById("total-price").innerText="Итого:"+ total + "p";
}
updateTotal();