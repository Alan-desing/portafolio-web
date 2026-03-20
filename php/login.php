<?php
session_start();
?>

<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Login Admin</title>
  <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-black text-white flex items-center justify-center min-h-screen">

  <form action="validar_login.php" method="POST" class="bg-gray-800 p-6 rounded w-80 space-y-4">

    <h2 class="text-xl font-bold text-center">Login Admin</h2>

    <input type="text" name="usuario" placeholder="Usuario"
      class="w-full p-2 rounded bg-gray-700">

    <input type="password" name="contraseña" placeholder="Contraseña"
      class="w-full p-2 rounded bg-gray-700">

      <button class="w-full bg-blue-600 p-2 rounded hover:bg-blue-500">
      Ingresar
    </button>

    </form>

</body>
</html>