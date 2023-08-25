const navlinks = document.querySelectorAll(".nav-link-container")
const navlinks2 = document.querySelectorAll(".nav-links2")
const oculto = document.querySelector(".oculto")
const flecha = document.querySelector(".arrow")
const toggle = document.querySelector(".togle")
const wrap = document.querySelector(".wrap")
const responsive = document.querySelector(".responsive-container")
const formulario = document.querySelector(".formulario")
const closedForm = document.querySelectorAll(".blue-X")
const form = document.querySelector(".form")

closedForm.forEach((botones) => {
    botones.addEventListener("click", () => {
        formulario.classList.toggle("formulario-active")
        form.classList.toggle("form-active")
    })
})

formulario.addEventListener("click", () => {
    formulario.classList.toggle("formulario-active")
    if (form.classList.contains("form-active")) {
        form.classList.toggle("form-active")
    }

    if (formulario.classList.contains("formulario-active")) {
        formulario.classList.toggle("formulario-active")
    }
})

toggle.addEventListener("click", () => {
    wrap.classList.toggle("wrap-active")
    responsive.classList.toggle("responsive-container-active")

})

oculto.addEventListener("click", () => {
    flecha.classList.toggle("arrow-active")
    navlinks2.forEach((links2) => {
        links2.classList.toggle("nav-links2-active")
    })
})

