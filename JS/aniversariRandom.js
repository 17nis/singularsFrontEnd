
let any = Math.ceil(Math.random()*60) + 1960;
console.log(any);
let numMes = Math.ceil(Math.random()*12);
console.log(numMes);
let dia;
let mes= "";
var aniversari= {   dia: 0,
                    mes: 0,
                    any: 0
                }

switch (numMes){
    case 1:
    mes = "gener"
    break;
    case 2:
    mes = "febrer"
    break;
    case 3:
    mes = "març"
    break;
    case 4:
    mes = "abril"
    break;
    case 5:
    mes = "maig"
    break;
    case 6:
    mes = "juny"
    break;
    case 7:
    mes = "juliol"
    break;
    case 8:
    mes = "agost"
    break;
    case 9:
    mes = "setembre"
    break;
    case 10:
    mes = "octubre"
    break;
    case 11:
    mes = "novembre"
    break;
    case 12:
    mes = "desembre"
    break;
}
console.log(mes);
if ((numMes == 1) || (numMes ==  3) || (numMes ==  5) || (numMes == 7) || (numMes ==  8) || (numMes ==  10) || (numMes ==  12)){
    dia = Math.ceil(Math.random()*31);
}else if((numMes == 4) || (numMes == 6) || (numMes == 9) || (numMes == 11)){
    dia = Math.ceil(Math.random()*30);
}else {
    if((any % 400 == 0) || (any % 4 == 0 && any % 100 != 0)){
        dia = Math.ceil(Math.random()*29);
    }else{
        dia = Math.ceil(Math.random()*28);
    }
}
console.log(dia);
console.log("__________________________________________________________________");

console.log(`La data de naixement és el dia ${dia} de ${mes} del ${any}`);


let mesos30 = [4,6,9,11];
if (numMes == 2){
    if((any % 400 == 0) || (any % 4 == 0 && any % 100 != 0)){
        dia = Math.ceil(Math.random()*29);
    }else{
        dia = Math.ceil(Math.random()*28);
    }
}else if (mesos30.includes[1,3,5,7,9] == numMes ){
    dia = Math.ceil(Math.random()*31);
}else{
    dia = Math.ceil(Math.random()*30);
}

console.log(`La data de naixement 2 és el dia ${dia} de ${numMes} del ${any}`);

console.log("__________________________________________________________________");

var aniversari= {   dia: 0,
    mes: 0,
    any: 0
}
var trenta = [4,6,9,11];

var traspas = (aniversari.any % 400 == 0) || (aniversari.any % 4 == 0 && aniversari.any % 100 != 0);

aniversari.any = random(1960, 2020);
aniversari.mes = random(1, 12);

if (aniversari.mes == 2){
    if (traspas){
        aniversari.dia = random(1, 29);
    }else{
        aniversari.dia = random(1, 28);
    }
}else if (trenta.includes(aniversari.mes)){
    aniversari.dia = random(1, 30);  
} else{
    aniversari.dia = random(1, 31);
}

mesos = ["gener","febrer","març","abril","maig","juny","juliol","agost","setembre","octubre","novembre","desembre"];

console.log(`La data de naixement 3 és el dia ${aniversari.dia} de ${mesos[aniversari.mes -1]} del ${aniversari.any}`);

//funció que retorna un sencer entre min i max inclosos
function random(min, max){
    return min + parseInt(Math.random()*(max-min+1));
}