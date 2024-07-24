console.log("index.js ok")

const headerScrollEvent = document.querySelector("header")
const buttonScrollEvent = document.querySelector("button")
document.addEventListener("scroll", () => {
    if (window.scrollY >= 94) {
        headerScrollEvent.classList.add("headerscroll")
    } else {
        headerScrollEvent.classList.remove("headerscroll")
    }
    if (window.scrollY >= 500) {
        buttonScrollEvent.classList.add("boutonTop")
    } else {
        buttonScrollEvent.classList.remove("boutonTop")
    }
})

buttonScrollEvent.addEventListener("click", () => {
    document.documentElement.scrollTop = 0    
})

const ancreSousmenu = document.querySelector(".ancresousmenu")
const sousMenu = document.querySelector(".sousmenu")
let sousMenuActif = false
function sousmenu() {
    if (sousMenuActif === false) {
        sousMenu.classList.remove("sousmenuVisible")
    }
}

ancreSousmenu.addEventListener("mouseenter", () => {
    sousMenu.classList.add("sousmenuVisible")
    sousMenuActif = true
})
ancreSousmenu.addEventListener("mouseleave", () => {
    sousMenuActif = false
    setTimeout(sousmenu, 200)
})
sousMenu.addEventListener("mouseenter", () => {
    sousMenuActif = true
})
sousMenu.addEventListener("mouseleave", () => {
    sousMenuActif = false
    setTimeout(sousmenu, 200)
})
