
const user = document.getElementById("identifiant")
const userDiv = document.querySelector(".user")
let userOK = false
user.addEventListener("change", (event) => {
    if (event.target.value.trim() === "") {
        userOK = false
        userDiv.classList.add("error")
        user.placeholder = "A remplir !"
    } else {
        userOK = true
        userDiv.classList.remove("error")
    }
})

const mdp = document.getElementById("mdp")
const mdpDiv = document.querySelector(".mdp")
let mdpOK = false
mdp.addEventListener("change", (event) => {
    if (event.target.value.trim() === "") {
        mdpOK = false
        mdpDiv.classList.add("error")
        mdp.placeholder = "A remplir !"
    } else {
        mdpOK = true
        mdpDiv.classList.remove("error")
    }
})

const validation = document.querySelector("form")
    validation.addEventListener("submit", (event) => {
        if (userOK && mdpOK) {

        } else {
            event.preventDefault()
            if (!userOK) {
                userDiv.classList.add("error")
                user.placeholder = "A remplir !"   
            }
            if (!mdpOK) {
                mdpDiv.classList.add("error")
                mdp.placeholder = "A remplir !" 
            } 
        }
    })