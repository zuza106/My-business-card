console.log("Cześć!");

let buttonDarkMode = document.querySelector(".js-buttonDarkMode");
let darkTheme = document.querySelector(".body--darkTheme");
let body = document.querySelector(".body");
let image = document.querySelector(".main__image");
let removePhoto = document.querySelector(".js-removePhoto");
let removeButton = document.querySelector(".js-removeButton");
let changeText = document.querySelector(".js-changeText");
let main__captions = document.querySelector(".main__captions");
let brightMain__captions = document.querySelector(".main__captions--bright");



buttonDarkMode.addEventListener("click", () => {
    body.classList.toggle("body--darkTheme");
    changeText.innerText = body.classList.contains("body--darkTheme") ? "jasny ☀️" : "ciemny 🌙";

    if (body.classList.contains("body--darkTheme")) {
        main__captions.classList.toggle = ("main__captions--bright")
    } else {
        main__captions.classList.toggle = ("main__captions")
    }
});



removePhoto.addEventListener("click", () => {
    image.remove();
    removeButton.remove();
});


