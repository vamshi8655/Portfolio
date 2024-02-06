var input = document.querySelectorAll("input")
var btn = document.querySelectorAll("button")[0]
var form = document.querySelector("form")
var span = document.querySelectorAll("span")
var storage=[]
var local=JSON.parse(localStorage.getItem("local"))
if (local) {
    storage=local
}

form.addEventListener("submit", (e) => {
    // console.log(e)
    var flag=true
    span.forEach((e)=>{
        e.innerHTML=""
    })

    var matching=local.find((e)=>{
        if (input[2].value==e.pass) {
            return e
        }
    })
    if (input[0].value == "" && input[1].value == "" && input[2].value == "") {
        span[0].innerHTML = "Address is required"
        span[1].innerHTML = "Pincode is required"
        span[2].innerHTML = "Password is required"
        e.preventDefault()
        flag=false
    }
    else if (input[0].value == "") {
        span[0].innerHTML = "Address is required"
        e.preventDefault()
        flag=false
    }
    else if (input[1].value == "") {
        span[1].innerHTML = "Pincode is required"
        e.preventDefault()
        flag=false
    }
    else if (input[2].value == "") {
        span[2].innerHTML = "Password is required"
        e.preventDefault()
        flag=false
    }
    else if (matching) {
        alert("Place the order Successfully")
        // session = true; 
    }
    else {
        span[3].innerHTML = "Wrong Password"
        e.preventDefault()
        flag=false
    }

    if (flag) {
        var obj={
            address:input[0].value,
            pincode:input[1].value,
            pass:input[2].value
        }

        storage.push(obj)
        localStorage.setItem("address",JSON.stringify(storage))
        
    }

})