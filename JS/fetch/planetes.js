// 1. recuperar de la SWAPI un llistat de planetes i escriure'ls ordenats per diàmetre


var planet = document.querySelector(".planets");

    fetch("http://swapi.dev/api/planets")
    .then(res => res.json())
    .then(res =>{
        let resultats = res.results;

        let planetes = resultats.map((planeta) => obj = {name: planeta.name, diameter: planeta.diameter})
                        .sort((a, b) => a.diameter - b.diameter);

        for(planeta of planetes){
          planet.innerHTML += `<li>${planeta.name} té un diametre de ${planeta.diameter}km</li>`
        }
    })

