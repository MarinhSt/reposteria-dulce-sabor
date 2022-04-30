const cart_btn = document.querySelector(".cart-btn");
const cart =  document.querySelector(".cart");

// const stock__items =  document.querySelectorAll(".card");
const cart__add =  document.querySelectorAll(".shopping--cart--add");

cart_btn.addEventListener("click",(e) => cart.classList.toggle("none"));

cart__add.forEach((cart_button)=> {
    cart_button.addEventListener("click",(e) => {
        console.log("item add");
        console.log(e)
})});


// cart__element.innerHTML =
// `<div class="cart--element">
// <picture class="cart__container--img">
//     <img
//         class="cart__img"
//         src="./img/cake-1.jpeg"
//         alt=""
//     />
// </picture>
// <div class="cart--element__text">
//     <h6 class="cart--element__title">
//         ${element_stock}
//     </h6>
//     <span class="cart--element__value"
//         >$ ${12.500}</span
//     >
// </div>
// <picture class="cart__container--delete">
//     <img
//         class="cart__delete"
//         src="./fi-rr-trash.svg"
//         alt=""
//     />
// </picture>
// </div>`
