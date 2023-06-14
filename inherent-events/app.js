/* 
    ? Inherent Events
    * anchors
    * buttons
    * forms
    
    * links try and send an HTTP request to take us elsewhere
    * buttons listen for a click
    * form tries to send data
*/

const db = [
    { email: "mrpndev@gmail.com", pwd: "dbLocal"},
    { email: "melduch@teacher.com", pwd: "iloveCoding"},
    { email: "asen@mars.com", pwd: "amALI3n"},
]

let submitBtn = document.getElementById("submit")

let login = (email, pwd) => {
    let foundUser = db.
}

submitBtn.addEventListener("click", e => {
    e.preventDefault()

    let email = e.target.form[0].value
    let pwd = e.target.form[1].value

    

})


