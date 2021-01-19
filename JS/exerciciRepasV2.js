
console.log("%c-------EXERCICI 35----------","color: orange" );
// exercici 35: gestionar un CSV. El programa ha d'agafar un string en format CSV i ficar tota la informació dins un array
// d'objectes amb els noms de les columnes com a propietats
//// PISTA: necessitareu ajuda. Demaneu-la
//// PISTA 2: encara que no hi hagi \n per marcar els salts de línia, els detexta igual perquè uso cometes ``

var csv = `Year,Make,Model,Description,Price
           1997,Ford,E350,ac abs moon,3000.00
           1999,Chevy,Venture "Extended Edition",,4900.00
           1999,Chevy,Venture "Extended Edition XL",,5000.00
           1996,Jeep,Grand Cherokee,MUST SELL! air moon-roof loaded,4799.00`

//* TODO gestionar el csv perquè acabi sent una cosa com la de sota

arrGeneral = csv.split('\n'); 

let header = arrGeneral[0].split(',');
let objecteCSV = [];

for(let i = 1; i < arrGeneral.length; i++) {
    let data = arrGeneral[i].split(',');
    let obj = {};
    for(var j = 0; j < data.length; j++) {
        obj[header[j].trim()] = data[j].trim();
    }
    objecteCSV.push(obj);
}
console.log(objecteCSV);

// var cotxes = [ { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "ac, abs, moon",
//                  Price = 3000.00
//                 },    
//                { Year = 1997,
//                  Make = "Ford",
//                  Model = "E350",
//                  Description = "",
//                  Price = 3000.00
//                 } ];



console.log("-------------------- FI DELS EXERCICIS --------------------");