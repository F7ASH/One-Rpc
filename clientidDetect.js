const electron = require('electron');
document.addEventListener("DOMContentLoaded", () => {
    if (window.location.href =="https://discord.com/developers/applications") {
        makeflyout("Go to your desired application, and the Client ID will be detected automatically! ", "drpcm-hint-flyout")
    }
    setTimeout(() => {hideUnwanted()}, 1000)
})
document.addEventListener("mousemove", () => {
    let prevflyout = document.querySelector("#drpcm-hint-flyout")
    let clientid = document.querySelector(".code-j7WzRK")
    let fly = document.querySelector("#drpcm-success-flyout")

    if (clientid !== null && fly == null) {
        let id = clientid.innerText
        if (prevflyout !== null) { prevflyout.remove() }
        makeflyout(`
        Detected Client ID!
        <code style = "font-family: monospace; background: #313131; padding: 5px; border-radius: 5px;">${id}</code>
    `, "drpcm-success-flyout")
    }
})

function makeflyout(html, id) {
    let flyout = document.createElement("div")
    flyout.id = id
    flyout.innerHTML = html + `<button style = "color: white; cursor: pointer; font-weight: bold;" onclick="this.parentElement.style.display = 'none'">&times;</button>`
    flyout.style.position = "absolute"
    flyout.style.zIndex = "999"
    flyout.style.bottom = "0"
    flyout.style.right = "0"
    flyout.style.margin = "1rem"
    flyout.style.background = "#202225"
    flyout.style.borderRadius = "5px"
    flyout.style.padding = "1rem"

    document.body.appendChild(flyout)
}

function hideUnwanted() {
    let elems = [
        document.querySelector(".wrapper-3aJbIC")
    ]
    elems.forEach(elem => elem.remove())

    document.querySelector(".flush-zNaLgf").innerText = "Click 'New Application' to create a new presence, or select an already created one below"
    document.querySelector(".wordmark-1G98vs").innerText = "Discord RPC Developer Portal"

    document.querySelector(".button-38aScr").addEventListener("click", () => {
        let aaa = document.getElementsByClassName('medium-zmzTW- weightNormal-3CX1dN')
        aaa[0].innerText = "This is what your presence will be called."
    })
}