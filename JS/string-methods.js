var nom = "Nom cognom1 cognom2";

longitud = nom.length; //retorna el valor de la propietat "lenght", la longitud de la cadena

console.log(`La cadena de caràcters"${nom}"" té ${longitud} caràcters`);

segonCognom = nom.substring(12); //Retorna la cadena des del caràcter 12  fins al final

console.log(segonCognom);

primerCognom = nom.substring(3,10);// des de quin fins a quin- del 3 al 10

primerCognom2 = nom.substr(3,7);// des de on i durant quants caràcters -  del 3 i durant 7 caracters. 
    //pot tenir nombres negatius. ex: -6

console.log(nom[12]);//retorna el caràcter a la posició 12

console.log(primerCognom, primerCognom2);



let nomUpper = nom.toUpperCase();

console.log(nomUpper);

let nomlower= nom.toLowerCase();

console.log(nomlower);


// UTIL PER IDENTIFICAR INDEX DE CARACTERS

var espais = nom.indexOf(" "); //retorna l'index de la primera aparició del caràcter

console.log(espais);

var espais = nom.indexOf(" ", espais+1); //per buscar següent espai

console.log(espais);

var espais = nom.indexOf(" ", espais+1); //quan retorna -1 és que no n'hi han més

console.log(espais);

let text = nom.indexOf("cognom1"); //retorna l'index del començament de la string "cognom1"

console.log(text);

var lastSpace = nom.lastIndexOf(" "); //retorna l'index de l'última aparició del caràcter

console.log(lastSpace);


