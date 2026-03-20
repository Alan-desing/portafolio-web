const imagenes = document.querySelectorAll(".galeria-img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");

//abrir imagen al tocarla
imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modalImg.src = img.src;
  });
});

//cerrar imagen al tocar fuera
modal.addEventListener("click", () => {
  modal.classList.add("hidden");
});