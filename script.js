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
