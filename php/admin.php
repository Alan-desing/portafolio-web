<?php
session_start();
include "conexion.php";

if (!isset($_SESSION["admin"])) {
    header("Location: login.php");
    exit;
}

$resultado = $conn->query("SELECT * FROM mensajes ORDER BY fecha_envio DESC");
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Panel Admin</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-black text-white p-6">

  <h1 class="text-2xl font-bold mb-6">Mensajes recibidos</h1>

  <div class="space-y-4">

    <?php while($fila = $resultado->fetch_assoc()): ?>

        <div class="bg-gray-800 p-4 rounded">
        <p><strong>Nombre:</strong> <?= $fila["nombre"] ?></p>
        <p><strong>Email:</strong> <?= $fila["email"] ?></p>
        <p><strong>Asunto:</strong> <?= $fila["asunto"] ?></p>
        <p><strong>Mensaje:</strong> <?= $fila["mensaje"] ?></p>
        <p class="text-sm text-gray-400"><?= $fila["fecha_envio"] ?></p>
      </div>

      <?php endwhile; ?>

  </div>

</body>
</html>