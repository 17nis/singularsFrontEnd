// Seleccionar un element del DOM
var button = document.querySelector("#log");
console.log(button);

// 
var divForm = document.querySelector(".form");
console.log(divForm);

// Accedir a una propietat de l'element del DOM
var contingut = button.innerHTML; //la propietat innerHTML torna en un string el que hi ha entres les etiquetes de l'element
console.log(contingut);

var styleDiv = divForm.style.backgroundColor;
console.log(styleDiv);

var styleDivComp = getComputedStyle(divForm).background; //no serveix per reescriure dades, es una funció que retorna valor, no un element
console.log(styleDivComp);

//Modificar una propietat del DOM
button.innerHTML = "CONSOLA";

divForm.style.backgroundColor = "black";

// Afegir un detector d'esdeveniments a un element
button.addEventListener("click", () => divForm.style.backgroundColor= "red");
