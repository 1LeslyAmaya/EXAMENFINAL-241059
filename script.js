<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Calculadora de Total a Pagar</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <h1>Calculadora de Total a Pagar</h1>

  <div class="container">
    <label>Nombre del cliente:</label>
    <input type="text" id="cliente" />

    <label>Precio unitario:</label>
    <input type="number" id="precio" />

    <label>Cantidad:</label>
    <input type="number" id="cantidad" />

    <button onclick="calcular()">Calcular total</button>

    <div id="resultado"></div>
  </div>

  <script src="script.js"></script>
</body>
</html>

