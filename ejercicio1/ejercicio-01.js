var fechaCreacion = 1999;
let alias = "Goku Black";
const RANGO_MAX = "Leyenda";

let clase = "RenGoku";
let nivel = 42;
let vida = 95.5;
let estaVivo = true;
let clan = null;
let tituloEspecial;

let puntuaciones = [1200, 4500, 3100, 5000];

let personaje = {
  alias: "Goku Black",
  nivel: 9999,
  estaVivo: true
};

function obtenerGokuBlack() {
  return "Personaje: " + alias;
}

function mostrarTipo(valor, etiqueta) {
  console.log(etiqueta + " =>", valor, "| tipo:", typeof valor);
}

function mostrarPuntuaciones() {
  for (let i = 0; i < puntuaciones.length; i++) {
    console.log("puntuaciones[" + i + "] =", puntuaciones[i], "| tipo:", typeof puntuaciones[i]);
  }
}

function salidaLog() {
  console.log("==== console.log(): variables y tipos ====");

  mostrarTipo(fechaCreacion);
  mostrarTipo(alias);
  mostrarTipo(RANGO_MAX);
  mostrarTipo(clase);
  mostrarTipo(nivel);
  mostrarTipo(vida);
  mostrarTipo(estaVivo);
  mostrarTipo(clan);
  mostrarTipo(tituloEspecial, "tituloEspecial");
  mostrarTipo(puntuaciones, "puntuaciones (array)");
  mostrarTipo(personaje, "personaje (objeto)");
  mostrarTipo(obtenerGokuBlack, "obtenerGokuBlack (función)");

  mostrarPuntuaciones();

  mostrarResultado(
    "console.log -> 12 variables mostradas con typeof.\n" +
    "Tipos vistos: string, number, boolean, object (null, array y objeto) y function."
  );
}

function salidaInfo() {
  console.info("==== console.info(): llamando a la función obtenerGokuBlack() ====");

  let mensaje = obtenerGokuBlack();

  console.info("obtenerGokuBlack() devuelve:", mensaje, "| tipo:", typeof mensaje);

  mostrarResultado("console.info -> obtenerGokuBlack() devolvió: " + mensaje);
}

function salidaError() {
  console.error("==== console.error(): ejemplo de dato incorrecto ====");

  let nivelTexto = "cuarenta";
  let nivelConvertido = parseInt(nivelTexto);

  if (isNaN(nivelConvertido)) {
    console.error('ERROR: "' + nivelTexto + '" no se puede convertir a número → NaN');
  }

  mostrarResultado("console.error -> 'cuarenta' convertida con parseInt() da NaN (error controlado).");
}

function salidaDebug() {
  console.debug("==== console.debug(): trazas de depuración ====");

  console.debug("Nivel antes de subir:", nivel);
  console.debug("Tipo de 'clan':", typeof clan, "→ ¡ojo, es object!");

  nivel = nivel + 1;

  console.debug("Nivel después de subir:", nivel);

  mostrarResultado("console.debug -> nivel incrementado: 42 -> " + nivel + " (mira la consola F12)");
}

const btnLog = document.getElementById("btn-log");
const btnInfo = document.getElementById("btn-info");
const btnError = document.getElementById("btn-error");
const btnDebug = document.getElementById("btn-debug");
const btnLimpiar = document.getElementById("btn-limpiar");

btnLog.addEventListener("click", salidaLog);
btnInfo.addEventListener("click", salidaInfo);
btnError.addEventListener("click", salidaError);
btnDebug.addEventListener("click", salidaDebug);
btnLimpiar.addEventListener("click", limpiarConsola);

salidaLog();
salidaInfo();
salidaError();
salidaDebug();