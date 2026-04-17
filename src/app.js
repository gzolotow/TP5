import express from "express";
import { obtenerHoraActual } from "./time.js";

// creo el servidor
const app = express();


// ruta principal
app.get("/", (req, res) => {
    res.send("bienvenido a mi servidor 🚀");
});


// ruta para ver la hora
app.get("/hora", (req, res) => {
    res.send(obtenerHoraActual());
});


// ruta para fecha completa
app.get("/fecha-completa", (req, res) => {

    // fecha y hora actual
    const ahora = new Date();

    // formato para que la fecha salga en palabras
    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    // convierte la fecha a formato argentino
    const fecha = ahora.toLocaleDateString("es-AR", opciones);

    // saca solo la hora (hh:mm:ss)
    const hora = ahora.toTimeString().split(" ")[0];

    // devuelve fecha + hora
    res.send(`${fecha}, ${hora}`);
});


// si la ruta no existe
app.use((req, res) => {
    // devuelve error 404
    res.status(404).send(`
        <h1>error 404</h1>
        <img src="https://http.cat/404">
    `);
});


// exporto el servidor
export default app;