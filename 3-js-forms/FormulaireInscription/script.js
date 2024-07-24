const nom = document.getElementById("nom")
const nomDiv = document.querySelector(".nom")
let nomOK = false
const prenom = document.getElementById("prenom")
const prenomDiv = document.querySelector(".prenom")
let prenomOK = false
const email = document.getElementById("email")
const emailDiv = document.querySelector(".email")
let emailOK = false
const tel = document.getElementById("tel")
const telDiv = document.querySelector(".tel")
let telOK = false
const adresse = document.getElementById("adresse")
const adresseDiv = document.querySelector(".adresse")
let adresseOK = false
const cpostal = document.getElementById("cpostal")
const cpostalDiv = document.querySelector(".cpostal")
let cpostalOK = false
const ville = document.getElementById("ville")
const villeDiv = document.querySelector(".ville")
let villeOK = false

function testRegEx () {
    let regEx = new RegExp("^[A-Z][A-Za-z- ]+")
    nomOK = regEx.test(nom.value)
    regEx = new RegExp("^[A-Z][A-Za-z- ]+")
    prenomOK = regEx.test(prenom.value)
    regEx = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9.₋-]+")
    emailOK = regEx.test(email.value)
    regEx = new RegExp("0[0-9]{9}")
    telOK = regEx.test(tel.value)
    regEx = new RegExp("[A-Za-z0-9- ]+")
    adresseOK = regEx.test(adresse.value)
    regEx = new RegExp("[0-9]{5}")
    cpostalOK = regEx.test(cpostal.value)
    regEx = new RegExp("^[A-Z][A-Za-z- ]+")
    villeOK = regEx.test(ville.value)
}

function tousOK () {
    testRegEx()
    if (nomOK && prenomOK && emailOK && telOK && adresseOK && cpostalOK && villeOK) {
    return true
    } else {
        if (!nomOK) {
            nomDiv.classList.add("error")
            nom.placeholder = "Lettres, '-' et espace uniquement."
            nom.value = ""
        } else {
            nomDiv.classList.remove("error")
        }
        if (!prenomOK) {
            prenomDiv.classList.add("error")
            prenom.placeholder = "Lettres, '-' et espace uniquement."
            prenom.value = ""
        } else {
            prenomDiv.classList.remove("error")
        }
        if (!emailOK) {
            emailDiv.classList.add("error")
            email.placeholder = "Respectez le format d'adresse mail"
            email.value = ""
        } else {
            emailDiv.classList.remove("error")
        }
        if (!telOK) {
            telDiv.classList.add("error")
            tel.placeholder = "10 chiffres"
            tel.value = ""
        } else {
            telDiv.classList.remove("error")
        }
        if (!adresseOK) {
            adresseDiv.classList.add("error")
            adresse.placeholder = "Lettres, chiffres, '-' et espace uniquement."
            adresse.value = ""
        } else {
            adresseDiv.classList.remove("error")
        }
        if (!cpostalOK) {
            cpostalDiv.classList.add("error")
            cpostal.placeholder = "5 chiffres"
            cpostal.value = ""
        } else {
            cpostalDiv.classList.remove("error")
        }
        if (!villeOK) {
            villeDiv.classList.add("error")
            ville.placeholder = "Lettres, '-' et espace uniquement."
            ville.value = ""
        } else {
            villeDiv.classList.remove("error")
        }
        return false
    }
}



const validation = document.querySelector("form")
    validation.addEventListener("submit", (event) => {
        if (tousOK()) {

        } else {
            event.preventDefault()
            console.log(nomOK)
            console.log(prenomOK)
            console.log(emailOK)
            console.log(telOK)
            console.log(adresseOK)
            console.log(cpostalOK)
            console.log(villeOK)
        }
    })