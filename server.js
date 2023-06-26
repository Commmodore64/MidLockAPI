const express = require("express");
const app = express();
const firebase = require("firebase");
const firebaseConfig = require("./firebaseConfig");

firebase.initializeApp(firebaseConfig);

// Ruta para obtener los datos de Firebase Realtime Database
app.get("/api/data/:userId/medicamentos", async (req, res) => {
  try {
    const { userId } = req.params;
    const database = firebase.database();
    const snapshot = await database.ref(userId).once("value");
    const data = snapshot.val();
    res.json(data);
  } catch (error) {
    console.log("Error al obtener los datos:", error);
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});
// Ruta para obtener todos los datos de Firebase Realtime Database
app.get("/api/data", async (req, res) => {
  try {
    const database = firebase.database();
    const snapshot = await database.ref().once("value");
    const data = snapshot.val();
    res.json(data);
  } catch (error) {
    console.log("Error al obtener los datos:", error);
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});
// Esta es la ruta de ejemplo de como mandar datos por POST para futuras implementaciones en el ESP32
// app.post("/api/data", async (req, res) => {
//     try {
//       const { id, cant, des, med } = req.body; // Obtener los datos del cuerpo de la solicitud

//       const database = firebase.database();
//       await database.ref(`/${id}`).set({ cant, des, med });

//       res.json({ success: true });
//     } catch (error) {
//       console.log("Error al crear el registro:", error);
//       res.status(500).json({ error: "Error al crear el registro" });
//     }
//   });

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
