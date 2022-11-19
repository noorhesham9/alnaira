let head = document.getElementById("Mainheader");
// let OrangelineINHead = document.querySelector(".container .contentHH")
const OrangelineINHead = document.querySelector(".container .contentHH");
const opacityNumber = () => {
  return `0`;
};
OrangelineINHead.style.setProperty("--opacity", opacityNumber());

let width = innerWidth;
let imagesLanding = document.getElementById("imagesLanding");

let totopbutton = document.getElementById("top");
window.onscroll = function () {
  if (window.scrollY >= 130) {
    head.style.backgroundColor = "black";
    const opacityNumber = () => {
      return `1`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
    // imagesLanding.style.top = "100px";
  } else if (window.scrollY <= 130 && myWidth > 767) {
    head.style.backgroundColor = "transparent";
    imagesLanding.style.top = "0px";
    const opacityNumber = () => {
      return `0`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
  }
  if (window.scrollY >= 260) {
    if (window.innerWidth < 420) {
      totopbutton.style.top = "calc(100% - 70px)";
    } else {
      totopbutton.style.top = "calc(100% - 115px)";
    }
  } else {
    totopbutton.style.top = "calc(-200px)";
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
  root.style.setProperty("--secondcolor6", "rgb(245, 6, 229,0.65)");
});

let MorangeP = document.getElementById("orange");
let MredP = document.getElementById("red");
let MblueP = document.getElementById("blue");
let McyanP = document.getElementById("cyan");
let MgreenP = document.getElementById("green");
let MfuchsiaP = document.getElementById("fuchsia");

MorangeP.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgba(255, 165, 0)");
  root.style.setProperty("--secondcolor6", "rgba(255, 165, 0,65)");
});
MredP.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgba(255, 0, 0)");
  root.style.setProperty("--secondcolor6", "rgba(255, 0, 0,65)");
});
MblueP.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(0, 0, 255)");
  root.style.setProperty("--secondcolor6", "rgb(0, 0, 255,0.65)");
});
McyanP.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(0, 174, 255)");
  root.style.setProperty("--secondcolor6", "rgb(0, 174, 255,0.65)");
});
MgreenP.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(0, 128, 0)");
  root.style.setProperty("--secondcolor6", "rgb(0, 128, 0,0.65)");
});
MfuchsiaP.addEventListener("click", function () {
  root.style.setProperty("--secondcolor", "rgb(245, 6, 229)");
  root.style.setProperty("--secondcolor6", "rgb(245, 6, 229,0.65)");
});
let loadddd = document.getElementById("loadddd");

// function checkLoaded() {
//   return (
//     document.readyState === "complete" || document.readyState === "interactive"
//   );
// }

let palette = document.getElementById("palette");

let paletteIMG = document.getElementById("paletteIMG");
let layoutTrans = document.getElementById("layoutTrans");

palette.addEventListener("click", function () {
  paletteIMG.style.right = "-10px";
  layoutTrans.style.display = "block";
  document.body.style.setProperty("overflow", "hidden", "important");
});
layoutTrans.addEventListener("click", function () {
  paletteIMG.style.right = " -66vw";
  layoutTrans.style.display = "none";
  document.body.style.setProperty("overflow", "visible", "important");
});

let rightforlinks = document.getElementById("rightforlinks");
let leftforlinks = document.getElementById("leftforlinks");
let linksforsocialmedia = document.getElementById("linksforsocialmedia");
rightforlinks.addEventListener("click", function () {
  linksforsocialmedia.style.right = "0";
  rightforlinks.style.display = "none";
  leftforlinks.style.display = "flex";
});
leftforlinks.addEventListener("click", function () {
  linksforsocialmedia.style.right = "-51px";
  leftforlinks.style.display = "none";
  rightforlinks.style.display = "flex";
});

// canvas
let resizeReset = function () {
  w = canvasBody.width = window.innerWidth;
  h = canvasBody.height = window.innerHeight;
};

const opts = {
  particleColor: "rgb(108,108,108)",
  lineColor: "rgb(108,108,108)",
  particleAmount: 30,
  defaultSpeed: 1,
  variantSpeed: 1,
  defaultRadius: 2,
  variantRadius: 2,
  linkRadius: 200,
};

window.addEventListener("resize", function () {
  deBouncer();
});

let deBouncer = function () {
  clearTimeout(tid);
  tid = setTimeout(function () {
    resizeReset();
  }, delay);
};

let checkDistance = function (x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
};

