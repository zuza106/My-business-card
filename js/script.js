{
    const welcome = () => { console.log("Cześć!") };



    const changeCaptionsColor = (changeDarkMode) => {
        let main__captions = document.querySelector(".main__captions");
        let brightMain__captions = document.querySelector(".main__captions--bright");

        if (body.classList.contains("body--darkTheme")) {
            main__captions.classList.toggle = ("main__captions--bright")
        } else {
            main__captions.classList.toggle = ("main__captions")
        }
    }


    const changeDarkMode = () => {
        let darkTheme = document.querySelector(".body--darkTheme");
        let body = document.querySelector(".body");
        let changeText = document.querySelector(".js-changeText");

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


        let removePhoto = document.querySelector(".js-removePhoto");
        removePhoto.addEventListener("click", removeImage);

    };

    init();

}
