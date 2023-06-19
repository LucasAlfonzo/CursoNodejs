const { v4: uuid } = require('uuid');

class Tarea {
    id = '';
    descripcion = '';
    completadoEn = null;

    
    constructor( descripcion='' ){
        this.id = uuid();
        this.descripcion = descripcion;
        this.completadoEn = null;
    }

}


module.exports = Tarea;