console.log("JavaScript carregat des d'un document .js dins el <body>");

//document.write("<p>Això escriu dins el body (.js extern)</p>");

console.log("Aquí començen els exercicis:")



//* ------------------------ Variables --------------------------

// exercici 1: intercanvi de variables
console.log("%c-------EXERCICI 1----------","color: orange" );
var primer, segon;

primer = 1;

segon = 2;

//*: aquí el teu codi

[primer, segon] = [segon, primer];

console.log(primer,segon);  // ha de mostrar 2 1



//* ------------------------- Funcions --------------------------

// exercici 2: defineix una funció psicologo() que et pregunti "Com estàs?" al executar-la
console.log("%c-------EXERCICI 2----------","color: orange" );

//* TODO: aquí la definició de psicolog() 

psicologo();

function psicologo(){
    console.log("Com estàs?");
}

// exercici 3: defineix una funció pregunta() que et pregunti "T'agrada la pizza?"
// quan li introduim com a paràmentre "la pizza"

console.log("%c-------EXERCICI 3----------","color: orange" );
//* TODO: aquí la definició de pregunta() 

pregunta("la pizza");

function pregunta(x){
    console.log("t'agrada "+ x +"?")
}


// exercici 4: defineix una funció pregunta2() que et retorni "T'agrada la pizza"
// quan li introduim com a paràmentre "la pizza"

//* TODO: aquí la definició de pregunta2() 
console.log("%c-------EXERCICI 4----------","color: orange" );

function pregunta2(x){
    return "t'agrada " + x;
}
console.log(pregunta2("la pizza") + " amb piña?");


// exercici 5: defineix una funció metresCubicsALitres() que passi metres cúbics a litres i retorni el resultat
// i una altra mostrarSolució() que usi la primera per mostrar per la consola "X metres cúbics són Y litres"
console.log("%c-------EXERCICI 5 A----------","color: orange" );
var m3 = 8;
let resultat;
//* TODO: aquí les definicions de metresCubicsALitres() i mostrarSolució() 
metresCubicsALitres(m3);
function metresCubicsALitres(m3){
    resultat= m3*1000;
    return resultat;
}
mostrarSolució(resultat, m3);
function mostrarSolució(resultat, m3){
    console.log(m3 + " metres cúbics són " + resultat+ " litres")

}


// exercici 5: defineix dues funcions afegirDiners() i gastarDiners() que sumi/resti a una variable externa el valor
// indicat al paràmetre i mostri a la consola la quantitat actual de diners

console.log("%c-------EXERCICI 5 B----------","color: orange" );

var diners = 0;

//* TODO: definició de afegirDiners() i gastarDiners() 

afegirDiners(20);
gastarDiners(15);
afegirDiners(40);
gastarDiners(25);
function afegirDiners(x){
    diners += x;
    console.log(diners);
}
function gastarDiners(x){
    diners -= x;
    console.log(diners);
}
console.log("Final:"+diners); // això retornarà 20



//* ------------------------------ Condicionals --------------------------------

// exercici 6: fes un diàleg que et demani la talla de samarreta que vols comprar (S, M, L, XL) i et digui per la consola
// quina talla has sel·leccionat i t'avisi si sel·lecciones una talla que no és vàlida

console.log("%c-------EXERCICI 6---------","color: orange" );

let tallaUsuari = prompt("Escull la teva talla: S / M / L / XL"); //* TODO: editar el missatge del prompt()
if (tallaUsuari) tallaUsuari = tallaUsuari.toUpperCase();
let talles = ["S", "M", "L", "XL"];
//* TODO: estructura condicional que digui per la consola la talla escollida

if(talles.includes(tallaUsuari)){
    console.log("Has seleccionat la talla " + tallaUsuari);
}else{
    console.log("La talla seleccionada no és vàlida --> " + tallaUsuari);
}



// exercici 7: defineix una funció amb modes que pugui calcular l'area o el perímetre d'un cercle i et faci console.log()
// de la cosa calculada

console.log("%c-------EXERCICI 7----------","color: orange" );

var radi = 5;
var mode = "P"; // "P" pel perímentre o "A" per l'àrea

//* TODO: defineix la funció cercle amb dos modes
function cercle(radi, mode){
    if (mode == "P"){
        let perimetre = 2*Math.PI*radi;
        console.log("El perímetre del cercle de radi "+radi.toFixed(2)+" és: "+perimetre);
    }else if(mode =="A"){
        let area = Math.PI*radi**2;
        console.log("L'area del cercle és: "+area.toFixed(2));
    }else{
        console.log("El mode escollit no és vàlid")
    }
}

cercle(radi, mode);


// exercici 8: defineix una funció que calculi l'àrea i el perímetre d'un polígon regular de N costats (3, 4, 5, 6...)

