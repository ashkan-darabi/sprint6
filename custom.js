let background = document.querySelector(".background");

window.addEventListener("scroll", e => {
    if (scrollY >= 200) {
        background.classList.add("show")
    }else{
        background.classList.remove("show")
    }
})
padding: 0em 24em 0em 0em;