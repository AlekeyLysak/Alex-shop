const count = document.querySelector(".red");
const backColCount = document.querySelector(".products-count");
const btns = document.querySelectorAll(".add-btn");
const arrButtons = Array.from(btns);
const addToCart = () => {
    count.textContent++;
    if (count.textContent !== 0) { backColCount.classList.add(".red") };
};
arrButtons.forEach(x => x.addEventListener("click", addToCart));
