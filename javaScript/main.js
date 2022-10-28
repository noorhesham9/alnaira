let head = document.getElementById("Mainheader")
// let OrangelineINHead = document.querySelector(".container .contentHH")
const OrangelineINHead = document.querySelector('.container .contentHH')
const opacityNumber = () => {
    return `0`
  }
  OrangelineINHead.style.setProperty('--opacity', opacityNumber())

let width = innerWidth;
window.onscroll = function(){
  
  if(window.scrollY>=130){
    head.style.backgroundColor = "black"
    const opacityNumber = () => {
        return `1`
      }
      OrangelineINHead.style.setProperty('--opacity', opacityNumber())
  }
  else{    head.style.backgroundColor = "transparent"

  const opacityNumber = () => {
    return `0`
  }
  OrangelineINHead.style.setProperty('--opacity', opacityNumber())
  }
}
let burger = document.getElementById("burger-to-x")
let x = document.getElementById("x-to-burger")
let burgernum1 = document.querySelector(".burger-icon-to-x .num1")
let burgernum2 = document.querySelector(".burger-icon-to-x .num2")
let burgernum3 = document.querySelector(".burger-icon-to-x .num3")
let xnum1 = document.querySelector(".x-icon-to-burger .num1")
let xnum2 = document.querySelector(".x-icon-to-burger .num2")
let xnum3 = document.querySelector(".x-icon-to-burger .num3")
// let nav = document.getElementById("navforMopile")
burger.addEventListener("click", function() {
    // nav.style.right = "0"
    burgernum2.style.opacity = "0"
    burgernum1.style.top = "7px"
    burgernum1.style.backgroundcolor = "red"
    burgernum1.style.rotate = "45deg"
    burgernum3.style.top = "7px"
    burgernum3.style.backgroundcolor = "red"
    burgernum3.style.rotate = "-45deg"
    setTimeout(function() {
        x.style.display = "block"
        burger.style.display = "none"
        burgernum2.style.opacity = "1"
        burgernum1.style.top = "0px"
        burgernum1.style.backgroundcolor = "white"
        burgernum1.style.rotate = "none"
        burgernum1.style.transform = "none"

        burgernum3.style.top = "14px"
        burgernum3.style.backgroundcolor = "white"
        burgernum3.style.rotate = "none"
        burgernum3.style.transform = "none"
    }, 200)
});

x.addEventListener("click", function() {
    // nav.style.right = "-100%"

    xnum2.style.backgroundcolor = "white"
    xnum2.style.opacity = "1"
    xnum2.style.top = "7"
    xnum1.style.rotate = "none"
    xnum3.style.rotate = "none"
    xnum1.style.transform = "none"
    xnum3.style.transform = "none"

    xnum1.style.backgroundcolor = "white"
    xnum1.style.top = "0"
    xnum3.style.backgroundcolor = "white"
    xnum3.style.top = "14px"
    setTimeout(function() {
        burger.style.display = "block"
        x.style.display = "none"
        xnum2.style.opacity = "0"
        xnum1.style.top = "7px"
        xnum1.style.backgroundcolor = "red"
        xnum1.style.rotate = "45deg"
        xnum3.style.top = "7px"
        xnum3.style.backgroundcolor = "red"
        xnum3.style.rotate = "-45deg"
    }, 200)

});


let landDot1 = document.querySelector(".landing .dots #dot1")
let landDot2 = document.querySelector(".landing .dots #dot2")
let landDot3 = document.querySelector(".landing .dots #dot3")
let landDot4 = document.querySelector(".landing .dots #dot4")
let landimg1 = document.querySelector(".landing .images .mainimage")
let landimg2 = document.querySelector(".landing .images .image1")
let landimg3 = document.querySelector(".landing .images .image2")
let landimg4 = document.querySelector(".landing .images .image3")