console.log("%c-------EXERCICI 8----------","color: orange" );
var costat = 3;
var costats = 5;

//* TODO: defineix la funció poligon()
poligon(costat, costats);

function poligon(costat, costats){
    let perimetre = costat * costats;
    console.log("el perímetre del polígon és de: " + perimetre);
    let apotema = costat/(2*Math.tan(Math.PI/costats));
    let area = (perimetre * apotema) / 2;
    console.log("l'area del polígon és de " + area);
}


// exercici 9: defineix una funció que et pregunti per prompt() quin item vols (samarreta, pantaló i barret), si és barret
// que et faci sel·leccionar el tipus (copa, pirata, gorra, llana), si és samarreta o pantaló que et faci sel·leccionar el color
// (pel color no hi ha opcions, és lliure) i et faci sel·leccionar la talla (S, M, L, XL). La funció retorna una cadena
// amb tota la informació per pintar-la en un console.log()

console.log("%c-------EXERCICI 9----------","color: orange" );

// TODO: defineix la funció botiga()
function botiga(){
    let item = prompt("Quin item vols? 'Samarreta', 'Pantalo', 'Barret'");
    item = item.toUpperCase();
    let color;
    let talla;
    let tipus;
    let items = ["SAMARRETA", "PANTALÓ", "PANTALO"];
    let found = false
    let talles = ["S", "M", "L", "XL"];
    let tallaCorrecte = false;
    let barrets =["COPA", "PIRATA", "GORRA", "LLANA"];

    for(x of items){
        if(item == x){
            color = prompt("Quin color vols? (elecció lliure)");
            color = color.toUpperCase();
            talla = prompt("Quina talla? S / M / L / XL");
            talla = talla.toUpperCase();
            for (y of talles){
                if (y == talla){
                    tallaCorrecte = true;
                }
            }
            if (tallaCorrecte == false){
                console.log("%cError. Escull una talla entre S / M / L / XL", "color:red")
                return;
            }else{
                console.log(`%cItem: ${item}. Color: ${color}. Talla: ${talla}.`, "color:green");
                found = true;
            }
        }
    }
    if(item == "BARRET"){
        tipus = prompt("Quin tipus vols? (Copa, Pirata, Gorra, Llana)");
        tipus = tipus.toUpperCase();
        for (barret of barrets){
            if(barret == tipus){
                tallaCorrecte = true;
            }
        }
        if (tallaCorrecte == false){
            console.log("%cError. Escull un tipus de barret entre: Copa, Pirata, Gorra o Llana", "color:red")
            return;
        }else{
            console.log(`%cItem: ${item}. Tipus: ${tipus}`, "color:green");
            found = true;
        }
    }else if(found == false){
        console.log("%cIntrodueix un item vàlid: samarreta, pantalo o barret", "color:red");
    }
}



var carrito = botiga();

console.log(carrito);  // això tornarà "Has demanat un barret de pirata (talla L)"


//* ---------------------------- Mètodes numbers -------------------------------

console.log("%c-------EXERCICI 11----------","color: orange" );
// exercici 11: defineix una funció calculadora que agafi com a paràmentres una operació i un o dos números 
// (que poden ser sencers, decimals o fraccions) i faci la operació (+, -, *, /, **, sqrt i cbrt)

//* TODO: defineix la funció calculadora() (reutilitza la que vam fer a classe fa uns dies)
calculadora()

function calculadora(){
    let num1 = parseFloat(prompt("Calculadora - Número 1:"));
    let num2;
    let sign = prompt('"+", "-", "*", "/", "sqrt", "cbrt" => sense cometes');
    let simbols = ["+", "-", "*", "/"];
    for(simbol of simbols){
        if(sign == simbol){ 
            let aux = parseFloat(prompt("Número 2"));
            num2 = aux;
        }
    }
    
    switch(sign){
        case "+":
            console.log( num1 + num2);
            break;
        case "-":
            console.log( num1 - num2);
            break;
        case "*":
            console.log( num1 * num2);
            break;
        case "/":
            if (num2 == 0){
                console.log("You can't devide by 0!")
            }else{
                console.log( num1 / num2);
            }
            break;
        case "sqrt":
            console.log( Math.sqrt(num1));
            break;
        case "cbrt":
            console.log( Math.cbrt(num1));
            break;
        default:
            alert("%cInsert a valid sign", "color: red")
    }

}

console.log("%c-------EXERCICI 12----------","color: orange" );
// exercici 12: a partir de tres números, calcula si poden ser els tres costats d'un triangle rectangle aplicant el
// teorema de Pitàgores (a**2 == b**2 + c**2 és "true" pels triangles rectangles quan "a" és el seu costat més llarg)

