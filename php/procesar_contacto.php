<?php
header("Content-Type: application/json");

include "conexion.php";

// leer JSON
$data = json_decode(file_get_contents("php://input"), true);

$nombre = trim($data["nombre"]);
$email = trim($data["email"]);
$asunto = trim($data["asunto"]);
$mensaje = trim($data["mensaje"]);

// validar
if ($nombre === "" || $email === "" || $asunto === "" || $mensaje === "") {
    echo json_encode([
        "estado" => "error",
        "mensaje" => "Todos los campos son obligatorios"
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        "estado" => "error",
        "mensaje" => "Email inválido"
    ]);
    exit;
}

// insertar
$stmt = $conn->prepare("INSERT INTO mensajes (nombre, email, asunto, mensaje) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $nombre, $email, $asunto, $mensaje);

if ($stmt->execute()) {
    echo json_encode([
        "estado" => "exito",
        "mensaje" => "Mensaje enviado correctamente"
    ]);
} else {
    echo json_encode([
        "estado" => "error",
        "mensaje" => "Error al guardar"
    ]);
}

$stmt->close();
$conn->close();
?>