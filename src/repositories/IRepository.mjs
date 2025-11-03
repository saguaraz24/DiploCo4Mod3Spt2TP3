class IRepository{

obtenerPorID(id) {
    throw new Error("Método 'obtenerPorId()' no implementado");
}

obtenerTodos() {
    throw new Error("Método 'obtenerTodos()' no implementado");
}
buscarPorAtributo(atributo, valor){
    throw new Error("Método `buscarPorAtributo()` no implementado");
}

obtenerMayoresDe30TP(){
    throw new Error("Método 'obtenerMayoresDe30TP()' no implementado");
    }       

obtenerMenoresDe30TP(){
    throw new Error("Método 'obtenerMenoresDe30TP()' no implementado");
    } 

}
export default IRepository;

