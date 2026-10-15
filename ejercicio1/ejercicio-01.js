var anio = 2026;
let nombre = "Laura";
const MODULO = "ADSI";

let apellido = "García";
let edad = 19;
let nota = 8.75;
let aprobado = true;
let alumnoSinFoto = null;
let direccion;

let notas = [7, 8.5, 9, 6];

let alumno = {
  nombre: "Laura",
  edad: 19,
  aprobado: true
};

function saludar() {
  return "Hola, " + nombre;
}

function mostrarTipo(valor, etiqueta) {
  console.log(etiqueta + " =>", valor, "| tipo:", typeof valor);
}

function mostrarNotas() {
  for (let i = 0; i < notas.length; i++) {
    console.log("notas[" + i + "] =", notas[i], "| tipo:", typeof notas[i]);
  }
}

function salidaLog() {
  console.log("==== console.log(): variables y tipos ====");

  mostrarTipo(anio, "anio (var)");
  mostrarTipo(nombre, "nombre (let)");
  mostrarTipo(MODULO, "MODULO (const)");
  mostrarTipo(apellido, "apellido");
  mostrarTipo(edad, "edad");
  mostrarTipo(nota, "nota");
  mostrarTipo(aprobado, "aprobado");
  mostrarTipo(alumnoSinFoto, "alumnoSinFoto");
  mostrarTipo(direccion, "direccion");
  mostrarTipo(notas, "notas (array)");
  mostrarTipo(alumno, "alumno (objeto)");
  mostrarTipo(saludar, "saludar (función)");

  mostrarNotas();

  mostrarResultado(
    "console.log -> 12 variables mostradas con typeof.\n" +
    "Tipos vistos: string, number, boolean, object (null, array y objeto) y function."
  );
}

function salidaInfo() {
  console.info("==== console.info(): llamando a la función saludar() ====");

  let mensaje = saludar();

  console.info("saludar() devuelve:", mensaje, "| tipo:", typeof mensaje);

  mostrarResultado("console.info -> saludar() devolvió: " + mensaje);
}

function salidaError() {
  console.error("==== console.error(): ejemplo de dato incorrecto ====");

  let notaTexto = "ocho";
  let notaConvertida = parseInt(notaTexto);

  if (isNaN(notaConvertida)) {
    console.error('ERROR: "' + notaTexto + '" no se puede convertir a número → NaN');
  }

  mostrarResultado("console.error -> 'ocho' convertida con parseInt() da NaN (error controlado).");
}

function salidaDebug() {
  console.debug("==== console.debug(): trazas de depuración ====");

  console.debug("Edad antes de incrementar:", edad);
  console.debug("Tipo de 'alumnoSinFoto':", typeof alumnoSinFoto, "→ ¡ojo, es object!");

  edad = edad + 1;

  console.debug("Edad después de incrementar:", edad);

  mostrarResultado("console.debug -> edad incrementada: 19 -> " + edad + " (mira la consola F12)");
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