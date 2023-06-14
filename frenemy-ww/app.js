let btn = document.getElementById("submit")
let output = document.getElementsByClassName("output")[0]

let sanitizeInput = input => {
    return input.toLowerCase()
}

let enemies = enemy => {
    enemy = sanitizeInput(enemy)
    let enemies = ["lex luthor", "palpatine", "iron man"]
    let result = enemies.find(e => e.includes(enemy))
    
    if (result) {
        output.textContent = `Go away ${enemy}`
        output.style.color = "red"
    } else {
        output.textContent = `Hello, ${enemy}`
        output.style.color = "blue"
    }
}

btn.addEventListener("click", e => {
    console.log(e)
    let input = e.target.previousElementSibling.value
    enemies(input)
    e.target.previousElementSibling.value = ""
})
