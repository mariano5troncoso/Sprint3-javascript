
  function getCervezasHastaNivelAlcohol(cervezas, nivelAlcohol) {
    const cervezasFiltradas = cervezas.filter(cerveza => cerveza.abv < nivelAlcohol);
  
    const nuevoArray = cervezasFiltradas.map(cerveza => {
      return {
        nombre: cerveza.name,
        alcohol: cerveza.abv,
        amargor: cerveza.ibu
      };
    });
  
    return nuevoArray;
  }
 //ejercicio 2 
  const resultado = getCervezasHastaNivelAlcohol(beers, 5);
  console.log(resultado);


function getTop10AlcoholicBeers(beers) {
   
    const sortedBeers = beers.sort((a, b) => b.abv - a.abv);
  
   
    const top10Beers = sortedBeers.slice(0, 10);
  

    return top10Beers;
  }
  

  const top10AlcoholicBeers3 = getTop10AmargorBeers(beers);
  console.log(top10AlcoholicBeers3);
//ejercicio 3
  function getTop10AmargorBeers(beers) {
   
    const sortedBeers = beers.sort((a, b) => b.ibu + a.ibu);
  
   
    const top10Beers = sortedBeers.slice(0, 10);
  

    return top10Beers;
  }
  

  const top10AmargorBeers = getTop10AmargorBeers(beers);
  console.log(top10AmargorBeers);

  //ejercicio 4

  function ordenarCervezasPorPropiedad(cervezas, propiedad, ascendente) {
    const comparador = (a, b) => {
      if (a[propiedad] < b[propiedad]) {
        return ascendente ? -1 : 1;
      }
      if (a[propiedad] > b[propiedad]) {
        return ascendente ? 1 : -1;
      }
      return 0;
    };
  
    const cervezasOrdenadas = cervezas.sort(comparador).slice(0, 10);
  
    return cervezasOrdenadas;
  }
  
  // Ejemplo de uso
  const cervezasOrdenadas = ordenarCervezasPorPropiedad(beers, 'abv', true);
  console.log(cervezasOrdenadas);
  