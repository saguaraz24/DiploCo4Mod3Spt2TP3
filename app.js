import express from 'express';
import {connectDB} from './src/config/dbConfig.mjs'
import superHeroRoutes from './src/routes/superHeroRoutes.mjs';

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware para parsear Json
app.use(express.json());

//Conexion a Mongo
connectDB();

//Configuración de Rutas
app.use('/src', superHeroRoutes);

//Manejo de errores para rutas no encontradas
app.use((req, res) =>{
    res.status(404).send({mensaje: "Ruta no encontrada"});
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

