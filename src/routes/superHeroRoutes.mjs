import express, { request } from 'express';
import {
    obtenerSuperheroePorIdController,
    obtenerTodosLosSuperheroesController,
    buscarSuperheroesPorAtributoController,
    obtenerSuperheroesMayoresDe30TPController,
    obtenerSuperheroesMenoresDe30TPController
} from '../controllers/superheroesController.mjs';
//import { obtenerSuperheroesMayoresDe30 } from '../services/superheroeService.mjs';

const router = express.Router();
router .get('/heroes', obtenerTodosLosSuperheroesController);
router .get('/heroesid/:id', obtenerSuperheroePorIdController);
router .get('/heroesat/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router .get('/heroes/mayores30TP', obtenerSuperheroesMayoresDe30TPController);
router .get('/heroes/menores30TP', obtenerSuperheroesMenoresDe30TPController);

//router.get("/superheroes/menores", superHeroController.obtenerSuperheroesMenoresDe30Controller);


export default router;

