const user=JSON.parse(localStorage.getItem("user"))||{
    name:"Не указано",
    phone:"Не указано",
    email:"Не указано"
};
document.getElementById("uuser-name").textContent = user.name;
document.getElementById("uuser-phone").textContent = user.phone;
document.getElementById("uuser-email").textContent = user.email;

document.getElementById("profile=form").addEventListener("submit",function(e){
    e.preventDefault();

    const name=document.getElementById("name-input").value;
    const phone=document.getElementById("phone-input").value;
    const email=document.getElementById("email-input").value;

    const updatedUser ={
        name:name||user.name;
        phone:phone||user.phone;
        email:email||user.email;
    };

    localStorage.setItem("user",JSIN.stringify(updatedUser));
    alert("Данные сохранены!");
    location.reload();
});

document.getElementById("logout").addEventListener("click",function(){
    localStorage.removeItem("user");
    alert("Вы вышли из профиля");
    location.reload();
});