let linkPoints = function (point1, hubs) {
  for (let i = 0; i < hubs.length; i++) {
    let distance = checkDistance(point1.x, point1.y, hubs[i].x, hubs[i].y);
    let opacity = 1 - distance / opts.linkRadius;
    if (opacity > 0) {
      drawArea.lineWidth = 0.5;
      drawArea.strokeStyle = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
      drawArea.beginPath();
      drawArea.moveTo(point1.x, point1.y);
      drawArea.lineTo(hubs[i].x, hubs[i].y);
      drawArea.closePath();
      drawArea.stroke();
    }
  }
};

Particle = function (xPos, yPos) {
  this.x = Math.random() * w;
  this.y = Math.random() * h;
  this.speed = opts.defaultSpeed + Math.random() * opts.variantSpeed;
  this.directionAngle = Math.floor(Math.random() * 360);
  this.color = opts.particleColor;
  this.radius = opts.defaultRadius + Math.random() * opts.variantRadius;
  this.vector = {
    x: Math.cos(this.directionAngle) * this.speed,
    y: Math.sin(this.directionAngle) * this.speed,
  };
  this.update = function () {
    this.border();
    this.x += this.vector.x;
    this.y += this.vector.y;
  };
  this.border = function () {
    if (this.x >= w || this.x <= 0) {
      this.vector.x *= -1;
    }
    if (this.y >= h || this.y <= 0) {
      this.vector.y *= -1;
    }
    if (this.x > w) this.x = w;
    if (this.y > h) this.y = h;
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  };
  this.draw = function () {
    drawArea.beginPath();
    drawArea.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    drawArea.closePath();
    drawArea.fillStyle = this.color;
    drawArea.fill();
  };
};

function setup() {
  particles = [];
  resizeReset();
  for (let i = 0; i < opts.particleAmount; i++) {
    particles.push(new Particle());
  }
  window.requestAnimationFrame(loop);
}

function loop() {
  window.requestAnimationFrame(loop);
  drawArea.clearRect(0, 0, w, h);
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].draw();
  }
  for (let i = 0; i < particles.length; i++) {
    linkPoints(particles[i], particles);
  }
}

const canvasBody = document.getElementById("canvas"),
  drawArea = canvasBody.getContext("2d");
let delay = 200,
  tid,
  rgb = opts.lineColor.match(/\d+/g);
resizeReset();
setup();

// try div
let sky, center;

function dot(i) {
  const size = Math.round(Math.random() + 1);
  const root = document.createElement("span");
  root.style.top = center.y + "px";
  root.style.left = center.x + "px";
  root.classList.add("star", `size-${size}`, `axis-${i}`);
  return root;
}

function clear() {
  sky.innerHTML = "";
}

function init() {}

// window.onload = init;
window.onresize = WindowSize;
window.onload = WindowSize;
let myWidth = window.innerWidth;

