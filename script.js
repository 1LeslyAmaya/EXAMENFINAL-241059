unction calcular() {
  const cliente = document.getElementById('cliente').value.trim();
  const precio = parseFloat(document.getElementById('precio').value);
  const cantidad = parseInt(document.getElementById('cantidad').value);
  const resultado = document.getElementById('resultado');

if (isNaN(precio) || isNaN(cantidad)) {
    resultado.textContent = "Por favor ingresa precio y cantidad válidos";
    return;
  }