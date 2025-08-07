let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento("p", "Acertaste el numero en " + intentos + (intentos == 1 ? " vez" : " veces"));
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        //EL usuario no acerto
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p", "El numero secreto es mayor");
        } else {
            asignarTextoElemento("p", "El numero secreto es menor");
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "No hay mas numeros disponibles para jugar");
    } else if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
    return;
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del numero secreto");
    asignarTextoElemento("p", "Indica un numero del 1 al " + numeroMaximo);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja de texto
    limpiarCaja();
    //Indicar mensaje de inicio
    //Generar un nuevo numero secreto
    //inicializar los intentos
    condicionesIniciales();
    //Deshabilitar el boton de reinicio
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}
condicionesIniciales();

