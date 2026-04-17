export function obtenerHoraActual() {

    // obtengo la fecha actual
    const ahora = new Date();

    // saco horas, minutos y segundos
    // padstart hace que siempre tengan 2 numeros
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    // armo la hora en formato hh:mm:ss
    return `${horas}:${minutos}:${segundos}`;
}