var login = JSON.parse(localStorage.getItem("Login"))
var user = document.querySelector("#username")
var male = document.querySelector("#male")
var right = document.querySelector("#right")
var men = document.querySelector("#men")
var beauty = document.querySelector("#beauty")
var women = document.querySelector("#women")
var cartDesign = document.querySelector("#cart")
var can = document.querySelector("#cancel")
var cartBody = document.querySelector("#cart-body")
if (login) {
    user.innerHTML = login.fname
    var logout = document.createElement("button")
    logout.innerHTML = "Logout"
    right.appendChild(logout)
    logout.addEventListener("click", () => {
        localStorage.removeItem("Login")
    })
}

//so that it takes time to fetch the data when the  call  stack is empty themn only this
//function will  be loaded from call back queue to call stack for exceution

//await is used to resolve the promise so we dont we have to write then cath and blocks
var i = "";
async function displayProduct() {
    try {
        var api = await fetch("https://www.shoppersstack.com/shopping/products/alpha")
        var apji = await api.json()//this will return one more promise because we converted into json
        //to handle the promise again await is required

        var data = apji.data
        console.log(data);
        
        var maleData = data.filter((e) => {
            if (e.category === i) {
                return e
            }
        })
        console.log(maleData);
        if (i != "") {
            maleData.map((e) => {
                male.innerHTML += `<div class="cont" id="${e.productId}">
               <img src="${e.productImageURLs[0]}" alt="">
               <h3>${e.name}</h3>
               <p>${e.description}</p>
               <div>
                   <h4>Price:${e.price}</h4>
                   <h5>Rating:${e.rating}</h5>
               </div>
               <button class="cart-btn">Add To Cart</button>
           </div>`
            })
        } else {
            data.map((e) => {
                male.innerHTML += `<div class="cont" id="${e.productId}">
               <img src="${e.productImageURLs[0]}" alt="">
               <h3>${e.name}</h3>
               <p>${e.description}</p>
               <div>
                   <h4>Price:${e.price}</h4>
                   <h5>Rating:${e.rating}</h5>
               </div>
               <button class="cart-btn">Add To Cart</button>
           </div>`
            })
        }
        var cartBtn = document.querySelectorAll(".cart-btn")
        console.log(cartBtn)
        cartBtn.forEach((e) => {
            e.addEventListener("click", () => {
                cartDesign.style.right = "0"
                var parentEl = e.parentElement
                console.log(parentEl);
                data.map((f) => {
                    if (parentEl.id == f.productId) {
                        cartBody.innerHTML += `<div class="cart-body-design">
                        <div class="p-img">
                            <img src="${f.productImageURLs[0]}" alt="">
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
                        var dummy=parseInt(e.innerHTML)
                        sum +=dummy
                    })
                    Gtotal.innerHTML=`Total: Rs. ${sum}`
                }
                total()
            })
        })

    }
    catch (error) {
        console.log(error);
    }
}
displayProduct()
can.addEventListener("click", () => {
    cartDesign.style.right = "-100%"
})
men.addEventListener("click", () => {
    male.innerHTML = "";
    i = "men"
    displayProduct()
})
beauty.addEventListener("click", () => {
    male.innerHTML = "";
    i = "beauty"
    displayProduct()
})
women.addEventListener("click", () => {
    male.innerHTML = "";
    i = "women"
    displayProduct()
})

// function cartItem() {
//     var
// }