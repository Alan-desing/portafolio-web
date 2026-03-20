//js para las funciones de la calculadora
const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");
const operadores = document.querySelectorAll(".btn-op");

let valorActual = "";
let valorAnterior = "";
let operacion = null;

// números
botones.forEach(boton => {
  boton.addEventListener("click", () => {
    valorActual += boton.textContent;
    pantalla.value = valorActual;
  });
});

// operadores 
operadores.forEach(boton => {
  boton.addEventListener("click", () => {
    const op = boton.textContent;

    if (op === "C") {
      valorActual = "";
      valorAnterior = "";
      operacion = null;
      pantalla.value = "";
      return;
    }

    if (op === "=") {
      calcular();
      return;
    }

    if (valorActual === "") return;

    operacion = op;
    valorAnterior = valorActual;
    valorActual = "";
  });
});

// funcion de calculo
function calcular() {
  let resultado;

  const num1 = parseFloat(valorAnterior);
  const num2 = parseFloat(valorActual);

  if (isNaN(num1) || isNaN(num2)) return;

  switch (operacion) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "x":
      resultado = num1 * num2;
      break;
    case "÷":
      resultado = num1 / num2;
      break;
    default:
      return;
  }

  pantalla.value = resultado;
  valorActual = resultado.toString();
  operacion = null;
}