function WindowSize() {
  // loadddd.style.top = `${window.scrollY.toString()}px` ;

  myWidth = window.innerWidth;

  imagesLanding.style.width = `${myWidth.toString()}px - 20px`;
  // الرقم اللي تحت ده هو ال النسبه بين الطول والعرض للصوره علشان اخلي الاب يتغير علي اساس الصوره
  // imagesLanding.style.height = `calc(${myWidth.toString() / 1.81}px)`;
  if (myWidth < 767) {
    head.style.backgroundColor = "black";
    const opacityNumber = () => {
      return `1`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
    // imagesLanding.style.top = "100px";
  } else {
    head.style.backgroundColor = "transparent";
    imagesLanding.style.top = "0px";
    const opacityNumber = () => {
      return `0`;
    };
    OrangelineINHead.style.setProperty("--opacity", opacityNumber());
  }

  sky = document.querySelector("#sky");
  center = {
    x: sky.clientWidth / 2,
    y: sky.clientHeight / 2,
  };
  clear();
  for (let i = 0; i < 360; i++) sky.appendChild(dot(i));
}

document.body.style.overflow = "hidden ";

setTimeout(function () {
  loadddd.style.top = `${window.scrollY.toString()}px`;
}, 300);

setTimeout(function () {
  loadddd.style.top = "-100vh";
  document.body.style.overflow = "visible ";
}, 3500);

// products animation
let AlLbutton = document.getElementById("Allproducts");
let inDoorbutton = document.getElementById("inDoorproducts");
let outDoorbutton = document.getElementById("outDoorproducts");
let decorbutton = document.getElementById("decorproducts");
let Allproducts = document.querySelectorAll(".ALL");
let inDoorproducts = document.querySelectorAll(".indoor");
let outDoorproducts = document.querySelectorAll(".outdoor");
let decorproducts = document.querySelectorAll(".decor");

AlLbutton.addEventListener("click", function () {
  inDoorbutton.classList.remove("active");
  AlLbutton.classList.add("active");
  outDoorbutton.classList.remove("active");
  decorbutton.classList.remove("active");

  Allproducts.forEach(function (product) {
    // product.style.display = "block";
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "block";
    }, 350);
    setTimeout(function () {
      product.style.opacity = "1";
    }, 650);
  });
});
inDoorbutton.addEventListener("click", function () {
  inDoorbutton.classList.add("active");
  AlLbutton.classList.remove("active");
  outDoorbutton.classList.remove("active");
  decorbutton.classList.remove("active");

  outDoorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "none";
    }, 350);
  });
  decorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "none";
    }, 350);
  });

  inDoorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "block";
    }, 350);
    setTimeout(function () {
      product.style.opacity = "1";
    }, 650);
  });
});
outDoorbutton.addEventListener("click", function () {
  inDoorbutton.classList.remove("active");
  AlLbutton.classList.remove("active");
  outDoorbutton.classList.add("active");
  decorbutton.classList.remove("active");

  inDoorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "none";
    }, 350);
  });
  decorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "none";
    }, 350);
  });

  outDoorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "block";
    }, 350);
    setTimeout(function () {
      product.style.opacity = "1";
    }, 650);
  });
});
decorbutton.addEventListener("click", function () {
  inDoorbutton.classList.remove("active");
  AlLbutton.classList.remove("active");
  outDoorbutton.classList.remove("active");
  decorbutton.classList.add("active");

  inDoorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "none";
    }, 350);
  });
  outDoorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "none";
    }, 350);
  });

  decorproducts.forEach(function (product) {
    product.style.opacity = "0";
    setTimeout(function () {
      product.style.display = "block";
    }, 350);
    setTimeout(function () {
      product.style.opacity = "1";
    }, 650);
  });
});
// Allproducts.forEach(function (product) {
//   product.addEventListener("click", function () {
//
//   });
// });

// animaition js

let animaitionW;
let animaitionH;
let whatdoH2 = document.getElementById("whatdoH2");
let h2fortitleForOurCom = document.getElementById("h2fortitleForOurCom");
let pfortitleForOurCom = document.getElementById("pfortitleForOurCom");
let whatcontboxnum1 = document.getElementById("boxnum1");
let whatcontboxnum2 = document.getElementById("boxnum2");
let whatcontboxnum3 = document.getElementById("boxnum3");

let h2secnum3 = document.getElementById("h2secnum3");
let productsh2 = document.getElementById("productsh2");