function imagenum1() {
    landDot1.classList.add("active")
    landDot2.classList.remove("active")
    landDot3.classList.remove("active")
    landDot4.classList.remove("active")
    landimg1.style.left = "0"
    landimg2.style.left = "100%"
    landimg3.style.left = "200%"
    landimg4.style.left = "-100%"
  
        landimg4.style.visibility = "hidden"

    setTimeout(function(){
        landimg4.style.left = "300%"
        
    }, 2000)
}

function imagenum2() {
    landDot1.classList.remove("active")
    landDot2.classList.add("active")
    landDot3.classList.remove("active")
    landDot4.classList.remove("active")
    landimg1.style.left = "-100%"
    setTimeout(function(){
        landimg1.style.left = "300%"
        landimg4.style.visibility = "visible"
    }, 2000)
    landimg2.style.left = "0%"
    landimg3.style.left = "100%"
    landimg4.style.left = "200%"
}

function imagenum3() {
    landDot1.classList.remove("active")
    landDot2.classList.remove("active")
    landDot4.classList.remove("active")
    landDot3.classList.add("active")

    landimg1.style.left = "200%"
    landimg2.style.left = "-100%"
    setTimeout(function(){
        landimg2.style.left = "300%"
    }, 2000)
    landimg3.style.left = "0%"
    landimg4.style.left = "100%"
}
function imagenum4() {
    landDot1.classList.remove("active")
    landDot2.classList.remove("active")
    landDot3.classList.remove("active")
    landDot4.classList.add("active")

    landimg1.style.left = "100%"
    landimg2.style.left = "200%"
    landimg3.style.left = "-100%"
    setTimeout(function(){
        landimg3.style.left = "300%"
    }, 2000)
    landimg4.style.left = "0%"
}
// landDot1.addEventListener("click", function imagenum1() {
//     landDot1.classList.add("active")
//     landDot2.classList.remove("active")
//     landDot3.classList.remove("active")
//     landDot4.classList.remove("active")
//     landimg1.style.left = "0"
//     landimg2.style.left = "100%"
//     landimg3.style.left = "200%"
//     landimg4.style.left = "300%"
// })


// landDot2.addEventListener("click", function imagenum2() {
//     landDot1.classList.remove("active")
//     landDot2.classList.add("active")
//     landDot3.classList.remove("active")
//     landDot4.classList.remove("active")
//     landimg1.style.left = "-100%"
//     landimg2.style.left = "0%"
//     landimg3.style.left = "100%"
//     landimg4.style.left = "200%"
// })

// landDot3.addEventListener("click", function imagenum3() {
//     landDot1.classList.remove("active")
//     landDot2.classList.remove("active")
//     landDot4.classList.remove("active")
//     landDot3.classList.add("active")
//     landimg1.style.left = "-200%"
//     landimg2.style.left = "-100%"
//     landimg3.style.left = "0%"
//     landimg4.style.left = "100%"
// })
// landDot4.addEventListener("click", function imagenum4() {
//     landDot1.classList.remove("active")
//     landDot2.classList.remove("active")
//     landDot3.classList.remove("active")
//     landDot4.classList.add("active")
//     landimg1.style.left = "-300%"
//     landimg2.style.left = "-200%"
//     landimg3.style.left = "-100%"
//     landimg4.style.left = "0%"
// })

function all() {
    setTimeout(imagenum1, 16000)
    setTimeout(imagenum2, 4000)
    setTimeout(imagenum3, 8000)
    setTimeout(imagenum4, 12000)
}
all();
setInterval(all, 17000)
let imagesLanding = document.getElementById("imagesLanding")

window.onresize = WindowSize;
window.onload = WindowSize;
function WindowSize() {
    let myWidth = window.innerWidth;
    imagesLanding.style.width = `${myWidth.toString()}px - 20px`
        // الرقم اللي تحت ده هو ال النسبه بين الطول والعرض للصوره علشان اخلي الاب يتغير علي اساس الصوره 
    imagesLanding.style.height = `calc(${myWidth.toString() / 1.81}px)`
}