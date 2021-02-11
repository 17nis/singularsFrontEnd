// 1. recuperar de la SWAPI un llistat de planetes i escriure'ls ordenats per diàmetre
// tornar tots els planetes

var planet2 = document.querySelector(".planets2");
var arrPlanetes = [];

  function next(url){
    fetch(url)
    .then(res => res.json())
    .then(res =>{
      let nextURL = res.next;
      let resultats = res.results;

      for(planeta of resultats){
        arrPlanetes.push(planeta.name);
      }
      
      if (nextURL) next(nextURL);
      else{
        arrPlanetes.sort();
        for(planeta of arrPlanetes){
          planet2.innerHTML += `<li>${planeta}</li>`
        }
      }
    })
  };

  next("http://swapi.dev/api/planets");

