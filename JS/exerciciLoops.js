    // definiu aquí la funció

function potencia(a,b){
    let resultat = a;
    // for(let i = 2 ; i <= b; i++){
    //     resultat = resultat * a;
    // }
    let i = 0
    while(i<b){
        resultat *= a;
        i++; 
    }
    return resultat;
}
// calcular potències (sense usar ** ni Math.pow())

var a = 3;
var b = 5;

console.log(`${a} elevat a ${b} és ${potencia(a,b)}`);

// definiu aquí la funció

function factorial(c){
    let resultat = 1;
    // for(let i = c -1 ; i > 0 ; i--){
    //     resultat = resultat * i;
    //     console.log(resultat)
    // }
    let i = c;
    while(i>1){
        resultat *=  i;
        i--;
    }
    return resultat;
}
// calcular factorial (N!)

var c = 7;

console.log(`${c} factorial (${c}!) és ${factorial(c)}`)

// definiu aquí la funció

   //*Better comments amb highlight

    //!Better comments amb red

    //TODO -orange

    

