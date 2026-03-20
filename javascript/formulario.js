const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const mensaje = document.getElementById("mensaje");

// errores
const errorNombre = document.getElementById("error-nombre");
const errorEmail = document.getElementById("error-email");
const errorAsunto = document.getElementById("error-asunto");
const errorMensaje = document.getElementById("error-mensaje");

// validar nombre
nombre.addEventListener("input", () => {
  if (nombre.value.trim() === "") {
    errorNombre.classList.remove("hidden");
  } else {
    errorNombre.classList.add("hidden");
  }
});

// validar email
email.addEventListener("input", () => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email.value)) {
    errorEmail.classList.remove("hidden");
  } else {
    errorEmail.classList.add("hidden");
  }
});

// validar asunto
asunto.addEventListener("input", () => {
  if (asunto.value.trim() === "") {
    errorAsunto.classList.remove("hidden");
  } else {
    errorAsunto.classList.add("hidden");
  }
});

// validar mensaje
mensaje.addEventListener("input", () => {
  if (mensaje.value.trim() === "") {
    errorMensaje.classList.remove("hidden");
  } else {
    errorMensaje.classList.add("hidden");
  }
});

//formulario con fetch
const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  const datos = {
    nombre: nombre.value,
    email: email.value,
    asunto: asunto.value,
    mensaje: mensaje.value
  };

   fetch("php/procesar_contacto.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(datos)
  })
  .then(res => res.json())
  .then(data => {
    respuesta.textContent = data.mensaje;

    if (data.estado === "exito") {
      formulario.reset();
    }
  })
  .catch(error => {
    respuesta.textContent = "Error al enviar";
  });
});