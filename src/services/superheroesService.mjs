import superHeroRepository from "../repositories/SuperHeroRepository.mjs"; 

export async function obtenerSuperheroePorId(id){
    return await superHeroRepository.obtenerPorId(id);
}

export async function obtenerTodosLosSuperheroes() {
    return await superHeroRepository.obtenerTodos();
}

export async function buscarSuperheroesPorAtributo(atributo,valor) {
    return await superHeroRepository.buscarPorAtributo(atributo,valor);
    //return superHeroRepository.buscarPorAtributo({[atributo]: valor});
}

export async function obtenerSuperheroesMayoresDe30(atributo,valor) {
    return await superHeroRepository.obtenerMayoresDe30();
}

export async function obtenerSuperheroesMenoresDe30(tributo,valor) {
  return await superHeroRepository.obtenerMenoresDe30();
}

