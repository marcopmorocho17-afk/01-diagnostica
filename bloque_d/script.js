
function calcularPromedioNotas(a, b) {
  return (a + b) / 2;
}

function procesarCalculo() {
  const input1 = document.querySelector("#nota1");
  const input2 = document.querySelector("#nota2");
  const cajaResultado = document.querySelector("#resultado");

  const val1 = parseFloat(input1.value);
  const val2 = parseFloat(input2.value);

  if (isNaN(val1) || isNaN(val2)) {
    cajaResultado.textContent = "⚠️ Por favor ingresa números válidos";
    cajaResultado.style.color = "#dc2626";
    return;
  }

  const promedio = calcularPromedioNotas(val1, val2);

  cajaResultado.textContent = "Promedio: " + promedio.toFixed(2);
  cajaResultado.style.color = "#059669";
}

const boton = document.querySelector("#btn-calcular");
if (boton) {
  boton.addEventListener("click", procesarCalculo);
}
