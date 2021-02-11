// 2. recuperar de la SWAPI un llistat de planetes amb el llistat de residents que té cadascú (el nom)

var residentsDIV = document.querySelector(".residents");
residentsDIV.style.listStyle = 'none';
var loading = document.querySelector("#particles-js");

var arrResidents = [];

async function next2(url){
  var res =  await fetch(url)
  res = await res.json()
  
  let nextURL = res.next;
  let resultats = res.results;
  for(planeta of resultats){
    residentsDIV.innerHTML += `<li>${planeta.name}</li>`;
    if(planeta.residents) {
      for (resident of planeta.residents){
        var res2 = await fetch(resident);
        res2 =  await res2.json();
        residentsDIV.innerHTML +=  `<li>---${res2.name}</li>`
      }
    }
  }
  
  if(nextURL) next2(nextURL)
  else{
    loading.style.display = "none";
    content.style.display = 'flex';
  }
};

next2("http://swapi.dev/api/planets");

async function persona(residents){
  
}