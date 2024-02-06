var body = document.querySelector("body")
var male=document.querySelector("#male")
var classic=document.querySelector("#classic_flavours")
var choco=document.querySelector("#Chocolate_Lovers")
var fruit=document.querySelector("#Fruit_Infusion")
var special=document.querySelector("#Specialty_Flavors")
var falooda=document.querySelector("#falooda")
var cones =document.querySelector("#cones")
var Khulfi =document.querySelector("#Khulfi")
var cartDesign = document.querySelector("#cart")
var can = document.querySelector("#cancel")
var cartBody = document.querySelector("#cart-body")
var name=document.querySelector("#name")
var apij=""
var i = ""
var session = localStorage.getItem("session");
console.log(session);
var log1=document.querySelector("#log1");

if (!session) {
    window.location.href = "login.html";
}
async function handlePromise() {
    try {
        var api = await fetch("./data.json")
        console.log(api);
        apij = await api.json()// converting into json format
        console.log(apij);
        if(i!=""){
        i.forEach((e) => {
            male.innerHTML += `<div class="cont" id="${e.name}">
               <img src="${e.image}" alt="no">
               <h3 id="name">${e.name}</h3>
               <p id="sub">${e.subcategory}</p>
               <p>${e.description}</p>
               <div>
                   <h4>Price:${e.price}</h4>
                   <h4>Rating:${e.ratings}</h4>
               </div>
               <button class="cart-btn">Add To Cart</button>
           </div>`
        })
    }else{
        apij.classic_flavours.forEach((e) => {
            male.innerHTML += `<div class="cont" id="${e.name}">
               <img src="${e.image}" alt="no">
               <h3 id="name">${e.name}</h3>
               <p>${e.subcategory}</p>
               <p>${e.description}</p>
               <div>
                   <h4>Price:${e.price}</h4>
                   <h5>Rating:${e.ratings}</h5>
               </div>
               <button class="cart-btn">Add To Cart</button>
           </div>`
        }) 
    }
    var cartBtn = document.querySelectorAll(".cart-btn")
    console.log(cartBtn);
    cartBtn.forEach((e) => {
        e.addEventListener("click", () => {
            cartDesign.style.right = "0"
            var parentEl = e.parentElement
            console.log(parentEl);
            if (i!="") {
                i.map((f) => {
                    if (parentEl.id == f.name) {
                        cartBody.innerHTML += `<div class="cart-body-design">
                        <div class="p-img">
                            <img src="${f.image}" alt="">
                        </div>
                        <div class="p-details">
                            <h3>Name:${f.name}</h3>
                            <h4>${f.price}</h4>
                            <input type="number"value="1" name="" id="">
                        </div>
                        <div class="p-subtotal">
                            <h2 class="sub">${f.price}</h2>
                            <!-- <i class="fa-solid fa-trash"></i> -->
                            <i class="fa-solid fa-delete-right"></i>
                        </div>
                    </div>`
                    }
                })
            }else{
                apij.classic_flavours.map((f) => {
                    if (parentEl.id == f.name) {
                        cartBody.innerHTML += `<div class="cart-body-design">
                        <div class="p-img">
                            <img src="${f.image}" alt="">
                        </div>
                        <div class="p-details">
                            <h3>Name:${f.name}</h3>
                            <h4>${f.price}</h4>
                            <input type="number"value="1" name="" id="">
                        </div>
                        <div class="p-subtotal">
                            <h2 class="sub">${f.price}</h2>
                            <!-- <i class="fa-solid fa-trash"></i> -->
                            <i class="fa-solid fa-delete-right"></i>
                        </div>
                    </div>`
                    }
                })
            }
            
            var trash1=document.querySelectorAll(".fa-delete-right")
                trash1.forEach((d)=>{
                    d.addEventListener("click",()=>{
                        d.parentElement.parentElement.remove()
                        total()
                    })
                })

                function subTotal() {
                    var input=document.querySelectorAll("input")
                    input.forEach((e)=>{
                        e.addEventListener("input",()=>{
                            if (e.value<1) {
                                e.value=1
                            }
                            var parentEl=e.parentElement.parentElement
                            var price=parentEl.querySelector("h4")
                            var sub=parentEl.querySelector("h2")
                            sub.innerHTML=e.value*price.innerHTML
                            total()
                        })
                    })
                }
                subTotal()

                function total() {
                    var stotal=document.querySelectorAll(".sub");
                    var Gtotal=document.querySelector("#total")
                    var sum=0;
                    stotal.forEach((e)=>{
                        var dummy=parseFloat(e.innerHTML)
                        sum +=dummy
                    })
                    Gtotal.innerHTML=`Total: $. ${sum}`
                }
                total()
        })
    })
    }
    catch(error){
        console.log(error);
    }
}
handlePromise()
can.addEventListener("click", () => {
    cartDesign.style.right = "-100%"
})
classic.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.classic_flavours
    handlePromise()
})
choco.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.Chocolate_Lovers
    handlePromise()
})
fruit.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.Fruit_Infusion
    handlePromise()
})
special.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.Specialty_Flavors
    handlePromise()
})
falooda.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.falooda
    handlePromise()
})
cones.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.cones
    handlePromise()
})
Khulfi.addEventListener("click", () => {
    male.innerHTML = "";
    i = apij.Khulfi
    handlePromise()
})

log1.addEventListener("click",()=>{
    localStorage.removeItem("session")
    window.location.href = "home.html";
})