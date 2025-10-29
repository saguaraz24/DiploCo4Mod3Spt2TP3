const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://Grupo-14:grupo14@cursadanodejs.ls9ii.mongodb.net/Node-js')
.then(()=> console.log('Conexión exitosa a MongoDB'))
.catch(error=>console.error('Error al conectar a MongoDB: ',error) );

const superheroSchema=new mongoose.Schema({
    nombreSuperHeroe: {type:String, required:true},
    nombreReal:{type: String, required:true},
    edad:{type:Number, min:0},
    planetaOrigen: {type: String, default:"Desconocido"},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos:[String],
    createdAt: {type:Date,default:Date.now},
    creador: String
}, {collection: 'Grupo-14'});

const SuperHero=mongoose.model('SuperHero', superheroSchema);

async function insertSuperHero(){
    const hero = new SuperHero({
        nombreSuperHeroe:`Wolverine`,
        nombreReal: `James Logan`,
        edad: 25,
        planetaOrigen: `Tierra`,
        debilidad: `Agua`,
        poderes:['Huesos Indestructibles', 'Garras Retractiles', 'Factor de Curación','Maestria en combate'],
        aliados:['X-men', 'Yukio','Spiderman'],
        enemigos:['Magneto', 'Dientes de Sable', 'Samurái de Plata','Thanos'],
        creador: "Martín",
    });
    await hero.save();
    console.log('Superheroe insertado',hero);
}
insertSuperHero();

async function updateSuperHero(nombreSuperHeroe){
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe:nombreSuperHeroe},
        {$set:{edad:26}}
    );
    console.log('Resultado de la Actualización: ', result);
}
//updateSuperHero('Wolverine');

async function deleteSuperHero(nombreSuperHeroe){
    const result = await SuperHero.deleteOne({nombreSuperHeroe,nombreSuperHeroe});
    console.log('SuperHeroe Eliminado: ',result);
}
//deleteSuperHero('Wolverine');

async function findSuperHeroes(){
    const heroes = await SuperHero.find({planetaOrigen:'Tierra' });
    console.log('Superhéroes de la Tierra: ',heroes);
}
//findSuperHeroes();





