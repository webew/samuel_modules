function tousOK () {
    const bouton = document.querySelector(".bouton")
    if (nomOK && prenomOK && emailOK && telOK && adresseOK && cpostalOK && villeOK) {
        bouton.disabled = false
    } else {
        bouton.disabled = true
    }
}

const nom = document.getElementById("nom")
const nomDiv = document.querySelector(".nom")
let nomOK = false
nom.addEventListener("change", () => {
    let regEx = new RegExp("^[A-Z][A-Za-z- ]+")
    nomOK = regEx.test(nom.value)
    if (!nomOK) {
        nomDiv.classList.add("error")
        nom.placeholder = "Lettres, '-' et espace uniquement."
        nom.value = ""
    } else {
        nomDiv.classList.remove("error")
    }
})


const prenom = document.getElementById("prenom")
const prenomDiv = document.querySelector(".prenom")
let prenomOK = false
prenom.addEventListener("change", () => {
    let regEx = new RegExp("^[A-Z][A-Za-z- ]+")
    prenomOK = regEx.test(prenom.value)
    if (!prenomOK) {
        prenomDiv.classList.add("error")
        prenom.placeholder = "Lettres, '-' et espace uniquement."
        prenom.value = ""
    } else {
        prenomDiv.classList.remove("error")
    }
    tousOK()
})


const email = document.getElementById("email")
const emailDiv = document.querySelector(".email")
let emailOK = false
email.addEventListener("change", () => {
    let regEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9.₋-]+")
    emailOK = regEx.test(email.value)
    if (!emailOK) {
        emailDiv.classList.add("error")
        email.placeholder = "Respectez le format d'adresse mail"
        email.value = ""
    } else {
        emailDiv.classList.remove("error")
    }
    tousOK()
})


const tel = document.getElementById("tel")
const telDiv = document.querySelector(".tel")
let telOK = false
tel.addEventListener("change", () => {
    let regEx = new RegExp("0[0-9]{9}")
    telOK = regEx.test(tel.value)
    if (!telOK) {
        telDiv.classList.add("error")
        tel.placeholder = "10 chiffres"
        tel.value = ""
    } else {
        telDiv.classList.remove("error")
    }
    tousOK()
})

const adresse = document.getElementById("adresse")
const adresseDiv = document.querySelector(".adresse")
let adresseOK = false
adresse.addEventListener("change", () => {
    let regEx = new RegExp("[A-Za-z0-9- ]+")
    adresseOK = regEx.test(adresse.value)
    if (!adresseOK) {
        adresseDiv.classList.add("error")
        adresse.placeholder = "Lettres, chiffres, '-' et espace uniquement."
        adresse.value = ""
    } else {
        adresseDiv.classList.remove("error")
    }
    tousOK()
})

const cpostal = document.getElementById("cpostal")
const cpostalDiv = document.querySelector(".cpostal")
let cpostalOK = false
cpostal.addEventListener("change", () => {
    let regEx = new RegExp("[0-9]{5}")
    cpostalOK = regEx.test(cpostal.value)
    if (!cpostalOK) {
        cpostalDiv.classList.add("error")
        cpostal.placeholder = "5 chiffres"
        cpostal.value = ""
    } else {
        cpostalDiv.classList.remove("error")
    }
    tousOK()
})

const ville = document.getElementById("ville")
const villeDiv = document.querySelector(".ville")
let villeOK = false
ville.addEventListener("change", () => {
    let regEx = new RegExp("^[A-Z][A-Za-z- ]+")
    villeOK = regEx.test(ville.value)
    if (!villeOK) {
        villeDiv.classList.add("error")
        ville.placeholder = "Lettres, '-' et espace uniquement."
        ville.value = ""
    } else {
        villeDiv.classList.remove("error")
    }
    tousOK()
})