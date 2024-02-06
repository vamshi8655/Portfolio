var input=document.querySelectorAll("input")
var sp=document.querySelectorAll("span")
var form=document.querySelector("form")
var storage=[]
var local=JSON.parse(localStorage.getItem("local"))
if (local) {
    storage=local
}
//syntax for rgular expression will be in this format /^[]{}$/
//square brcaket what  user can enter or type
//Curl brackets is for length like minum 2 and maximum length 10
form.addEventListener("submit",(e)=>{
    var flag=true
    var regx=/^[a-zA-Z ]{2,15}$/
    var regx1=/^[6-9][0-9]{9}$/
    var regx2=/^[a-zA-Z0-9~!#$@%^&*()_+-|/":]{8,15}$/

    if (input[0].value=="") { //to check whether the user name is empty
        sp[0].innerHTML="Name required <br>"
        e.preventDefault()
        flag=false
    }
    else if(regx.test(input[0].value)){//to check whether the username is staisfying regx confition or not
        sp[0].innerHTML=""
    }
    else{
        sp[0].innerHTML="Invalid Name <br>"
        e.preventDefault()
        flag=false
    }

    if (input[1].value=="") {
        sp[1].innerHTML="Email Required <br>"
        e.preventDefault()
        flag=false
    }

    if (input[2].value=="") {
        sp[2].innerHTML="Phone Number Required <br>"
        e.preventDefault()
        flag=false
    }
    else if (regx1.test(input[2].value)) {
        sp[2].innerHTML=""
    }
    else{
        sp[2].innerHTML="Invalid Phone Number <br>"
        e.preventDefault()
        flag=false
    }


    if (input[3].value=="") {
        sp[3].innerHTML="Passowrd Is Required <br>"
        e.preventDefault()
        flag=false
    }
    else if (regx2.test(input[3].value)) {
        sp[3].innerHTML=""
    }
    else{
        sp[3].innerHTML="Invalid Password <br>"
        e.preventDefault()
        flag=false
    }

    if (input[4].value!=input[3].value) {
        sp[4].innerHTML="Password Is Not Matching"
        e.preventDefault()
        flag=false
    }

    if (flag) {
        var obj={
            name:input[0].value,
            email:input[1].value,
            phone:input[2].value,
            pass:input[4].value
        }
        console.log(obj);
        storage.push(obj)

        localStorage.setItem("local",JSON.stringify(storage))
    }
})