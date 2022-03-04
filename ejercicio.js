//DeclaraciÃ³n de variables:

let numberOfSquares = 6;
let colors = generateRandomColors(6);
let cuadrados = document.querySelectorAll(".square");
let pickedColor = pickColor(numberOfSquares);
let colorElegido = document.querySelector("#colorDisplay");
let message = document.querySelector("#message");
let h1 = document.querySelector("h1");
let boton = document.querySelector("#reset");
let facil = document.querySelector("#facil");
let dificil = document.querySelector("#dificil");
let clickedColor;
let container=document.querySelector(".container")

colorElegido.textContent = pickedColor;

//Inicio de programa

init()

function init() {
    squares()
    console.log(pickedColor)
    console.log(colors)
    reset()
}

for (let i = 0; i < cuadrados.length; i++) {
  cuadrados[i].style.backgroundColor = colors[i];
}

//Botones:
//reset
boton.addEventListener("click", function () {
  reset();
})

//modo Dificil
dificil.addEventListener("click", function () {
  this.classList.add("selected");
  facil.classList.remove("selected");
  this;
  numberOfSquares = 6;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor(numberOfSquares);

  for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.backgroundColor = colors[i];
      cuadrados[i].style.display = "block";
      h1.style.backgroundColor = "#80c2b1";
      container.style.height= "420px"
    } else {
      cuadrados[i].style.display = "none";
    }
    message.textContent = "";
    h1.style.backgroundColor = "##80c2b1";
    boton.textContent = "Nuevos Colores";
  }
  console.log(pickedColor)
    console.log(colors)
});

//modo facil
facil.addEventListener("click", function () {
  this.classList.add("selected");
  dificil.classList.remove("selected");
  h1.style.backgroundColor = "##80c2b1";
  numberOfSquares = 3;
  colors = generateRandomColors(numberOfSquares);
  pickedColor = pickColor(numberOfSquares);
  for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.backgroundColor = colors[i];
      h1.style.backgroundColor = "#80c2b1";
      container.style.height= "220px"
    } else {
      cuadrados[3].style.display = "none";
      cuadrados[4].style.display = "none";
      cuadrados[5].style.display = "none";
    }
    message.textContent = "";
    boton.textContent = "Nuevos Colores";
    h1.style.backgroundColor = "##80c2b1";
  }
  console.log(pickedColor)
    console.log(colors)
});

//Funciones
function squares() {
  
  for (let i = 0; i < cuadrados.length; i++) {
    
    cuadrados[i].addEventListener("click", function selectColor() {
      clickedColor = this.style.backgroundColor;
     
      if (clickedColor == pickedColor) {
        message.textContent = "Correcto!";
        h1.style.backgroundColor = clickedColor;
        changeColors(pickedColor);
        boton.textContent = "Play again?";
      } else {
        this.style.backgroundColor = "#80c2b1";
        message.textContent = "Intentalo nuevamente";
      }
    })

  }
  console.log(pickedColor)
  console.log(colors)}



  function reset() {
    colors = generateRandomColors(numberOfSquares)
  message.textContent = "";
  colorElegido.textContent = pickedColor
  pickedColor = pickColor(numberOfSquares);
   for (let i = 0; i < cuadrados.length; i++) {
    if (colors[i]) {
      cuadrados[i].style.background = colors[i];
      cuadrados[i].style.display = "block";
      boton.textContent = "Nuevos Colores";
      h1.style.backgroundColor = "#80c2b1";
    } else {
      cuadrados[i].style.display = "none";
    }
  }
  h1.style.background = "#80c2b1";
  message.textContent = "";
  boton.textContent = "Nuevos colores";
  }

function changeColors(color) {
  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = color;
  }
}
function pickColor(numberOfSquares) {
  let aleatorio = Math.floor(Math.random() * (numberOfSquares - 1));
  return colors[aleatorio];
  console.log
}

function randomColor() {
  let r = Math.round(Math.random() * 255);
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);
  return ("rgb(" + r + ", " + g + ", " + b + ")");
}

function generateRandomColors(cantidadDeCuadrados) {
  let arregloColores = [];
  for (let i = 0; i < cantidadDeCuadrados; i++) {
    arregloColores[i] = randomColor();
  }
  return arregloColores;
}
