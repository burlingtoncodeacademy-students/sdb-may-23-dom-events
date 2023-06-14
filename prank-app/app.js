let btn = document.querySelector(".main-container > button")
let output = document.getElementById("output")

btn.addEventListener("click", e => {
    let input = e.target.previousElementSibling.value
    output.textContent = `You seriously messed up, ${input}`
    e.target.previousElementSibling.value = ""
    setTimeout(() => {
        // window.location.replace("https://haveibeenpwned.com/")
        // window.close()
    }, 3000);
})