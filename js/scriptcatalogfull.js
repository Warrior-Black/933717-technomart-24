/*добавление в закладки*/
var bookmarksIncrement = 0;
var bookmarksFull = document.querySelector(".main-header__top_bookmarks");
var bookmarksCount = document.querySelector(".main-header__top_bookmarks span");
var linkBookmarks = document.querySelectorAll(".popular-product__card a:last-of-type");
for (var i = 0; i < linkBookmarks.length; i++) {
    linkBookmarks[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        bookmarksIncrement ++;
        bookmarksCount.innerHTML = bookmarksIncrement;
        bookmarksFull.classList.add("fullbookmarks");
    });
}

/*добавление  в корзину со всплытием модального окна*/
var basketIncrement = 0;
var basketFull = document.querySelector(".main-header__top_basket");
var basketCount = document.querySelector(".main-header__top_basket span");
var linkBasket = document.querySelectorAll(".popular-product__card a:first-of-type");
var popupBasket = document.querySelector(".modal-window__basket");
var closeBasket = popupBasket.querySelector(".close-window");
var continueBasket = popupBasket.querySelector(".modal-window__basket_btn-continue");
for (var i = 0; i < linkBasket.length; i++) {
    linkBasket[i].addEventListener("click", function (evt) {
        evt.preventDefault();
        basketIncrement ++;
        basketCount.innerHTML = basketIncrement;
        basketFull.classList.add("fullbasket");
        popupBasket.classList.add("modal-window-open");
    });
}

closeBasket.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupBasket.classList.remove("modal-window-open");
});

continueBasket.addEventListener("click", function (evt) {
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

/*авторизация*/
var login = document.querySelector(".main-header__section_not-authorized .main-header__section_btn-enter");
var loginBlock = document.querySelector(".main-header__section_not-authorized");
var logout = document.querySelector(".main-header__section_authorized .main-header__section_exit-profile");
var logoutBlock = document.querySelector(".main-header__section_authorized");
login.addEventListener("click", function (evt) {
    evt.preventDefault();
    loginBlock.classList.add("hidden");
    logoutBlock.classList.remove("hidden");
});
logout.addEventListener("click", function (evt) {
    evt.preventDefault();
    logoutBlock.classList.add("hidden");
    loginBlock.classList.remove("hidden");
});
