let startTimeout = document.getElementById("start-timeout")
let timeoutDisplay = document.getElementById("timeout-display")
let startInterval = document.getElementById("start-interval")
let intervalDisplay = document.getElementById("interval-display")
let repeatGo = document.querySelectorAll(".repeat-go")
console.log(repeatGo)

startTimeout.addEventListener("click", e => {
    timeoutDisplay.textContent = "Getting ready..."
    timeoutDisplay.style.color = "red"
    setTimeout(() => {
        timeoutDisplay.textContent = "READY"
        timeoutDisplay.style.color = "green"
    }, 5000)
})

let isRunning = false

startInterval.addEventListener("click", e => {
    let count = 5
    let index = 0
    if (!isRunning) {
        let timer = setInterval(() => {
            isRunning = true
            if (count > 0) {
                intervalDisplay.textContent = count
                count--
            } else {
                intervalDisplay.textContent = "GO!"
                clearInterval(timer)
                isRunning = false
                let newTimer = setInterval(() => {
                    repeatGo[index].textContent = "GO"
                    index++
                    console.log(index)
                    if (!repeatGo[index]) clearInterval(newTimer)
                }, 1000);
            }
        }, 1000)

    }
})
console.log(repeatGo[3])