var c1, c2, c3;

c1 = 3;
c2 = 4;
c3 = 5;

// const triangleRectangle = (c1,c2,c3) => c3**2 == c2**2 + c1**2 ? true : false;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar true

c1 = 4;
c2 = 5;
c3 = 6;

console.log(triangleRectangle(c1,c2,c3));  // ha de tornar false

//* TODO: defineix la funció triangleRectangle()
function pitagoras(a,b,c){
    return a*a == b*b, c*c;
}

function triangleRectangle(a,b,c){
    return(pitagoras(a,b,c) ||pitagoras(b,c,a) ||pitagoras(c,a,b))
}

console.log("%c-------EXERCICI 13----------","color: orange" );
// exercici 13: a partir de dos catets, calcula la hipotenusa i els angles d'un triangle rectangle

c1 = 30;
c2 = 40;

//* TODO: defineix la funció calculaHipotenusa()
const calculaHipotenusa = (c1, c2) => hipotenusa = Math.sqrt(c1**2+c2**2);

//* TODO: defineix la funció calculaAngles()

const calculaAngles = (c1, c2) => {
    //angle1 =(Math.asin(c1/hipotenusa) * 180/Math.PI);
    //angle2 = 90-angle1;
    angle1=Math.atan(c2/c1)*180/Math.PI;
    angle2= Math.atan(c1/c2)*180/Math.PI;
    resultat = [angle1.toFixed(2), angle2.toFixed(2)];
    return resultat;
}

console.log(calculaHipotenusa(c1,c2));  // ha de donar 50

console.log(calculaAngles(c1,c2));      // ha de donar 53.13º i 36.87º



//* ---------------------------- Mètodes strings -------------------------------

//! ⚠️ en aquests exercicis no s'hi val usar el mètode .split() a no ser que s'indiqui el contrari ⚠️

console.log("%c-------EXERCICI 14----------","color: orange" );

// exercici 14: recrea la funció parseInt() de manera que agafi els números encara que hi hagi lletres abans
// p.e: "hola89234" ha de tornar "89234", "43'35465adeu" ha de tornar "43", "amor45.9odi" ha de tornar "45"

//* TODO: defineix la funció convertirEnEnter()
convertirEnEnter = (a) => {
    let text ="";
    let found = false;
    for(let i=0; i<a.length; i++){
        if(!isNaN(a[i])){
            text += a[i]; 
            found = true;
        }else if (found == true){
            return text;
        }
    }
    return text;
}

console.log(convertirEnEnter("hola89234"));     // ha de tornar 89234
console.log(convertirEnEnter("43.35465adeu"));  // ha de tornar 43
console.log(convertirEnEnter("amor45.9odi"));   // ha de tornar 45


console.log("%c-------EXERCICI 15----------","color: orange" );
// exercici 15: recrea la funció parseFloat() de manera que agafi els números encara que hi hagi lletres abans
// i accepti com a separador decimal els símbols ",", "." i "'"
// p.e: "hola89'234" ha de tornar "89.234", "43'35adeu" ha de tornar "43.35", "amor45.9odi" ha de tornar "45.9"

//* TODO: defineix la funció convertirEnDecimal()
convertirEnDecimal = (a) => {
    let text ="";
    let found = false;
    // for(let i=0; i<a.length; i++){
    //     if(!isNaN(a[i])){
    //         text += a[i]; 
    //         found = true;
    //     }else if (a[i]=="," || a[i]=="." ||a[i]=="'"){
    //         text += a[i]; 
    //     }else if (found == true){
    //         return text;
    //     }
    // }
    // return text;

    let separador = [",",".","'"];
    for(char of a){
        if(!isNaN(char)){
            text += char; 
            found = true;
        }else if (separador.includes(char)){
            text += char; 
        }else if (found == true){
            return text;
        }
    }
    return text;
}

console.log(convertirEnDecimal("%chola89'234","color:green"));     // ha de tornar 89.234
console.log(convertirEnDecimal("%c43'35adeu","color:green"));      // ha de tornar 43.35
console.log(convertirEnDecimal("%camor45.9odi","color:green"));    // ha de tornar 45.9

console.log("%c-------EXERCICI 16----------","color: orange" );
// exercici 16: recrea la funció "valor absolut", que torna el mateix número si és positiu i el mateix número
// canviat de signe si és negatiu (2 -> 2; -3.4 -> 3.4). No s'hi val usar Math.abs()

