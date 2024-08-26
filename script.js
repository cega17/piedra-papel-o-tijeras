// Declarar las variables de puntuacin de los jugadores
let humanScore = 0; // Puntuación del jugador humano
let computerScore = 0; // Puntuacion de la computadora 

function jugarPiedraPapelTijera() {
    
    // Paso 1: Definir las opciones
    const opciones = ["piedra", "papel", "tijera"];

    // Paso 2: Obtener la elección del jugador
    let getHumanChoice = prompt("Elige piedra, papel o tijera:");

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
        humanScore++; // Incremeta la puntuacio del humano
    } else {
        resultado = "¡Perdiste!";
        computerScore++; // Incrementa la puntuacion de la computadora
    }

    // Paso 5: Mostrar el resultado
    console.log(`Jugador: ${getHumanChoice}`);
    console.log(`Computadora: ${getComputerChoice}`);
    console.log(resultado);
    console.log(`Puntuación: jugador ${humanScore} - Computadora ${computerScore}`);

    // Paso 6: Repetir el juego (opcional)
    let jugarOtraVez = confirm("¿Quieres jugar otra vez?");
    if (jugarOtraVez) {
        jugarPiedraPapelTijera(); // Llamar a la función para reiniciar el juego
    }
}

// Llamada inicial para iniciar el juego
jugarPiedraPapelTijera();

function playRound(humanChoice, computerChoice) {
    // Convertir la elección del humano a minúsculas para no distinguir entre mayúsculas y minúsculas
    humanChoice = humanChoice;

    // Determinar el ganador de la ronda
    if (humanChoice === computerChoice) {
        console.log(`¡Es un empate! Ambos eligieron ${humanChoice}.`);
    } else if (
        (humanChoice === "piedra" && computerChoice === "tijera") ||
        (humanChoice === "papel" && computerChoice === "piedra") ||
        (humanChoice === "tijera" && computerChoice === "papel")
    ) {
        console.log(`¡Ganaste esta ronda! ${humanChoice} le gana a ${computerChoice}.`);
        return 'humano';
    } else {
        console.log(`¡Perdiste esta ronda! ${computerChoice} le gana a ${humanChoice}.`);
        return 'computadora';
    }
}

function getHumanChoice() {
    return prompt("Elige piedra, papel o tijera:");
}

function getComputerChoice() {
    const opciones = ["piedra", "papel", "tijera"];
    return opciones[Math.floor(Math.random() * opciones.length)];
}

function playGame() {
    // Declarar las variables de puntuación
    let humanScore = 0;
    let computerScore = 0;

    // Jugar 5 rondas
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        const winner = playRound(humanSelection, computerSelection);

        // Incrementar la puntuación según el ganador de la ronda
        if (winner === 'humano') {
            humanScore++;
        } else if (winner === 'computadora') {
            computerScore++;
        }

        console.log(`Puntuación después de la ronda ${i + 1}: Humano ${humanScore} - Computadora ${computerScore}`);
    }

    // Declarar el ganador final
    if (humanScore > computerScore) {
        console.log("¡Felicidades! Ganaste el juego.");
    } else if (computerScore > humanScore) {
        console.log("La computadora ganó el juego. ¡Mejor suerte la próxima vez!");
    } else {
        console.log("El juego terminó en empate.");
    }
}

// Llamar a la función para jugar el juego completo
playGame();


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

