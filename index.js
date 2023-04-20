const keyPad = document.querySelector(".key-pad")
const numeric = document.querySelector(".numeric")
const number = document.querySelector(".number")
const reset = document.querySelector(".reset")
const send = document.querySelector(".send")
const pagerField = document.querySelector(".pager-field")
const btnContainer = document.querySelector(".btn-container")

let audio = new Audio("sound/iphone.mp3")
let phoneNumber = ""

keyPad.addEventListener("click", increment)
btnContainer.addEventListener("click", userAction)

function increment(e) {
    phoneNumber += e.target.innerText
    number.textContent = phoneNumber
    setTimeout(userAction(e), 4000)
}


function userAction(e) {
    if (e.target.id === "send-pager") {
        setTimeout (function() {
        pagerField.textContent = phoneNumber}, 1000)
        audio.play()
        setTimeout(function() { audio.pause()}, 5000)
    } else if (e.target.id === "reset-pager") {
        phoneNumber = ""
        number.textContent = ""
        pagerField.textContent = ""
        audio.pause()
    }
    }






