import express from "express";
import { obtenerHoraActual } from "./time.js";

const app = express();



app.get("/", (req, res) => {
    res.send("Bienvenido a mi servidor 🚀");
});


app.get("/hora", (req, res) => {
    res.send(obtenerHoraActual());
});



app.get("/fecha-completa", (req, res) => {
    const ahora = new Date();

    const opciones = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric"
    };

    const fecha = ahora.toLocaleDateString("es-AR", opciones);
    const hora = ahora.toTimeString().split(" ")[0];

    res.send(`${fecha}, ${hora}`);
});


app.use((req, res) => {
    res.status(404).send(`
        <h1>Error 404</h1>
        <img src="https://http.cat/404">
    `);
});


module.exports = app;