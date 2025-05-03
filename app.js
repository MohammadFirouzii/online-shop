// ProductsMenu
const ProductsMenu = document.querySelector(".products-menu");
const showProductsButton = document.querySelector("#show-products-button");



function ShowProducts (){
    showProductsButton.classList.toggle("border-b");
    showProductsButton.classList.toggle("border-sky-900");
    showProductsButton.classList.toggle("text-blue-500");

    ProductsMenu.classList.toggle("hidden");
}
document.addEventListener("click", function (event) {
    if (
        !ProductsMenu.contains(event.target) &&
        !showProductsButton.contains(event.target)
    ) {
        ProductsMenu.classList.add("hidden");
        showProductsButton.classList.remove("border-b", "border-sky-900", "text-blue-500");
    }
});

function toggleMenu(className) {
    const allMenus = document.querySelectorAll(".menus");

    const target = document.querySelector(`.${className}`);

    const isVisible = !target.classList.contains("hidden");

    // close all menu
    allMenus.forEach(menu => menu.classList.add("hidden"));


    // open targeted menu
    if (!isVisible) {
        target.classList.remove("hidden");
    }
}
function ToggleStyleMenu (clickedBtn) {

    const allButtons = document.querySelectorAll(".all-buttons");
   allButtons.forEach(btn => btn.classList.remove("text-blue-500"));
   clickedBtn.classList.add("text-blue-500");





}

