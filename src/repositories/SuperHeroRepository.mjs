import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";
class SuperHeroRepository extends IRepository{
    async obtenerPorId(id){
        return await SuperHero.findById(id);
    }

    async obtenerTodos(){
        return await SuperHero.find({});
    }

    async buscarPorAtributo(atributo, valor){
        return await SuperHero.find({[atributo]: valor});
    }

    async obtenerMayoresDe30TP(){
        //return await SuperHero.find({edad:{$gt:30}, planetaOrigen:"Tierra"});

        return await SuperHero.aggregate([
    {
      $match: {
        edad: { $gt: 30 },
        planetaOrigen: "Tierra"
      }
    },
    {
      $addFields: {
        cantidadPoderes: { $size: { $ifNull: ["$poder", []] } }
      }
    },
    {
      $match: {
        cantidadPoderes: { $gte: 2 }
      }
    }

    ]);
    }

     async obtenerMenoresDe30TP(){
        return await SuperHero.find({edad:{$lt:30}});
    }

}
export default new SuperHeroRepository();
