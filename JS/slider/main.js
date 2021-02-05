var next = document.querySelector("#next");
var previous = document.querySelector("#previous");

var slider = document.querySelector(".slider1");

next.addEventListener("click", () => {
  moveSlider(1);
  clearInterval(auto);
});
previous.addEventListener("click", () => {
  moveSlider(-1);
  clearInterval(auto);
});

var imgActiva = 0;

function moveSlider(direction){
  imgActiva = imgActiva + direction;

  if (imgActiva > 3) imgActiva = 0;
  else if(imgActiva < 0) imgActiva = 3;

  slider.style.marginLeft = `${-800 * imgActiva}px`;
}

var auto = setInterval(()=> moveSlider(1), 3000);

// SLIDER 2

var next2 = document.querySelector("#next2");
var previous2 = document.querySelector("#previous2");

var slider2 = document.querySelector(".slider2");
var sliderImg = document.querySelectorAll(".img2")

next2.addEventListener("click", () => {
  moveSlider2(1);
  clearInterval(auto2);
});
previous2.addEventListener("click", () => {
  moveSlider2(-1);
  clearInterval(auto2);
});

var imgActiva2 = 0;
var numImg = sliderImg.length;

slider2.style.width = (numImg * 800) + "px";

function moveSlider2(direction){
  imgActiva2 = imgActiva2 + direction;
  console.log(imgActiva2, numImg);
  if (imgActiva2 >= numImg ) imgActiva2 = 0;
  else if(imgActiva2 < 0) imgActiva2 = numImg -1;

  slider2.style.marginLeft = `${-800 * imgActiva2}px`;
}

var auto2 = setInterval(()=> moveSlider2(1), 3000);


// SLIDER 3

var next3 = document.querySelector("#next3");
var previous3 = document.querySelector("#previous3");

var slider3 = document.querySelector(".slider3");
var slider3Img = document.querySelectorAll(".img3")

next3.addEventListener("click", () => {
  moveSlider3(1);
  clearInterval(auto3);
});
previous3.addEventListener("click", () => {
  moveSlider3(-1);
  clearInterval(auto3);
});

var imgActiva3 = 0;
var numImg = slider3Img.length;

slider3.style.width = (numImg * 800) + "px";

function moveSlider3(direction){
  imgActiva3 = imgActiva3 + direction;
  console.log(imgActiva3, numImg);
  if (imgActiva3 >= numImg ) imgActiva3 = 0;
  else if(imgActiva3 < 0) imgActiva3 = numImg -1;

  mostrar3(imgActiva3);

  slider3.style.marginLeft = `${-800 * imgActiva3}px`;
}

function mostrar3(img){
  slider3Img.forEach((imatge, i)=>{
    if (i==img){
      imatge.style.opacity = 1;
      imatge.style.transform = "scale(1)";
    }else{
      imatge.style.opacity = 0;
      imatge.style.transform = "scale(0)";
    }
  })
}


var auto3 = setInterval(()=> moveSlider3(1), 3000);

// SLIDER 4

var next4 = document.querySelector("#next4");
var previous4 = document.querySelector("#previous4");

var slider4 = document.querySelector(".slider4");
var sliderImg = document.querySelectorAll(".img4")

next4.addEventListener("click", () => {
  moveSlider4(1);
  clearInterval(auto4);
});
previous4.addEventListener("click", () => {
  moveSlider4(-1);
  clearInterval(auto4);
});

var imgActiva4 = 0;
var numImg = sliderImg.length;

slider4.style.width = (numImg * 800) + "px";

function moveSlider4(direction){
  imgActiva4 = imgActiva4 + direction;
  console.log(imgActiva4, numImg);
  if (imgActiva4 >= numImg ) imgActiva4 = 0;
  else if(imgActiva4 < 0) imgActiva4 = numImg -1;

  slider4.style.marginLeft = `${-800 * imgActiva4}px`;
}

var auto4 = setInterval(()=> moveSlider4(1), 4000);