//* TODO: defineix la funció valorAbsolut()
const valorAbsolut = (input) =>{
    // let iterador = input.toString();
    // let resultat = "";
    // for (char of iterador){
    //     if (!isNaN(char) || char == "."){
    //         resultat += char;
    //     }
    // }
    // return resultat;
    if(input < 0){
        return 0 - input;
    }else{
        return input;
    }

    return num > 0 ? num : 0 - num;

    return String(num)[0] == "-" ? String(num).slice(1):num;
}
console.log(valorAbsolut(-3.14));        // ha de tornar 3.14
console.log(valorAbsolut(0));            // ha de tornar 0
console.log(valorAbsolut(1234.5678));    // ha de tornar 1234.5678
console.log(valorAbsolut(-1234.5678));   // ha de tornar 1234.5678

console.log("%c-------EXERCICI 17----------","color: orange" );
// exercici 17: crea una funció que agafi un string i que torni una lletra aleatoria (sense contar espais i signes 
// de puntuació)

var lletres = "aaaaabcdef!?*";

console.log(lletraRandom(lletres));     // torna una lletra entre la a i la f

//* TODO defineix la funció lletraRandom()
function lletraRandom(input){
    let onlyLetters = "";
    for(char of input){
        if(char.toUpperCase() != char.toLowerCase()){
            onlyLetters += char;
        }
    }
    let i = Math.ceil(Math.random()*onlyLetters.length);
    let resultat = onlyLetters[i];
    return resultat

    do{
        var char = word[Math.floor(Math.random()*input.length)]
    }while(char.toUpperCase()==char.toLowerCase())
    return char
}

console.log("%c-------EXERCICI 18----------","color: orange" );
// exercici 18: crea una funció que agafi un text i li'n separi les paraules (sense signes de puntuació) i les torni
// en un nou string separades per espais

var text = "En un lugar de La Mancha de cuyo nombre no quiero acordarme. Què tal, Manel?   Patata"

var paraules = separarParaules(text);

//* TODO: defineix la funció separarParaules()
function separarParaules(input){
    let onlyLetters = "";
    for(char of input){
        if(char.toUpperCase() != char.toLowerCase() || (char == " " && onlyLetters[onlyLetters.length -1] != " ")){
            onlyLetters += char;
        }
    }
    return onlyLetters;
}

console.log(paraules);

console.log("%c-------EXERCICI 19----------","color: orange" );
// exercici 19: crea una funció que agafi un string i que torni una paraula aleatòria continguda en ella (podeu cridar
// la funció separarParaules() dins d'aquesta funció)

console.log(paraulaRandom(text));

//* TODO defineix la funció paraulaRandom()
function paraulaRandom(input){
    let text = separarParaules(input);
    let ultimEspai = text.lastIndexOf(" ");
    let random = Math.ceil(Math.random()*ultimEspai);
    let resultat="";
    while (text[random] != " "){
        random--;
    }
    if(text[random] == " "){
        resultat += text[random];
        let i = random+1;
        while((text[i] != " ") && (i<text.length)){
            resultat += text[i];
            i++;
        }
    }
    return resultat;
}

console.log("%c-------EXERCICI 20----------","color: orange" );
// exercici 20: crea una funció que agafi una data DD/MM per prompt() i et retorni el teu signe de l'horòscop i una 
// predicció del que et passarà durant el dia

