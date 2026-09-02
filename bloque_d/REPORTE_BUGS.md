# 🐛 Reporte de Bugs Encontrados y Corregidos (Bloque D)
**Estudiante:** Daniel Peña  
**Paralelo:** E2 | **Fecha:** 01/09/2026  

---

## 1. 🔍 Bug de HTML Encontrado (D1)
- **¿Qué fallaba?:** Vinculación incorrecta de la hoja de estilos. El archivo referenciaba `estilos-rotos.css` en lugar de `estilos.css`, por lo que los estilos no se aplicaban.
- **Causa Raíz:** Error tipográfico en el nombre del archivo CSS en la etiqueta `<link>`.
- **Solución Aplicada:** Cambié `href="estilos-rotos.css"` por `href="estilos.css"` en la línea del `<link>`.

---

## 2. 🔍 Bug de HTML Encontrado (D2)
- **¿Qué fallaba?:** La etiqueta `<header>` no estaba cerrada correctamente, lo que causaba problemas de estructura HTML.
- **Causa Raíz:** Falta la etiqueta de cierre `</header>`.
- **Solución Aplicada:** Agregué `</header>` al final de la sección header.

---

## 3. 🔍 Bug de HTML Encontrado (D3)
- **¿Qué fallaba?:** El input para "Examen Quimestral" no tenía un `id` asignado. Tenía `name="nota_quimestral"` pero JavaScript buscaba `#nota2`.
- **Causa Raíz:** El atributo `id` es necesario para que JavaScript lo seleccione con `querySelector()`.
- **Solución Aplicada:** Cambié `<input type="number" name="nota_quimestral" ...>` por `<input type="number" id="nota2" ...>`.

---

## 4. 🔍 Bug de HTML Encontrado (D4)
- **¿Qué fallaba?:** El botón "Calcular Promedio" no tenía `id` ni `class`, impidiendo que JavaScript lo seleccionara correctamente.
- **Causa Raíz:** Falta de atributos de identificación en el elemento `<button>`.
- **Solución Aplicada:** Cambié `<button>Calcular Promedio</button>` por `<button id="btn-calcular" class="btn-calcular">Calcular Promedio</button>`.

---

## 5. 🔍 Bug de CSS Encontrado (D5)
- **¿Qué fallaba?:** Propiedad CSS inválida `display: flexer;` (debería ser `display: flex;`).
- **Causa Raíz:** Error tipográfico en el nombre de la propiedad Flexbox.
- **Solución Aplicada:** Cambié `display: flexer;` por `display: flex;`.

---

## 6. 🔍 Bug de CSS Encontrado (D6)
- **¿Qué fallaba?:** Propiedad CSS inválida `align-item: center;` (debería ser `align-items: center;` en plural).
- **Causa Raíz:** Error tipográfico. La propiedad correcta es `align-items`, no `align-item`.
- **Solución Aplicada:** Cambié `align-item: center;` por `align-items: center;` y agregué `justify-content: center;` para centrar correctamente.

---

## 7. 🔍 Bug de CSS Encontrado (D7)
- **¿Qué fallaba?:** Propiedad `cursor: pointing-hand;` es inválida en CSS moderno.
- **Causa Raíz:** `pointing-hand` no es un valor válido en CSS. El valor correcto es `pointer`.
- **Solución Aplicada:** Cambié `cursor: pointing-hand;` por `cursor: pointer;`.

---

## 8. 🔍 Bug de JavaScript Encontrado (D8)
- **¿Qué fallaba?:** Función `calcularPromedioNotas()` calculaba incorrectamente: `return a + b / 2;` (por precedencia de operadores, primero divide b/2 y luego suma a).
- **Causa Raíz:** Falta de paréntesis para forzar el orden de operaciones correcto.
- **Solución Aplicada:** Cambié `return a + b / 2;` por `return (a + b) / 2;`.

---

## 9. 🔍 Bug de JavaScript Encontrado (D9)
- **¿Qué fallaba?:** Selector incorrecto: `document.querySelector("#nota_inexistente")` buscaba un elemento que no existe.
- **Causa Raíz:** El elemento input tiene `id="nota2"`, no `id="nota_inexistente"`.
- **Solución Aplicada:** Cambié `querySelector("#nota_inexistente")` por `querySelector("#nota2")`.

---

## 10. 🔍 Bug de JavaScript Encontrado (D10)
- **¿Qué fallaba?:** Los valores de los inputs no se convertían a números, causando concatenación de strings en lugar de suma aritmética.
- **Causa Raíz:** `input.value` retorna un string. Se necesita `parseFloat()` para convertirlo a número.
- **Solución Aplicada:** Cambié `const val1 = input1.value;` por `const val1 = parseFloat(input1.value);` y lo mismo para val2.

---

## 11. 🔍 Bug de JavaScript Encontrado (D11)
- **¿Qué fallaba?:** Typo en la propiedad: `cajaResultado.textContnt` (debería ser `textContent`).
- **Causa Raíz:** Error tipográfico: falta la `e` en `textContent`.
- **Solución Aplicada:** Cambié `textContnt` por `textContent`.

---

## 12. 🔍 Bug de JavaScript Encontrado (D12)
- **¿Qué fallaba?:** Selector incorrecto para el botón: `querySelector(".btn-calcular")` buscaba una clase, pero el selector debe ser por ID.
- **Causa Raíz:** El botón tiene `id="btn-calcular"`, no `class="btn-calcular"` solo.
- **Solución Aplicada:** Cambié `querySelector(".btn-calcular")` por `querySelector("#btn-calcular")`.

---

## 13. ✅ MEJORAS ADICIONALES IMPLEMENTADAS
- ✅ Agregué validación de entrada para verificar que ambos números sean válidos.
- ✅ Agregué formato decimal (.toFixed(2)) al resultado.
- ✅ Agregué colores dinámicos (rojo para error, verde para éxito).
- ✅ Agregué efecto hover al botón con transición suave.

---

## 14. ✅ Verificación en Consola del Navegador (D14)
- [x] Presioné F12 en el navegador.
- [x] Fui a la pestaña **Console**.
- [x] Verifiqué que **NO aparezca ningún error en rojo**.
- ✅ **RESULTADO:** El programa funciona correctamente sin errores.
