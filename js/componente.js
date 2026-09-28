class ProgressUI {
    constructor() {
        // Prepara el contenedor principal invisible
        this.crearContenedor();
    }

    crearContenedor() {
        this.contenedor = document.getElementById('progress-ui-container');
        if (!this.contenedor) {
            this.contenedor = document.createElement('div');
            this.contenedor.id = 'progress-ui-container';
            document.body.appendChild(this.contenedor);
        }
    }

    /**
     * Muestra una tarjeta de carga en pantalla.
     * @param {string} tarea - Nombre del proceso.
     * @param {string} icono - Emoji representativo.
     * @param {number} tiempo - Milisegundos que tarda en llenarse la barra.
     * @param {string} color - Color hexadecimal de la barra.
     */
    mostrar(tarea, icono = '⏳', tiempo = 3000, color = '#3498db') {
        // 1. Creación de la estructura HTML dinámica
        const tarjeta = document.createElement('div');
        tarjeta.className = 'progress-tarjeta';
        
        tarjeta.innerHTML = `
            <div class="progress-info">
                <span class="progress-icono">${icono}</span>
                <span class="progress-texto">${tarea}</span>
                <span class="progress-porcentaje">0%</span>
            </div>
            <div class="progress-fondo">
                <div class="progress-barra" style="background-color: ${color};"></div>
            </div>
        `;
        
        this.contenedor.appendChild(tarjeta);

        // 2. Comportamiento dinámico: Animar la barra con JS
        const barra = tarjeta.querySelector('.progress-barra');
        const porcentajeTexto = tarjeta.querySelector('.progress-porcentaje');
        
        // Retraso mínimo para que el navegador aplique la transición CSS
        setTimeout(() => {
            barra.style.transition = `width ${tiempo}ms linear`;
            barra.style.width = '100%';

            // Actualizar los números de 0 a 100%
            let inicio = Date.now();
            let intervalo = setInterval(() => {
                let progreso = Math.min(((Date.now() - inicio) / tiempo) * 100, 100);
                porcentajeTexto.textContent = Math.floor(progreso) + '%';

                if (progreso === 100) {
                    clearInterval(intervalo);
                    tarjeta.querySelector('.progress-icono').textContent = '✅';
                    // 3. Cerrar automáticamente al terminar
                    setTimeout(() => this.cerrar(tarjeta), 1000);
                }
            }, 50); // Se actualiza cada 50ms
        }, 50);
    }

    cerrar(tarjeta) {
        // Activa la animación de salida de CSS
        tarjeta.classList.add('progress-ocultando');
        tarjeta.addEventListener('animationend', () => {
            if (tarjeta.parentNode) tarjeta.parentNode.removeChild(tarjeta);
        });
    }
}

// Instanciamos el componente globalmente
const ComponenteProgreso = new ProgressUI();