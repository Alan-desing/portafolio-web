<?php
session_start();
include "conexion.php";

$usuario = $_POST["usuario"];
$contraseña = $_POST["contraseña"];

$sql = "SELECT * FROM admin WHERE usuario = ? AND contraseña = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $usuario, $contraseña);
$stmt->execute();

$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    $_SESSION["admin"] = $usuario;
    header("Location: admin.php");
} else {
    echo "Datos incorrectos";
}
?>