horoscop();
//* TODO defineix la funció horoscop()
function horoscop(){
    let data = prompt("DD/MM");
    let dia = data[0]+data[1];
    let mes = data[3]+data[4];
    console.log(dia, mes);
    if(dia <1 || dia >31){
        console.log("%cintrodueix la data en format DD/MM", "color:red");
    }else if(mes <1 || mes > 12){
        console.log("%cintrodueix la data en format DD/MM", "color:red");
    }
    switch (mes){
        case "01":
            if(dia < 21){
                console.log("Capricorn: La presència del transformador Plutó en el sector de les emocions t'ajudarà a mirar les coses d'una manera diferent.")
            }else{
                console.log("Aquarius: No ignoris la teva veu interior, ella et guiarà pel camí correcte. No guardis els teus sentiments, exterioritza'ls.")
            }
        case "02":
            if(dia < 19){
                console.log("Aquarius: No ignoris la teva veu interior, ella et guiarà pel camí correcte. No guardis els teus sentiments, exterioritza'ls. ")
            }else{
                console.log("Pisces: La teva part sentimental anirà guanyant espai a la teva part professional. Et venen canvis molt importants.")
            }
        case "03":
            if(dia < 21){
                console.log("Pisces: La teva part sentimental anirà guanyant espai a la teva part professional. Et venen canvis molt importants.")
            }else{
                console.log("Aries: Deixa que la creativitat et faci tenir noves sensacions, no frenis els teus instints i deixa't portar per la intuïció.")
            }
        case "04":
            if(dia < 21){
                console.log("Aries: Deixa que la creativitat et faci tenir noves sensacions, no frenis els teus instints i deixa't portar per la intuïció.")
            }else{
                console.log("Taurus: Si t'agraden poc les obligacions que t'imposa la vida, aprèn a dissimular, no et quedarà cap més recurs.")
            }
        case "05":
            if(dia < 21){
                console.log("Taurus: Si t'agraden poc les obligacions que t'imposa la vida, aprèn a dissimular, no et quedarà cap més recurs.")
            }else{
                console.log("Gemini: Confia més en les teves possibilitats laborals i podràs incrementar els teus ingressos. Tot depèn de tu.")
            }
        case "06":
            if(dia < 22){
                console.log("Gemini: Confia més en les teves possibilitats laborals i podràs incrementar els teus ingressos. Tot depèn de tu.")
            }else{
                console.log("Càncer: L'humor de la teva parella serà una mica esquerp i això significa que hauràs d'anar amb peus de plom.")
            }
        case "07":
            if(dia < 23){
                console.log("Càncer: L'humor de la teva parella serà una mica esquerp i això significa que hauràs d'anar amb peus de plom.")
            }else{
                console.log("Leo: Evita dir el que sents sense pensar dos cops abans d'obrir la boca. Evita els impulsos i el dia serà molt millor.")
            }
        case "08":
            if(dia < 23){
                console.log("Leo: Evita dir el que sents sense pensar dos cops abans d'obrir la boca. Evita els impulsos i el dia serà molt millor.")
            }else{
                console.log("Virgo: Fes tot allò que et vingui de gust, sense pensar en el que dirà la gent del teu voltant. Viu el moment.")
            }
        case "09":
            if(dia < 23){
                console.log("Virgo: Fes tot allò que et vingui de gust, sense pensar en el que dirà la gent del teu voltant. Viu el moment.")
            }else{
                console.log("Libra: Si tens paciència, aviat les persones que t'envolten valoraran la teva actuació i sabran recompensar-te.")
            }
        case "10":
            if(dia < 23){
                console.log("Libra: Si tens paciència, aviat les persones que t'envolten valoraran la teva actuació i sabran recompensar-te.")
            }else{
                console.log("Scorpio: Evita que et passin per alt els consells de la teva família. Si els escoltes amb atenció, et poden resultar molt útils.")
            }
        case "11":
            if(dia < 23){
                console.log("Scorpio: Evita que et passin per alt els consells de la teva família. Si els escoltes amb atenció, et poden resultar molt útils.")
            }else{
                console.log("Saggitarius: Frena una mica les despeses, sobretot en viatges i desplaçaments. Busca altres formes de divertir-te.")
            }
        case "12":
            if(dia < 22){
                console.log("Saggitarius: Frena una mica les despeses, sobretot en viatges i desplaçaments. Busca altres formes de divertir-te.")
            }else{
                console.log("Capricorn: La presència del transformador Plutó en el sector de les emocions t'ajudarà a mirar les coses d'una manera diferent.")
            }    
        default:
            console.log("La data introducida no és correcta");
    }
}

//* TODO defineix la funció prediccio()
arrFrase1 =["Hoy vigila con el cielo,","Mañana encontrás una sorpresa,","Tu amigo de la suerte es Pepe,"];
arrFrase2= [" no te debes duchar después de las 10 ", " la coliflor te traerá consuelo ", " vigila con Antonio"];
arrFrase3 =["y recuerda que el hielo resbala","y el calor volverá pronto", "y Juan no es de fiar"];

console.log("%cPredicción: "+arrFrase1[Math.floor(Math.random()*arrFrase1.length)]+arrFrase2[Math.floor(Math.random()*arrFrase2.length)]+arrFrase3[Math.floor(Math.random()*arrFrase3.length)], "color:purple");



// exercici 20.2: crea una funció que implementi l'horòscop xinès

//* TODO defineix la funció horoscopXines()
let anyNaixement = "";

do{
    anyNaixement = parseInt(prompt("Quin any vas nèixer?"));
}while(anyNaixement == isNaN);

let zodiacReminder = anyNaixement % 12;
animalZodiac = ["Mico", "Gall", "Gos", "Porc", "Rata", "Bou", "Tigre", "Conill", "Drac", "Serp", "Cavall", "Ovella"];
console.log("Segon el zodiac xinès, el teu animal per any de naixement és: " + animalZodiac[zodiacReminder]);



//* ------------------------------ Bucle for ------------------------------------
console.log("%c-------EXERCICI 21----------","color: orange" );
// exercici 21: fes un bucle que escrigui 10 vegades a la consola alternant un color i un altre

//* TODO el codi aquí
bucle();

function bucle(){
    for(let i = 0; i<10; i++){
        if (i%2 == 0){
            console.log("%c Bucle1","color:green");
        }else{
            console.log("%c Bucle2","color:blue");
        }
    }
}

