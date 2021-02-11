
let myFunction = (message) =>{
  console.log(message);
}

let test = ((variable, callback) =>{
  if(variable){
    callback("Hola mundo");
  }
})(true, myFunction);