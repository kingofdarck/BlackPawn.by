const linkShop = document.querySelector(".header__linkShop")
linkShop.addEventListener("mouseover", () => {
    linkShop.textContent = "Магазин временно не работает"
})
linkShop.addEventListener("mouseout", () => {
    linkShop.textContent = "Оплата и магазин "
})