console.log("%c-------EXERCICI 22----------","color: orange" );
// exercici 22: fes un bucle que escrigui 20 números i escrigui al seu costat: "hola" si és múltiple de 2, "adeu" si
// és múltiple de 3 i "què tal? si és múltiple de 5"

// TODO el codi aquí

for(let i = 1; i<=20; i++){
    if(i%2 == 0 && i%3 == 0 && i%5 == 0){
        console.log("Hola, adeu, què tal?");
    }else if(i%2 == 0 && i%3 == 0){
        console.log("Hola, adeu");
    }else if(i%2 == 0 && i%5 == 0){
        console.log("Hola, què tal");
    }else if(i%3 == 0 && i%5 == 0){
        console.log("adeu, què tal?");
    }else if(i%2 == 0){
        console.log("Hola");
    }else if(i%3 == 0){
        console.log("adeu");
    }else if(i%5 == 0){
        console.log("què tal?");
    }
}

console.log("%c-------EXERCICI 23----------","color: orange" );
// exercici 23: fes un contador que mostri a la consola els números de l'1 al número que introdueixis com a paràmentre
// (fins a 1000 com a màxim)
//// PISTA: usa la paraula clau "break"

var max = prompt("Fins quin número vols contar (1-1000)?");

//* TODO defineix aquí la funció contar()
function contar(max){
    for(let i = 1; i<=max; i++){
        console.log(i);
        if(i==1000){
            break;
        }
    }
}

contar(max); // això ha de mostrar a la consola els números de l'1 al número introduit



console.log("%c-------EXERCICI 24----------","color: orange" );

// exercici 24: fes un buscador de números primers. Li fixarem un límit (p.e. 100) i agafarà cada número i el dividirà
// per tots els anteriors; si alguna de les divisions dona zero, llavors no és primer; si cap dona zero, l'escriurà a la
// consola
//// PISTA: un número primer només és divisible per 1 i per si mateix

//* TODO el codi aquí
let found, divisor, num;

for(num = 1; num <= 100; num++){
    found = false;
    for(divisor = 2; divisor < num; divisor++){
        if(num % divisor == 0){
            found = true;
        }
    }
    if (found == false){
        console.log(num);
    }
}

console.log("%c-------EXERCICI 25----------","color: orange" );
// exercici 25: fes un contador que només mostri els números que tinguin un dígit contingut a la string predefinida fins a 100
//// PISTA: usa la paraula clau "continue"

var digits = prompt("Quins digits vols mostrar (1-9)?");

//* TODO defineix la funció mostrarDigits()
const mostrarDigits = (digits) =>{
    let count, i;
    OUTER: 
    for(i = 0; i <=100; i++){
        i = i.toString();
        count = 0;
        for (char of digits){   
            if(i.includes(char)){
                console.log(i);
                continue OUTER;
                // count++;
            }
        }
        // if(count>=1){
        //     console.log(i);
        // }
    }
}

mostrarDigits(digits);      // si digits és "2 3 4", això mostrarà "2, 3, 4, 12, 13, 14, 20, 21, 22, 23..."



//* ----------------------------- Bucle while -----------------------------------
console.log("%c-------EXERCICI 26----------","color: orange" );
// exercici 26: llista de la compra. Fes que un prompt es repeteixi fins que l'usuari introdueixi una paraula clau; fins
// llavors, cada paraula introduida serà un item de la llista de la compra, que s'escriurà després de que l'usuari l'aturi
// amb el format:       Llista de la compra:
//                       - Pa
//                       - Mantega
//                       - Aigua
//// PISTA: l'ultim console.log() mostrarà un string amb salts de línia "\n"

//* TODO aquí el codi
let input = "", list = "";
do{
input = prompt("Llista de la compra: (Paraula clau: pera)");
list += " - " + input + "\n";
}while(input != "pera");

console.log("Llista de la compra:"+ "\n" + list)


//* ---------------------------- Mètodes arrays ---------------------------------
console.log("%c-------EXERCICI 27----------","color: orange" );
// exercici 27: dia de la setmana. A partir d'un array amb els dies de la setmana, pinta a la consola quin dia és avui

var dies = ["dilluns", "dimarts", "dimecres", "dijous", "divendres", "dissabte", "diumenge"];

//* TODO aquí el codi
let data = new Date;
console.log(data);
let dia = data.getDay() -1;
if (dia == -1){
    dia = 6
}
console.log(dies[dia]);


console.log("%c-------EXERCICI 28----------","color: orange" );
// exercici 28: replicar split(). Defineix una funció que separi una cadena de caràcters amb el separador escollit

var cadena = "blaucacavermellcacagroccacamarrócacaverd";

