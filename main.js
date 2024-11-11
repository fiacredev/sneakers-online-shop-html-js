
const products = [
    {
        id:1,
        image:"./images/one.jpg",
        title:" Jay 1",
        price:345
    },
    {
        id:2,
        image:"./images/jay4.jpg",
        title:" jay 4",
        price:133
    },
    {
        id:3,
        image:"./images/eleven.jpeg",
        title:" Jay 11",
        price:133
    },
    {
        id:1,
        image:"./images/cap.jpg",
        title:" jay 6",
        price:345
    },
    {
        id:1,
        image:"./images/jay11.jpg",
        title:" jay 11",
        price:345
    },
    {
        id:1,
        image:"./images/fosi.jpg",
        title:" Force",
        price:345
    },
    {
        id:1,
        image:"./images/yeezy.png",
        title:"yeezy",
        price:345
    },
    {
        id:1,
        image:"./images/capt.jpg",
        title:" jay 6",
        price:345
    },
    {
        id:1,
        image:"./images/force.jpg",
        title:"yeezy",
        price:345
    },
    {
        id:1,
        image:"./images/jayone.jpg",
        title:" jay 1",
        price:345
    },

];  

const collection = [... new Set(products.map((items)=>{
    return items;
}))]

// deal with men page
let i=0;
document.getElementById("root").innerHTML = collection.map((item)=>{
    var {image,title,price} = item;
    return(
        `<div class="box">
        <div class="image-box">
            <img src="${image}" alt="">
        </div>
        <div class="downBottom">
            <h3>title:${title}</h3>
            <h3>price:${price}</h3>`+
        "<button onclick='addToCart("+(i++)+")'>add to cart</button>" +
        `</div>
         </div>`
    );
}).join("");
 
 const cart = [];

function addToCart(a){
    cart.push({... collection[a]});
    displayCarti();
    
    document.getElementById("warn").style.display="block";
    document.getElementById("warn").style.transition="0.2s";
    setTimeout(() => {
        document.getElementById("warn").style.display="none";
    }, 700);
 }

 function delCart(a){
    cart.splice(a,1);
    displayCarti();
 }

 function displayCarti(a){
     let j=0;let total=0
     document.getElementById("count").innerHTML=cart.length;
 if(cart.length == 0){
     document.getElementById("cartAppend").innerHTML = "our cart now is empty";
     document.getElementById("total").innerHTML="$"+0+".00";
 }else{
     document.getElementById("cartAppend").innerHTML = cart.map((item)=>{
         var {image,title,price} = item;    
         total=total+price;
         document.getElementById("total").innerHTML = "$"+total+".00";
         return(            
             `<div class="upCart">
             <img src="${image}" class="row-img"></img>
             <div class="bottom">
             <h3>${title}</h3>
             <h3>${price}</h3>` + 
             "<i onclick='delCart("+(j++)+")'  class='bi bi-trash'></i></div>" 
         )
     }).join("");
 }
 }


function changeMeOne(){
    const bigImage = document.getElementById("big");
    bigImage.src ="./images/jay4.jpg";
}
function changeMeTwo(){
    const bigImage = document.getElementById("big");
    bigImage.src ="./images/eleven.jpeg";
}
function changeMeThree(){
    const bigImage = document.getElementById("big");
    bigImage.src ="./images/cap.jpg";
}
function changeMeFour(){
    const bigImage = document.getElementById("big");
    bigImage.src ="./images/jay11.jpg";
}

// function that deal with incrementing the values entered in the input about shoes



const add = (function increment(){
    let counter = 0;
    return function increment(){counter+=125; return counter;}
})();

const addTwo = (function increment(){
    let counter = 0;
    return function increment(){counter+=1; return counter;}
})();

// deal with decrement

const minus = (function increment(){
    let counter = 2875;
    return function increment(){counter-=125; return counter;}
})();

const minusTwo = (function increment(){
    let counter = 23;
    return function increment(){counter-=1; return counter;}
})();

function decrii(){
document.getElementById("add").innerHTML=minus();
document.getElementById("addTwo").innerHTML=minusTwo();
document.getElementById("dollar").style.color="#333";
document.getElementById("dollar").style.display="flex";
}

function incrii(){
document.getElementById("add").innerHTML=add();
document.getElementById("addTwo").innerHTML=addTwo();
document.getElementById("dollar").style.display="flex";
document.getElementById("dollar").style.color="rgb(255, 68, 1)";
}
// codes that deal with cart

function displayCart(){
const cart = document.getElementById("cart").style.display="block";
}
function hideCart(){
    const cart = document.getElementById("cart").style.display="none";
}

