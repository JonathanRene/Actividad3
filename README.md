## ¿Qué es un componente visual y qué hace?
Un componente visual es una pieza de interfaz modular y reutilizable que el usuario puede ver e interactuar directamente en la pantalla. A diferencia de una simple función matemática o de validación que trabaja "detrás de cámaras", un componente encapsula tres cosas fundamentales:
1. **Parte visual (HTML/CSS):** Define su propia estructura y apariencia (colores, formas, sombras y animaciones).
2. **Comportamiento (JS):** Controla su propia lógica interna para reaccionar a las acciones del usuario o eventos del sistema (como clics o temporizadores).
3. **Reutilización:** Permite insertar el mismo elemento en múltiples partes del proyecto con contenido distinto, sin necesidad de reescribir bloques gigantes de código HTML cada vez.

## ¿De qué trata este componente en específico?
Este componente visual trata de un diseñado de la interfaz de una tienda en línea. Su función principal es simular visualmente el tiempo de espera en transacciones importantes (como "Validar un pago", "Confirmar un envío" o "Verificar inventario"). Al ser invocado, muestra una ventana emergente con una barra de estado que se llena del 0% al 100% en tiempo real antes de cerrarse automáticamente.

## ¿Qué problema resuelve ProgressUI?
En el comercio electrónico, dejar al usuario sin retroalimentación visual durante una espera genera incertidumbre y puede provocar que abandone la página o presione el botón de "pagar" múltiples veces por error.

**Componente**
* Genera dinámicamente todos los elementos en el DOM (tarjetas, barras de carga, textos) al vuelo, sin obligar al desarrollador a escribir código HTML repetitivo o contenedores previos.
* Muestra el avance matemático sincronizado con un temporizador, manteniendo al usuario informado.
* Es altamente parametrizable (permite cambiar la tarea, el tiempo exacto de espera, el color de la barra y el icono utilizando emojis nativos para mayor optimización).
* Cuenta con auto-destrucción inteligente para liberar memoria una vez terminada la animación.

## Instalación
Para integrar el componente en cualquier proyecto web, incluye la hoja de estilos en la sección `<head>` y el script de la librería justo antes de cerrar la etiqueta `</body>`:

```html
<title>Mi Tienda en Línea</title>
<Estilos del componente visual>
<link rel="stylesheet" href="css/componente.css">

<!-- Tu contenido HTML aquí -->

<Lógica del componente>
<script src="js/componente.js"></script>
