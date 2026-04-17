import app from "./src/app.js";

const PORT = 3000;

// aca arrancas el servidor
// listen hace que quede esperando pedidos en ese puerto
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});