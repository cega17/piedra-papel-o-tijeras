function jugarPiedraPapelTijera() {
    // Paso 1: Definir las opciones
    const opciones = ["piedra", "papel", "tijera"];

    // Paso 2: Obtener la elección del jugador
    let getHumanChoice = prompt("Elige piedra, papel o tijera:").toLowerCase();

    // Paso 3: Generar la elección de la computadora
    let getComputerChoice = opciones[Math.floor(Math.random() * opciones.length)];
    
    // Paso 4: Comparar las elecciones y determinar el ganador
    let resultado;
    if (getHumanChoice === getComputerChoice) {
        resultado = "Es un empate!";
    } else if (
        (getHumanChoice === "piedra" && getComputerChoice === "tijera") ||
        (getHumanChoice === "papel" && getComputerChoice === "piedra") ||
        (getHumanChoice === "tijera" && getComputerChoice === "papel")
    ) {
        resultado = "¡Ganaste!";
    } else {
        resultado = "¡Perdiste!";
    }

    // Paso 5: Mostrar el resultado
    console.log(`Jugador: ${getHumanChoice}`);
    console.log(`Computadora: ${getComputerChoice}`);
    console.log(resultado);

    // Paso 6: Repetir el juego (opcional)
    let jugarOtraVez = confirm("¿Quieres jugar otra vez?");
    if (jugarOtraVez) {
        jugarPiedraPapelTijera().toLowerCase(); // Llamar a la función para reiniciar el juego
    }
}

// Llamada inicial para iniciar el juego
jugarPiedraPapelTijera();