//* TODO defineix aquó la funció separar()
function separar(cadena, separador){

    let newArray = [];
    while(cadena.indexOf(separador) != -1){
        newArray.push(cadena.slice(0, cadena.indexOf(separador)));
        cadena = cadena.slice(cadena.indexOf(separador) + separador.length);
    }    
    newArray.push(cadena.slice(0,cadena.length));
    return newArray;
}

console.log(separar(cadena, "caca"));   // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]

console.log("%c-------EXERCICI 29----------","color: orange" );
// exercici 29: defineix una funció que agafi els elements d'un array i els mogui N elements cap a la dreta

var array = ["primer", "segon", "tercer", "quart", "cinquè"]

//* TODO defineix aquí la funció moure()
function moure(array, num){
    for (let i = 0; i<num; i++){
        array.unshift(array.pop());
    }
    return array;
}

console.log(moure(array, 2));       // ha de mostrar ["quart", "cinquè", "primer", "segon", "tercer"]

console.log("%c-------EXERCICI 30----------","color: orange" );
// exercici 30: adapta l'exercici de la llista de la compra (ex. 26) perquè fiqui els elements en un array i
// els ordeni alfabèticament

//* TODO aquí el codi
let input2 = "", list2 = [];

while(input2 != "fi"){
    if(input2 != ""){
        list2.push(input2); 
    }input2 = prompt("Llista de la compra: (Paraula clau: fi)");
}
list2.sort();


console.log("Llista de la compra:"+ "\n" + list2)



console.log("%c-------EXERCICI 31----------","color: orange" );
// exercici 31: paradoxa de l'aniversari. Genera N dates d'aniversari aleatòries (1-365) en un array i comprova
// si hi ha alguna repetida. Fes això per N = 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 i mostra a la consola per quins
// hi ha hagut coincidències d'aniversari

//* TODO aquí el codi
let aniversaris = [];
let coincidencia = [];
let contador = 0;
let contador5 = 0; contador10= 0; contador15=0; contador20 =0; contador25 = 0; contador30= 0; contador35=0; contador40 =0; contador45=0; contador50 =0;
for(let i= 5; i<=50; i+=5){
    for(let j = 0; j<i; j++){
        let data = Math.ceil(Math.random()*365);
        aniversaris.push(data);
        console.log(data);
    }
    console.log("%citeració " + i, "color:green");
}
for (let i = 0; i<aniversaris.length; i++){
    for(let k = 0; k<i; k++){
        if (aniversaris[i] == aniversaris[k]){
            if(i<5){
                contador5++;
                coincidencia.push(aniversaris[i]);
            }else if (i >= 5 && i<15 && k>5){
                contador10++;
                coincidencia.push(aniversaris[i]);
            }else if (i>=15 && i<30 && k>15){
                contador15++;
                coincidencia.push(aniversaris[i]);
            }else if (i >= 30 && i<50 && k>30){
                contador20++;
                coincidencia.push(aniversaris[i]);
            }else if (i>=50 && i<75 && k>50){
                contador25++;
                coincidencia.push(aniversaris[i]);
            }else if (i >= 75 && i<105 && k>75){
                contador30++;
                coincidencia.push(aniversaris[i]);
            }else if (i>=105 && i<140 && k>105){
                contador35++;
                coincidencia.push(aniversaris[i]);
            }else if (i >= 140 && i<180 && k>140){
                contador40++;
                coincidencia.push(aniversaris[i]);
            }else if (i>=180 && i<225 && k>180){
                contador45++;
                coincidencia.push(aniversaris[i]);
            }else if(i>=225 && i<270 && k>225){
                contador50++;
                coincidencia.push(aniversaris[i]);
            }
        }
    }
}
console.log("Repeticions en N = 5 " + contador5);
console.log("Repeticions en N = 10 " + contador10);
console.log("Repeticions en N = 15 " + contador15);
console.log("Repeticions en N = 20 " + contador20);
console.log("Repeticions en N = 25 " + contador25);
console.log("Repeticions en N = 30 " + contador30);
console.log("Repeticions en N = 35 " + contador35);
console.log("Repeticions en N = 40 " + contador40);
console.log("Repeticions en N = 45 " + contador45);
console.log("Repeticions en N = 50 " + contador50);
console.log("Números amb coincidencia:" + coincidencia);


//* ------------------------------ Objectes -------------------------------------
console.log("%c-------EXERCICI 32----------","color: orange" );
// exercici 32: crea un objecte que tingui les propietats "nom", "any" i "edat" i un mètode calcularEdat()
// que calculi l'edat en funció de l'any de neixement i la guardi a la propietat "edat"
//// PISTA: useu Date()

//* TODO aquí les propietats de l'objecte

