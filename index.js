const express = require("express");
// const cors = require("cors"); // Import cors module
const app = express();
const db = require("./db/db");
const { sequelize } = require("./models/index");

const router = require("./router");

const PORT = process.env.PORT || 3617;

//CONFIGURACIÓN OPCIONES CORS
//lo último añadido es control-acces-allow
// var corsOptions = {
//   origin: "*",
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   preflightContinue: false,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions)); //Add CORS Middleware
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {res.send('Pantalla de inicio');});

//Conectamos con la base de datos

app.listen(PORT, () => {
  console.log(`Servidor conectado y levantado en el puerto ${PORT}`);
  // sequelize.sync({ force: true })
  
  db.authenticate()
    .then(() => {
      console.log("Conectados a la DB");
    })
    .catch((error) => {
      console.log("Se ha producido un error: " + error);
    });
});
