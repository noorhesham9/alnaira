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