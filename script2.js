/*добавление  в корзину со всплытием модального окна*/
var basketIncrement = 0;
var basketFull = document.querySelector(".main-header__top_basket");
var basketCount = document.querySelector(".main-header__top_basket span");
var basket = function() {
    basketIncrement ++;
    basketCount.innerHTML = basketIncrement;
    basketFull.classList.add("fullbasket");
}

var linkBasket = document.querySelectorAll(".popular-product__card a:first-of-type");
var popupBasket = document.querySelector(".modal-window__basket");
var closeBasket = popupBasket.querySelector(".close-window");
for (var i = 0; i < linkBasket.length; i++) {
    linkBasket[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        popupBasket.classList.add("modal-window-open");
    });
}

closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-window-open");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupBasket.classList.contains("modal-window-open")) {
            popupBasket.classList.remove("modal-window-open");
        }
    }
});

/*добавление в закладки*/
var bookmarksIncrement = 0;
var bookmarksCount = document.querySelector(".main-header__top_bookmarks span");
var bookmarks = function() {
    bookmarksIncrement ++;
    bookmarksCount.innerHTML = bookmarksIncrement;
}