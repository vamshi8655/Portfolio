var input = document.querySelectorAll("input")
var btn = document.querySelectorAll("button")[0]
var form = document.querySelector("form")
var span = document.querySelectorAll("span")
var lstorage=JSON.parse(localStorage.getItem("lstorage"))
console.log(lstorage);
form.addEventListener("submit", (e) => {
    // console.log(e)
    var flag=true
    span.forEach((e)=>{
        e.innerHTML=""
    })

    var matching=lstorage.find((e)=>{
        if (input[0].value==e.phone || input[0].value==e.email && input[1].value==e.pass) {
            return e
        }
    })
    if (input[0].value == "" && input[1].value == "") {
        span[0].innerHTML = "User name is required"
        span[1].innerHTML = "Password is required"
        e.preventDefault()
        flag=false
    }
    else if (input[0].value == "") {
        span[0].innerHTML = "User name is required"
        e.preventDefault()
        flag=false
    }
    else if (input[1].value == "") {
        span[1].innerHTML = "Password is required"
        e.preventDefault()
        flag=false
    }
    else if (matching) {
        alert("Boss welcome to the page")   
    }
    else {
        span[2].innerHTML="Wrong Creditinals"
        e.preventDefault()
        flag=false
    }

    if (flag) {
        localStorage.setItem("Login",JSON.stringify(matching))
        
    }

})

// btn.addEventListener("click",()=>{
//     if (input[0].value=="" && input[1].value=="") {
//         alert("Type the user name")
//         alert("Type the password")
//     }
//     else if(input[0].value==""){
//         alert("Type the user name")
//     }
//     else if(input[1].value==""){
//         alert("Type the password")
//     }
//     else if (input[0].value=="vasu" && input[1].value=="vasu@1234") {
//         alert("Boss welcome to the page")
//     }
//     else{
//         alert("Wrong Creditinals")
//     }
// })


