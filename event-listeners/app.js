/* 
    ? Event Listeners
    * allow us to execute a callback fx when an event occurs
    * .addEventListener() takes an event and fires a callback
    * event - a string of event that will trigger the callback
    * callback - fx that is triggered imemdiately after the event
*/

let listInput = document.getElementById("listInput")

// listInput.addEventListener("keyup", event => {
//     console.log(event.target.value)
// })

/* 
    ? What's happening?
    * Event listener listens for the key up event
    * When triggered, we collect event object thru the event argument
    * We access the target element on which the event listener was placed
    * We console.log its .value property
*/

let btn = document.querySelector("#submit")
let ulToDo = document.getElementById("ulToDo")

btn.addEventListener("click", evt => {
    // prevents default form behavior to send an HTTP request
    evt.preventDefault()
    // ? Easy way to access input element value
    // let input = document.getElementById("listInput").value
    // ? Elegant way to use existing event object to access input element value
    console.log("Button has been hit", evt.target.form[0].value)
    // * 1. Create an element
    let li = document.createElement("li")
    // * 2. Assign the value of input post-click to be the value of li's text content property
    li.textContent = evt.target.form[0].value
    // * 3. Append the list item to the parent container
    ulToDo.appendChild(li)
    evt.target.form[0].value = ""
})

/* 
    ! Challenge
    * Create a div inside index.html, below the form
    * Create two buttons with + and -
    * Between them create a span tag with a value of 0
    * When plus and minus are clicked, it should change the value of the span tag to increment or decrement it
    * HINT: You can create event listeners on each btn OR
    * you can look into onClick evt listener attribute
*/


let decBtn = document.getElementById("dec-btn")
let incBtn = document.getElementById("inc-btn")
let countSpan = document.getElementById("count")
let count = 0
countSpan.textContent = count

decBtn.addEventListener("click", e => {
    count--
    countSpan.textContent = count
})

incBtn.addEventListener("click", e => {
    count++
    countSpan.textContent = count
})

// ? OR use attribute event listeners inside .html file

function incCount() {
    count++
    countSpan.textContent = count
}

function decCount() {
    count--
    countSpan.textContent = count
}

// ? Event Bubbling in JS

let outerJS = document.getElementById("bubbling-in-js")
let innerJS = document.getElementById("inner-bubbling-in-js")

outerJS.addEventListener("click", e => console.log("outer js bubble hit"))
innerJS.addEventListener("click", e => {
    e.stopPropagation()
    console.log("inner js bubble hit")
})

