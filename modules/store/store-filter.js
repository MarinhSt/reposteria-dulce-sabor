const filter_btn = document.querySelector(".filter--tittle__container--img");
const filter__container =  document.querySelector(".filter");
const filter__buttons =  document.querySelectorAll(".filter__button");
const stock__items = document.querySelectorAll(".card");
const search__box =  document.querySelector(".search__input");

filter_btn.addEventListener("click",(e) => filter__container.classList.toggle("none"));

filter__buttons.forEach(button => {
    button.addEventListener("click",(e) => {
        const filter = e.target.dataset.filter;
        stock__items.forEach(item => {
            if(filter === "todos"){
                item.classList.remove("none")
            }else{
                if(item.classList.contains(filter)){
                    item.classList.remove("none");
                }else{
                    item.classList.add("none");
                }
            }
        })
    })
});


search__box.addEventListener("keyup",(e)=>{
    // const search = e.key.toLowerCase().trim();
    const search = e.target.value.toLowerCase().trim();
    stock__items.forEach(item => {
        console.log(item.textContent.includes(search));
        if(item.textContent.includes(search)){
            item.classList.remove("none")
        }else{
            item.classList.add("none");
        }
    })
})