let secnum3img = document.getElementById("secnum3img");
let secnum3points = document.getElementById("secnum3points");
let moreproducts = document.getElementById("moreproducts");
let customerh2 = document.getElementById("customerh2");
let contactsh2 = document.getElementById("contactsh2");
console.log(window.innerHeight);
function animation() {
  animaitionW = window.innerWidth;
  animaitionH = window.scrollY;
  console.log(animaitionH);
  // **************************************
  // **************************************
  // **************************************

  // doooooooooooooooone

  // **************************************
  // **************************************
  // **************************************
  // from 1300 px to 1600px
  if (animaitionW >= 1300 && animaitionW < 1600) {

    //  default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 294) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }

    if (animaitionH < 483) {
      whatcontboxnum1.style.left = "-50vw";
    }
    if (animaitionH < 483) {
      whatcontboxnum3.style.right = "-50vw";
    }

    if (animaitionH < 483) {
      whatcontboxnum2.style.top = "-120%";
    }

    if (animaitionH < 972) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 1315) {
      secnum3img.style.right = "100%";
    }
    if (animaitionH < 1315) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 1731) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 1894) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation&&&&&&&&&&
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 294) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 483) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 483) {
      whatcontboxnum3.style.right = "0px";
    }
    if (animaitionH >= 483) {
      whatcontboxnum2.style.top = "0px";
    }

    if (animaitionH >= 972) {
      h2secnum3.style.top = "0";
    }
    if (animaitionH >= 1315) {
      secnum3img.style.right = "0";
    }
    if (animaitionH >= 1315) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 1731) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 1894) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }
  // **************************************
  // **************************************
  // from 1600 px to above
  if (animaitionW >= 1600) {
    // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 294) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }

    if (animaitionH < 483) {
      whatcontboxnum1.style.left = "-50vw";
    }
    if (animaitionH < 483) {
      whatcontboxnum3.style.right = "-50vw";
    }

    if (animaitionH < 483) {
      whatcontboxnum2.style.top = "-120%";
    }

    if (animaitionH < 972) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 1315) {
      secnum3img.style.right = "100%";
    }
    if (animaitionH < 1315) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 1731) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 1894) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation&&&&&&&&&&
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 294) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 483) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 483) {
      whatcontboxnum3.style.right = "0px";
    }
    if (animaitionH >= 483) {
      whatcontboxnum2.style.top = "0px";
    }

    if (animaitionH >= 972) {
      h2secnum3.style.top = "0";
    }
    if (animaitionH >= 1315) {
      secnum3img.style.right = "0";
    }
    if (animaitionH >= 1315) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 1731) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 1894) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // form 1200 px too 1300px
  if (animaitionW >= 1200 && animaitionW < 1300) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 294) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }

    if (animaitionH < 483) {
      whatcontboxnum1.style.left = "-50vw";
    }
    if (animaitionH < 483) {
      whatcontboxnum3.style.right = "-50vw";
    }

    if (animaitionH < 483) {
      whatcontboxnum2.style.top = "-120%";
    }

    if (animaitionH < 972) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 1315) {
      secnum3img.style.right = "100%";
    }
    if (animaitionH < 1315) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 1731) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 1894) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation&&&&&&&&&&
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 294) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 483) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 483) {
      whatcontboxnum3.style.right = "0px";
    }
    if (animaitionH >= 483) {
      whatcontboxnum2.style.top = "0px";
    }

    if (animaitionH >= 972) {
      h2secnum3.style.top = "0";
    }
    if (animaitionH >= 1315) {
      secnum3img.style.right = "0";
    }
    if (animaitionH >= 1315) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 1731) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 1894) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // form 800 px too 1200px
  if (animaitionW >= 992 && animaitionW < 1200) {
    // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 342) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 560) {
      whatcontboxnum1.style.left = "-50vw";
      whatcontboxnum2.style.right = "-50vw";
    }
    if (animaitionH < 1010) {
      whatcontboxnum3.style.left = "-50vw";
    }

    if (animaitionH < 1550) {
      h2secnum3.style.top = "-150px";
    }
    if (animaitionH < 1924) {
      secnum3img.style.right = "100%";
    }
    if (animaitionH < 1924) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2344) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 2478) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 342) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 560) {
      whatcontboxnum1.style.left = "0px";

      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1010) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 1550) {
      h2secnum3.style.top = "0";
    }
    if (animaitionH >= 1944) {
      secnum3img.style.right = "0";
    }
    if (animaitionH >= 1924) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2344) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 2478) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // form 768 px too 992
  if (animaitionW >= 768 && animaitionW < 992) {
    // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 342) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 501) {
      whatcontboxnum1.style.left = "-50vw";
      whatcontboxnum2.style.right = "-50vw";
    }
    if (animaitionH < 930) {
      whatcontboxnum3.style.left = "-50vw";
    }

    if (animaitionH < 1391) {
      h2secnum3.style.top = "-150px";
    }
    if (animaitionH < 1731) {
      secnum3img.style.right = "100%";
    }
    if (animaitionH < 1731) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2192) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 2354) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 342) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 501) {
      whatcontboxnum1.style.left = "0px";

      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 930) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 1391) {
      h2secnum3.style.top = "0";
    }
    if (animaitionH >= 1731) {
      secnum3img.style.right = "0";
    }
    if (animaitionH >= 1731) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2192) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 2354) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // from 700 to 768 px
  if (animaitionW >= 700 && animaitionW < 768) {
    // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 510) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1134) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1755) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2508) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2858) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 3310) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3457) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 510) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1134) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1755) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2508) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2858) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 3310) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3457) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // // from 650 to 700 px
  if (animaitionW >= 650 && animaitionW < 700) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 510) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1134) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1755) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2396) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2743) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 3204) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3344) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 510) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1134) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1755) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2396) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2743) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 3204) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3344) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // from 600 to 650 px
  if (animaitionW >= 600 && animaitionW < 650) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 594) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1147) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1725) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2288) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2652) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 3070) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3236) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 594) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1147) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1725) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2288) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2652) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 3070) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3236) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // from 550 to 600 px
  if (animaitionW >= 550 && animaitionW < 600) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 594) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1147) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1725) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2288) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2652) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 3070) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3236) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 594) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1147) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1725) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2288) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2652) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 3070) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3236) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // from 500 to 550 px
  if (animaitionW >= 500 && animaitionW < 550) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 566) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1100) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1642) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2158) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2473) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2932) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3109) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 566) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1100) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1642) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2158) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2473) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2932) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3109) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // // from 450 to 500 px
  if (animaitionW >= 450 && animaitionW < 500) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-100%";
      pfortitleForOurCom.style.right = "-100%";
    }
    if (animaitionH < 566) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1066) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1557) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2055) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2400) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2875) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3099) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 566) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1066) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1557) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2055) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2400) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2875) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3099) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // // from 400 to 450 px
  if (animaitionW >= 400 && animaitionW < 450) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-150%";
      pfortitleForOurCom.style.right = "-150%";
    }
    if (animaitionH < 566) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1066) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1525) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2030) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2360) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2781) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3034) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 566) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1066) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1525) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2030) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2360) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2781) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3034) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // // from 350 to 400 px
  if (animaitionW >= 350 && animaitionW < 400) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-150%";
      pfortitleForOurCom.style.right = "-150%";
    }
    if (animaitionH < 636) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1066) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1525) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 2030) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2360) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2781) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 3034) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 636) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1066) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1525) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 2030) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2360) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2781) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 3034) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }

  // // from 300 to 350 px
  if (animaitionW >= 310 && animaitionW < 350) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-150%";
      pfortitleForOurCom.style.right = "-150%";
    }
    if (animaitionH < 636) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1045) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1472) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 1929) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2279) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2720) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 2921) {
      AlLbutton.style.top = "-150px";
      outDoorbutton.style.top = "-150px";
      moreproducts.style.top = "-150px";
      inDoorbutton.style.bottom = "-150px";
      decorbutton.style.bottom = "-150px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 636) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1045) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1472) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 1929) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2279) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2720) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 2921) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }
  // **************************************
  // **************************************
  // **************************************

  // doooooooooooooooone

  // **************************************
  // **************************************
  // **************************************
  // // from 2800 to 3100 px
  if (animaitionW >= 280 && animaitionW < 310) {
    //   // default
    if (animaitionH < 130) {
      whatdoH2.style.top = "-200px";
    }
    if (animaitionH < 339) {
      h2fortitleForOurCom.style.left = "-150%";
      pfortitleForOurCom.style.right = "-150%";
    }
    if (animaitionH < 662) {
      whatcontboxnum1.style.left = "-100vw";
    }
    if (animaitionH < 1026) {
      whatcontboxnum2.style.right = "-100vw";
    }
    if (animaitionH < 1425) {
      whatcontboxnum3.style.left = "-100vw";
    }

    if (animaitionH < 1880) {
      h2secnum3.style.top = "-150px";
    }

    if (animaitionH < 2222) {
      secnum3points.style.left = "100%";
    }
    if (animaitionH < 2678) {
      productsh2.style.top = "-150px";
    }
    if (animaitionH < 2900) {
      AlLbutton.style.top = "-200px";
      outDoorbutton.style.top = "-200px";
      moreproducts.style.top = "-200px";
      inDoorbutton.style.bottom = "-200px";
      decorbutton.style.bottom = "-200px";
    }

    // animation
    if (animaitionH >= 130) {
      whatdoH2.style.top = "0px";
    }
    if (animaitionH >= 339) {
      h2fortitleForOurCom.style.left = "0";
      pfortitleForOurCom.style.right = "0%";
    }
    if (animaitionH >= 662) {
      whatcontboxnum1.style.left = "0px";
    }
    if (animaitionH >= 1026) {
      whatcontboxnum2.style.right = "0px";
    }
    if (animaitionH >= 1425) {
      whatcontboxnum3.style.left = "0";
    }
    if (animaitionH >= 1880) {
      h2secnum3.style.top = "0";
    }

    if (animaitionH >= 2222) {
      secnum3points.style.left = "0";
    }
    if (animaitionH >= 2678) {
      productsh2.style.top = "0";
    }
    if (animaitionH >= 2900) {
      AlLbutton.style.top = "0px";
      outDoorbutton.style.top = "0px";
      moreproducts.style.top = "0px";
      inDoorbutton.style.bottom = "0px";
      decorbutton.style.bottom = "0px";
    }
  }
}
window.addEventListener("load", animation);
window.addEventListener("resize", animation);
window.addEventListener("scroll", animation);
