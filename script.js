try {

} catch (err) {
        isStorageSupport = false;
}
var link = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-window__form_mail");
var close = popup.querySelector(".close-window");
var form = popup.querySelector("form");
var names = popup.querySelector(".modal-name");
var email = popup.querySelector("[name=email]");
var text = popup.querySelector("[name=mail]")
var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("name");
} catch (err) {
        isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-window-open");
    if (storage) {
     names.value = storage;
     email.focus();
    } else {
     names.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-window-open");
    /*popup.classList.remove("modal-error");*/
});

form.addEventListener("submit", function (evt) {
    if (!names.value || !email.value || !text.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        /*popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");*/
    } else {
        if (isStorageSupport) {
            localStorage.setItem("name", names.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
if (evt.keyCode === 27) {
 evt.preventDefault();
 if (popup.classList.contains("modal-window-open")) {
   popup.classList.remove("modal-window-open");
   /*popup.classList.remove("modal-error");*/
 }
}
});

var linkmap = document.querySelector(".main-bottom__contacts a:first-of-type");
var popupmap = document.querySelector(".modal-window__map");
var closemap = popupmap.querySelector(".close-window");

linkmap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.add("modal-window-open");
});

closemap.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupmap.classList.remove("modal-window-open");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupmap.classList.contains("modal-window-open")) {
        popupmap.classList.remove("modal-window-open");
        }
    }
});

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
