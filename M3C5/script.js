function registrarJugador() {
    // 1. Declarar e inicializar variables obteniendo datos del usuario
    const nombre = document.getElementById('nombre').value;
    const edad = parseInt(document.getElementById('edad').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const posicion = document.getElementById('posicion').value;
    const mensajeDiv = document.getElementById('mensaje');

    // Limpiar mensajes previos
    mensajeDiv.style.display = "block";
    mensajeDiv.className = "";
    
    let errores = [];

    // 2. Validaciones con sentencias condicionales (if-else)
    // 3. Uso de operadores lógicos y de comparación

    // Validar nombre (que no sea número y tenga longitud)
    if (nombre.trim() === "" || !isNaN(nombre)) {
        errores.push("El nombre no es válido.");
    }

    // Validar edad (mayor a 15 años)
    if (isNaN(edad) || edad <= 15) {
        errores.push("Debes tener más de 15 años.");
    }

    // Validar altura mínima (160 cm)
    if (isNaN(altura) || altura < 160) {
        errores.push("La altura mínima es 160 cm.");
    }

    // Validar posición existente
    if (posicion === "") {
        errores.push("Debes seleccionar una posición.");
    }

    // Determinar si cumple requisitos mínimos
    if (errores.length > 0) {
        mensajeDiv.classList.add('error');
        mensajeDiv.innerHTML = "<strong>Error:</strong><br>" + errores.join("<br>");
    } else {
        // Clasificación del jugador usando operadores lógicos
        let categoria = "";

        // Comparar edad para clasificar (Juvenil: 16-18, Adulto: >18)
        if (edad >= 16 && edad <= 18) {
            categoria = "JUVENIL";
        } else if (edad > 18) {
            categoria = "ADULTO";
        }

        // Mostrar éxito y clasificación
        mensajeDiv.classList.add('exito');
        mensajeDiv.innerHTML = `
            <strong>¡Registro Exitoso!</strong><br>
            Jugador: ${nombre}<br>
            Posición: ${posicion}<br>
            Categoría: ${categoria}<br>
            Altura: ${altura} cm
        `;
    }
}