var persona = { nom:"Maria",
                any: 1985,
                edat: 0,
                calcularEdat: function () {
                    let data = new Date;
                    this.edat = (data).getFullYear() - this.any;
                }
            };

persona.calcularEdat();
//* TODO console.log() que digui "La Maria va nèixer el 1995 i té 25 anys" agafant les propietats de l'objecte
console.log("La "+persona.nom+" va nèixer el "+persona.any+" i té " + persona.edat +" anys");


console.log("%c-------EXERCICI 33----------","color: orange" );
// exercici 33: crea un objecte que contingui una paraula i el mètode separar() (de l'exercici 27) de tal manera
// que poguem usar-lo amb el codi següent

var frase = { string : "blaucacavermellcacagroccacamarrócacaverd",
                //* TODO aquí el mètode de l'objecte
                separar: function (separador){
                    let fraseSeparada = [];
                    while(this.string.indexOf(separador) != -1){
                        fraseSeparada.push(this.string.slice(0, this.string.indexOf(separador)));
                        this.string = this.string.slice(this.string.indexOf(separador) + separador.length);
                    }    
                    fraseSeparada.push(this.string.slice(0,this.string.length));
                    return fraseSeparada;
                }  
}

var fraseSeparada = frase.separar("caca");

console.log(fraseSeparada);     // ha de mostrar ["blau", "vermell", "groc", "marró", "verd"]


console.log("%c-------EXERCICI 34----------","color: orange" );
// exercici 34: adapta l'exercici de la llista de la compra (ex. 26 i 29) perquè fiqui els elements en un objecte
// separats per seccions (carnisseria, fruita i verdura, làctics, forn de pa) i ordenats alfabèticament. El console.log
// haurà de mostrar els productes classificats per seccions:           Llista de la compra:
//                                                                        - Carnisseria
//                                                                             + Hamburguesa
//                                                                             + Bistec
//                                                                             + Mandonguilles
//                                                                        - Fruita i verdura
//                                                                             + Plàtans
//                                                                             + Síndria
//// PISTA: el prompt demanarà dues paraules: el producte i una lletra per classificar-los (p.e. "magdalenes F")

//* TODO: aqui el codi

let llistaCompra = {
        carnisseria: [],
        fruitaVerdura: [],
        lactics: [],
        fornPa: [],
        altres: [],
        ordenar: function(){
            this.carnisseria.sort();
            this.fruitaVerdura.sort();
            this.lactics.sort();
            this.fornPa.sort();
            this.altres.sort();
        },
        afegir: function(producte, seccio){
            switch(seccio){
                case "C":
                    llistaCompra.carnisseria.push(producte);
                    break;
                case "FV":
                    llistaCompra.fruitaVerdura.push(producte);
                    break;
                case "L":
                    llistaCompra.lactics.push(producte);
                    break;
                case "P":
                    llistaCompra.fornPa.push(producte);
                    break;
                case "A":
                    llistaCompra.altres.push(producte);
                    break;
            }
        }
}

let producte = "", seccio = "";
let departaments = ["FV", "C","L","P","A"]

while(producte != "fi"){
    if(producte != "" || seccio != ""){
        llistaCompra.afegir(producte, seccio);
    }
    do{
        producte = prompt("Producte a comprar: (Paraula clau: fi)");
    }while(producte == [null || "" || " "]);
    if (producte != "fi"){
        do{
            seccio = prompt("Secció del producte: (Carnisseria = C, Fruita i verdura = FV, Làctics = L, Forn de Pa = P)");
            if(seccio != [null || "" || " "]){ seccio=seccio.toUpperCase() }
        }while(!departaments.includes(seccio));
    }else{continue}
}

llistaCompra.ordenar();

console.log("LLSITA DE LA COMPRA:" + "\n" + "   %cCarnisseria:" + "\n" + llistaCompra.carnisseria + "\n" +  "   %cFruita i verdura:" + "\n" + llistaCompra.fruitaVerdura + "\n" + "   %cLàctics:" + 
"\n" +llistaCompra.lactics + "\n" + "   %cForn de Pa:" + "\n" + llistaCompra.fornPa + "\n" + "   %cAltres:" + "\n" + llistaCompra.altres, "color:red", "color:green", "color:orange", "color:brown", "color:blue" );

let array123 = ["color:red", "color:green", "color:orange", "color:brown", "color:blue"]
let seccionsArr = Object.keys(llistaCompra);

console.log(seccionsArr);

console.log("Llista compra: ");
for(let i = 0; i< seccionsArr.length -2; i++){
    console.log("%c  -"+seccionsArr[i], array123[i]);
    for(element of llistaCompra[seccionsArr[i]]){
        console.log("%c     +" +element, array123[i]);
    }
    
}


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





