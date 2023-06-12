//ejercicio 1
document.getElementById("cambiarBoton").addEventListener("click", function() {
    var cuadrado = document.getElementById("cuadrado");
    cuadrado.style.backgroundColor = "lightblue";

   
    
  });

  //ejercicio 2

  function actualizarContenido() {
    var texto = document.getElementById("inputText").value;
    document.getElementById("cuadrado").innerText = texto;
  }

  function borrarContenido() {
    document.getElementById("cuadrado").innerText = "";
    document.getElementById("inputText").value = "";
  }

  document.getElementById("inputText").addEventListener("input", actualizarContenido);
  

  //ejercicio 3


  function calculateBMI() {
    var weightInput = document.getElementById("weight");
    var heightInput = document.getElementById("height");
    var resultInput = document.getElementById("result");

    var weight = parseFloat(weightInput.value);
    var height = parseFloat(heightInput.value);

    if (weight && height) {
      var bmi = weight / (height * height);
      resultInput.value = bmi.toFixed(2);
    } else {
      resultInput.value = "Error";
    }
  }

  