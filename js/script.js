{
    const welcome = () => { console.log("Cześć!") };



    const changeCaptionsColor = (changeDarkMode) => {
        const main__captions = document.querySelector(".main__captions");
        const brightMain__captions = document.querySelector(".main__captions--bright");

        if (body.classList.contains("body--darkTheme")) {
            main__captions.classList.toggle = ("main__captions--bright")
        } else {
            main__captions.classList.toggle = ("main__captions")
        }
    }


    const changeDarkMode = () => {
        const darkTheme = document.querySelector(".body--darkTheme");
        const body = document.querySelector(".body");
        const changeText = document.querySelector(".js-changeText");

        body.classList.toggle("body--darkTheme");
        changeText.innerText = body.classList.contains("body--darkTheme") ? "jasny ☀️" : "ciemny 🌙";
    }


    const removeImage = () => {
        const image = document.querySelector(".main__image");
        const removeButton = document.querySelector(".js-removeButton");
        image.remove();
        removeButton.remove();

    }

    const init = () => {
        const buttonDarkMode = document.querySelector(".js-buttonDarkMode");
        buttonDarkMode.addEventListener("click", changeDarkMode);


        const removePhoto = document.querySelector(".js-removePhoto");
        removePhoto.addEventListener("click", removeImage);

    };

    init();

}
