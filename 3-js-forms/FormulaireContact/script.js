let objetOK = false
let emailOK = false
let messageOK = false

function boutonPop() {
    const boutonPop = document.querySelector("form")
    if (objetOK && emailOK && messageOK) {
        boutonPop.classList.add("boutonOK")
    } else {
        boutonPop.classList.remove("boutonOK")
    }
        

}



const objet = document.getElementById("objet")
const objetDiv = document.querySelector(".objet")
objet.addEventListener("change", () => {
    if (objet.value.trim() === "") {
        objetOK = false
        objetDiv.classList.add("error")
        objet.placeholder = "Veuillez définir l'objet de votre message"
    } else {
        objetOK = true
        objetDiv.classList.remove("error")
    }
    boutonPop()
})

const email = document.getElementById("email")
const emailDiv = document.querySelector(".email")
email.addEventListener("change", () => {
    let regEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9.₋-]+")
    emailOK = regEx.test(email.value)
    if (emailOK === false) {
        emailDiv.classList.add("error")
        email.placeholder = "Respectez le format d'adresse mail"
    } else {
        emailDiv.classList.remove("error")
    }
    boutonPop()
})

const message = document.getElementById("message")
const messageDiv = document.querySelector(".message")
message.addEventListener("change", () => {
    if (message.value.trim() === "") {
        messageOK = false
        message.placeholder = "Vous avez beaucoup plus de chances de recevoir une réponse de notre part si vous nous dîtes quelque chose :)"
    } else {
        messageOK = true
    }
    boutonPop()
})