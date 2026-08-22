document.getElementById("order-form").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const delivery = document.getElementById("delivery").value;

localStorage.setItem("user".JSIN.stringify({
    name:name,
    phone:phone,
    address:address
}));

    if (!name || !phone || !address) {
        alert("Пожалуйста, заполните все поля");
        return;
    }

    alert(
        "Заказ оформлен!\n\n" +
        "Имя: " + name + "\n" +
        "Телефон: " + phone + "\n" +
        "Адрес: " + address + "\n" +
        "Доставка: " + delivery
    );

    localStorage.removeItem("cart");
    window.location.href = "thanks.html";
});
