//js para que con el boton de hamburguesa aparezca el navbar en movil
const boton = document.getElementById("btn-menu");
const menu = document.getElementById("menu");

boton.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});