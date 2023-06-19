const Tarea = require("./tarea");
require('colors');

class Tareas{

    constructor(){
        this.__listado = {};
    }

    crearTarea( desc = '' ){
        const tarea = new Tarea(desc);
        this.__listado [tarea.id] = tarea;
    }

    get getListadoArr(){
        const listado = [];
        Object.keys( this.__listado ).forEach( key => listado.push( this.__listado[key] ) );
        return listado;
    }

    cargarTareasFromArr( tareas = [] ){
        // for (let i = 0; i < tareas.length; i++) {
        //     this.__listado[ tareas[i].id ] = tareas[i];
        // }

        tareas.forEach( tarea =>{
            this.__listado[tarea.id] = tarea;
        } );

    }

    listarTareas(){
        //TODO: COMO HICE
        // const listado = [];
        // Object.keys( this.__listado ).forEach( key => listado.push( this.__listado[key] ) );
        // console.log('_________________________________________________________\n');
        // listado.forEach( tarea =>{
        //     console.log(`Tarea: ${tarea.descripcion}\nId de la tarea: ${tarea.id}`);
        //     if( !tarea.completadoEn ){
        //         console.log(`No completado`);
        //     }else{
        //         console.log(`Completado en: ${tarea.completadoEn}`);
        //     }
        //     console.log('_________________________________________________________\n');
        // } );
        //TODO: COMO SE HIZO EN EL CURSO
        this.getListadoArr.forEach( (tarea,i) =>{
            if( !tarea.completadoEn ){
                console.log(`${ i+1 }.`.green + `${tarea.descripcion} :: ${'Pendiente'.red}`);
            } else {
                console.log(`${ i+1 }.`.green + `${tarea.descripcion} :: ${'Pendiente'.green}`);
            }
        });
    }

    listarTareasCompletadas(){
        this.getListadoArr.forEach( (tarea,i) =>{
            if( tarea.completadoEn ){
                console.log( `${i+1}`.green + `${tarea.descripcion}` );
            }
        })
    }

    listarTareasPendientes(){
        this.getListadoArr.forEach( (tarea,i) =>{
            if( !tarea.completadoEn ){
                console.log( `${i+1}: `.green + `${tarea.descripcion}` );
            }
        })
    }


    marcarCompletado( tarea ){
        this.__listado[ tarea.id ].completadoEn = 'Completado'; 
    }

    borrarTarea( id = '' ){
        if( this.__listado[id] ){
            console.log(`Se ha eliminado correctamente la tarea: ${this.__listado[id].descripcion}`);
            delete this.__listado[id];
        }
    }

    completarTarea( id = '' ){
        if( this.__listado[id] ){
            this.__listado[id].completadoEn = true;
            console.log(`Se ha completado correctamente la tarea: ${this.__listado[id].descripcion}`);
        }
    }

}


module.exports = Tareas;