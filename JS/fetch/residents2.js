// 2. recuperar de la SWAPI un llistat de planetes amb el llistat de residents que té cadascú (el nom)

var residentsDIV2 = document.querySelector(".residents2");
residentsDIV2.style.listStyle = 'none';
var content = document.querySelector(".content");

var arrResidents2 = [];

async function next3(url){
  var res = await fetch(url);
  res = await res.json();
  
  let nextURL = res.next;
  let resultats = res.results;
  
  for(planeta of resultats){
    arrResidents2.push({name: planeta.name, residents: planeta.residents});
  }
  
  if(nextURL) next3(nextURL)
  else{
    arrResidents2.sort((a,b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0))
    for(planeta of arrResidents2){
      residentsDIV2.innerHTML += `<li>${planeta.name}</li>`;
      if(planeta.residents){
        for(resident of planeta.residents){
          var res2 = await fetch(resident);
          res2= await res2.json();
          residentsDIV2.innerHTML +=  `<li>---${res2.name}</li>`
        }
        
      } 
    }
    
  }
};

next3("http://swapi.dev/api/planets");

