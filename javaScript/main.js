let head = document.getElementById("Mainheader");
// let OrangelineINHead = document.querySelector(".container .contentHH")
const OrangelineINHead = document.querySelector(".container .contentHH");
const opacityNumber = () => {
  return `0`;
};
OrangelineINHead.style.setProperty("--opacity", opacityNumber());

let width = innerWidth;
let imagesLanding = document.getElementById("imagesLanding");

window.onresize = WindowSize;
window.onload = WindowSize;
let myWidth = window.innerWidth;
function WindowSize() {
  myWidth = window.innerWidth;

  imagesLanding.style.width = `${myWidth.toString()}px - 20px`;
  // الرقم اللي تحت ده هو ال النسبه بين الطول والعرض للصوره علشان اخلي الاب يتغير علي اساس الصوره
  imagesLanding.style.height = `calc(${myWidth.toString() / 1.81}px)`;
  if (myWidth < 767) {
    head.style.backgroundColor = "black";
    const opacityNumber = () => {
      return `1`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
    imagesLanding.style.top = "100px";
  } else {
    head.style.backgroundColor = "transparent";
    imagesLanding.style.top = "0px";
    const opacityNumber = () => {
      return `0`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
  }
}

window.onscroll = function () {
  if (window.scrollY >= 130) {
    head.style.backgroundColor = "black";
    const opacityNumber = () => {
      return `1`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
    imagesLanding.style.top = "100px";
  } else if (window.scrollY <= 130 && myWidth > 767) {
    head.style.backgroundColor = "transparent";
    imagesLanding.style.top = "0px";
    const opacityNumber = () => {
      return `0`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
  }
};
let burger = document.getElementById("burger-to-x");
let x = document.getElementById("x-to-burger");
let burgernum1 = document.querySelector(".burger-icon-to-x .num1");
let burgernum2 = document.querySelector(".burger-icon-to-x .num2");
let burgernum3 = document.querySelector(".burger-icon-to-x .num3");
let xnum1 = document.querySelector(".x-icon-to-burger .num1");
let xnum2 = document.querySelector(".x-icon-to-burger .num2");
let xnum3 = document.querySelector(".x-icon-to-burger .num3");
let nav = document.getElementById("navforMopile");
let layoutforbody = document.querySelector(".layout ");
burger.addEventListener("click", function () {
  nav.style.right = "0";
  burgernum2.style.opacity = "0";
  burgernum1.style.top = "7px";
  burgernum1.style.backgroundcolor = "red";
  burgernum1.style.rotate = "45deg";
  burgernum3.style.top = "7px";
  burgernum3.style.backgroundcolor = "red";
  burgernum3.style.rotate = "-45deg";
  document.body.style.overflow = "hidden";
  layoutforbody.style.left = "0vw";
  setTimeout(function () {
    x.style.display = "block";
    burger.style.display = "none";
    burgernum2.style.opacity = "1";
    burgernum1.style.top = "0px";
    burgernum1.style.backgroundcolor = "white";
    burgernum1.style.rotate = "none";
    burgernum1.style.transform = "none";

    burgernum3.style.top = "14px";
    burgernum3.style.backgroundcolor = "white";
    burgernum3.style.rotate = "none";
    burgernum3.style.transform = "none";
  }, 200);
});

x.addEventListener("click", function () {
  nav.style.right = "-100%";
  document.body.style.overflow = "visible ";
  layoutforbody.style.left = "-100vw";
  xnum2.style.backgroundcolor = "white";
  xnum2.style.opacity = "1";
  xnum2.style.top = "7";
  xnum1.style.rotate = "none";
  xnum3.style.rotate = "none";
  xnum1.style.transform = "none";
  xnum3.style.transform = "none";

  xnum1.style.backgroundcolor = "white";
  xnum1.style.top = "0";
  xnum3.style.backgroundcolor = "white";
  xnum3.style.top = "14px";
  setTimeout(function () {
    burger.style.display = "block";
    x.style.display = "none";
    xnum2.style.opacity = "0";
    xnum1.style.top = "7px";
    xnum1.style.backgroundcolor = "red";
    xnum1.style.rotate = "45deg";
    xnum3.style.top = "7px";
    xnum3.style.backgroundcolor = "red";
    xnum3.style.rotate = "-45deg";
  }, 200);
});

let landDot1 = document.querySelector(".landing .dots #dot1");
let landDot2 = document.querySelector(".landing .dots #dot2");
let landDot3 = document.querySelector(".landing .dots #dot3");
let landDot4 = document.querySelector(".landing .dots #dot4");
let landimg1 = document.querySelector(".landing .images .mainimage");
let landimg2 = document.querySelector(".landing .images .image1");
let landimg3 = document.querySelector(".landing .images .image2");
let landimg4 = document.querySelector(".landing .images .image3");
let value;

let leftImage = document.getElementById("left");
let rightImage = document.getElementById("right");
value = "imagenum1";

let button;
landDot1.addEventListener("click", function () {
  button = "1";
});
landDot2.addEventListener("click", function () {
  button = "2";
});

landDot3.addEventListener("click", function () {
  button = "3";
});
landDot4.addEventListener("click", function () {
  button = "4";
});

// right and left by keyboard

document.onkeydown = checkKey;
let left = false;
let right = false;

function checkKey(e) {
  e = e || window.event;

  if (e.keyCode == "37") {
    left = true;
  } else if (e.keyCode == "39") {
    right = true;
  }
}
// functions for image number 1
function image1button2() {
  landDot1.classList.remove("active");
  landDot2.classList.add("active");
  landDot3.classList.remove("active");
  landDot4.classList.remove("active");
  landimg1.style.left = "-100%";
  landimg2.style.left = "0%";
  landimg3.style.left = "100%";
  landimg4.style.left = "200%";
  value = "imagenum2";
  button = 0;
  right = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
function image1button3() {
  landDot1.classList.remove("active");
  landDot2.classList.remove("active");
  landDot4.classList.remove("active");
  landDot3.classList.add("active");
  landimg1.style.left = "-200%";
  landimg2.style.left = "-100%";

  landimg3.style.left = "0%";
  landimg4.style.left = "100%";
  value = "imagenum3";
  button = 0;
}
function image1button4() {
  landDot1.classList.remove("active");
  landDot2.classList.remove("active");
  landDot4.classList.add("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "-300%";
  landimg2.style.left = "-200%";
  landimg3.style.left = "-100%";
  landimg4.style.left = "0%";
  value = "imagenum4";
  button = 0;
  left = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}

// functions for image number 2
function image2button1() {
  landDot1.classList.add("active");
  landDot2.classList.remove("active");
  landDot4.classList.remove("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "0%";
  landimg2.style.left = "100%";
  landimg3.style.left = "200%";
  landimg4.style.left = "300%";
  value = "imagenum1";
  button = 0;
  left = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
function image2button3() {
  landDot1.classList.remove("active");
  landDot2.classList.remove("active");
  landDot4.classList.remove("active");
  landDot3.classList.add("active");
  landimg2.style.left = "-100%";
  landimg1.style.left = "-200%";
  landimg4.style.left = "100%";
  landimg3.style.left = "0%";
  value = "imagenum3";
  button = 0;
  right = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
function image2button4() {
  landDot1.classList.remove("active");
  landDot2.classList.remove("active");
  landDot4.classList.add("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "-300%";
  landimg2.style.left = "-200%";
  landimg3.style.left = "-100%";
  landimg4.style.left = "0%";
  value = "imagenum4";
  button = 0;
}

// functions for image number 3
function image3button1() {
  landDot1.classList.add("active");
  landDot2.classList.remove("active");
  landDot4.classList.remove("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "0%";
  landimg3.style.left = "200%";
  landimg4.style.left = "300%";
  landimg2.style.left = "100%";
  value = "imagenum1";
  button = 0;
}
function image3button2() {
  landDot1.classList.remove("active");
  landDot2.classList.add("active");
  landDot4.classList.remove("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "-100%";
  landimg2.style.left = "0%";
  landimg3.style.left = "100%";
  landimg4.style.left = "200%";
  value = "imagenum2";
  button = 0;
  left = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
function image3button4() {
  landDot1.classList.remove("active");
  landDot2.classList.remove("active");
  landDot4.classList.add("active");
  landDot3.classList.remove("active");
  landimg3.style.left = "-100%";
  landimg4.style.left = "0%";
  landimg2.style.left = "-200%";
  landimg1.style.left = "-300%";

  value = "imagenum4";
  button = 0;
  right = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
// functions for image number 4
function image4button1() {
  landDot1.classList.add("active");
  landDot2.classList.remove("active");
  landDot4.classList.remove("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "0%";
  landimg4.style.left = "300%";
  landimg2.style.left = "100%";
  landimg3.style.left = "200%";

  value = "imagenum1";
  button = 0;
  right = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
function image4button2() {
  landDot1.classList.remove("active");
  landDot2.classList.add("active");
  landDot4.classList.remove("active");
  landDot3.classList.remove("active");
  landimg1.style.left = "-100%";
  landimg4.style.left = "200%";
  landimg2.style.left = "0%";
  landimg3.style.left = "100%";

  value = "imagenum2";
  button = 0;
}
function image4button3() {
  landDot1.classList.remove("active");
  landDot2.classList.remove("active");
  landDot4.classList.remove("active");
  landDot3.classList.add("active");
  landimg1.style.left = "-200%";
  landimg4.style.left = "100%";
  landimg2.style.left = "-100%";
  landimg3.style.left = "0%";
  value = "imagenum3";
  button = 0;
  left = false;
  direction = "0";
  touchright = false;
  touchleft = false;
}
let direction = "0";
leftImage.addEventListener("click", function () {
  direction = "-1";
});
rightImage.addEventListener("click", function () {
  direction = "1";
});
let touchright = false;
let touchleft = false;
var startingX, startingY, movingX, movingY;
function touchStart(evt) {
  startingX = evt.touches[0].clientX;
  startingY = evt.touches[0].clientY;
}
function touchMove(evt) {
  movingX = evt.touches[0].clientX;
  movingY = evt.touches[0].clientY;
}
function touchEnd() {
  if (startingX + 100 < movingX && window.scrollY <= 130) {
    touchleft = true;
  }
  if (startingX - 100 > movingX && window.scrollY <= 130) {
    touchright = true;
  }
}

setInterval(function () {
  if (value == "imagenum1") {
    landimg2.style.left = "100%";
    landimg1.style.left = "0%";
    landimg3.style.left = "200%";
    landimg4.style.left = "300%";
    if (
      button == "2" ||
      right == true ||
      direction == "1" ||
      touchright == true
    ) {
      image1button2();
    }

    if (button == "3") {
      image1button3();
    }

    if (
      button == "4" ||
      left == true ||
      direction == "-1" ||
      touchleft == true
    ) {
      image1button4();
    }
    if (value == "imagenum1") {
      setTimeout(function () {
        if (value == "imagenum1") {
          image1button2();
        }
      }, 4000);
    }
  }

  if (value == "imagenum2") {
    if (
      button == "1" ||
      left == true ||
      direction == "-1" ||
      touchleft == true
    ) {
      image2button1();
    }

    if (
      button == "3" ||
      right == true ||
      direction == "1" ||
      touchright == true
    ) {
      image2button3();
    }
    if (button == "4") {
      image2button4();
    }
    if (value == "imagenum2") {
      setTimeout(function () {
        if (value == "imagenum2") {
          image2button3();
        }
      }, 4000);
    }
  }
  //   image num3333333333333333
  if (value == "imagenum3") {
    if (button == "1") {
      image3button1();
    }
    if (
      button == "2" ||
      left == true ||
      direction == "-1" ||
      touchleft == true
    ) {
      image3button2();
    }

    if (
      button == "4" ||
      right == true ||
      direction == "1" ||
      touchright == true
    ) {
      image3button4();
    }
    if (value == "imagenum3") {
      setTimeout(function () {
        if (value == "imagenum3") {
          image3button4();
        }
      }, 4000);
    }
  }
  if (value == "imagenum4") {
    if (
      button == "1" ||
      right == true ||
      direction == "1" ||
      touchright == true
    ) {
      image4button1();
    }
    if (button == "2") {
      image4button2();
    }
    if (
      button == "3" ||
      left == true ||
      direction == "-1" ||
      touchleft == true
    ) {
      image4button3();
    }
    if (value == "imagenum4") {
      setTimeout(function () {
        if (value == "imagenum4") {
          image4button1();
        }
      }, 4000);
    }
  }
}, 300);

//عمل الالوان للموقع
let Morange = document.getElementById("Morange");
let Mred = document.getElementById("Mred");
let Mblue = document.getElementById("Mblue");
let Mcyan = document.getElementById("Mcyan");
let Mgreen = document.getElementById("Mgreen");
let Mfuchsia = document.getElementById("Mfuchsia");
var root = document.querySelector(":root");

Morange.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgba(255, 165, 0)");
  root.style.setProperty("--secondcolor6", "rgba(255, 165, 0,65)");
});
Mred.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgba(255, 0, 0)");
  root.style.setProperty("--secondcolor6", "rgba(255, 0, 0,65)");
});
Mblue.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(0, 0, 255)");
  root.style.setProperty("--secondcolor6", "rgb(0, 0, 255,0.65)");
});
Mcyan.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(0, 174, 255)");
  root.style.setProperty("--secondcolor6", "rgb(0, 174, 255,0.65)");
});
Mgreen.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(0, 128, 0)");
  root.style.setProperty("--secondcolor6", "rgb(0, 128, 0,0.65)");
});
Mfuchsia.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(245, 6, 229)");
  root.style.setProperty("--secondcolor", "rgb(245, 6, 229,0.65)");
});
