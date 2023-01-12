let productsCountEL = document.getElementById("products-count");

 let addToCartBtns = document.querySelectorAll(".add-btn");
 console.log(addToCartBtns);

 for (let i = 0; i < addToCartBtns.length; i++){
     addToCartBtns[i].addEventListener("click", function () {
         productsCountEL.textContent = +productsCountEL.textContent + 1;
        
     });
}


// LIKE
 
let likeBtns = document.querySelectorAll(".like");
console.log(likeBtns);
likeBtns.forEach((btn) =>
    btn.addEventListener("click", function (e) {
        // if (btn.classList.contains("liked")) {
        //     btn.classList.remove("liked");
        // } else {
        //     btn.classList.add("liked");
        // }
        e.target.classList.toggle("liked");
        e.target.style.transition = "all 0.4s ease-out";
    })
);

let moreDetailsBtns = document.querySelectorAll(".more-detail");
let modal = document.querySelector(".modal");

let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
    modal.classList.add("show");
    modal.classList.remove("hide");
}

function closeModal() {
    modal.classList.remove("show");
    modal.classList.add("hide");
}
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        closeModal();
    }
});


// slider

$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots:true,
});


//Scroll

window.addEventListener("scroll", onScroll)
function onScroll() {
      if(scrollY >= 1300) {openModal()
        window.removeEventListener("scroll",onScroll)
    }
};
