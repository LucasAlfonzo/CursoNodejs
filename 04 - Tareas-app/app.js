require('colors');
const { guardarDB, leerDB } = require('./helpers/guardar-archivo');
const { inquirerMenu, pausa, leerInput, listadoTareaBorrar, confirmarBorrar, mensajeConfirmar } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');


const main = async() =>{

    let opcion = '';
    const tareas = new Tareas();

    const tareasDB = leerDB();
    if( tareasDB )
        tareas.cargarTareasFromArr(tareasDB);


    do {
        opcion = await inquirerMenu();
        switch ( opcion ) {
            case '1':        //CREAR TAREA
                console.clear();
                console.log('=========================='.green);
                console.log('       CREAR TAREA');
                console.log('=========================='.green);
                const des = await leerInput('Ingrese la descripción de la tarea: ');
                tareas.crearTarea( des );
                break;
            case '2':        //LISTAR TODAS LAS TAREAS
                console.clear();
                console.log('=========================='.green);
                console.log('LISTA DE TODAS LAS TAREAS');
                console.log('=========================='.green);
                tareas.listarTareas();
                break;
            case '3':       //LISTAR TAREAS COMPLETADAS
                console.clear();
                console.log('==========================='.green);
                console.log('LISTA DE TAREAS COMPLETADAS');
                console.log('==========================='.green);
                tareas.listarTareasCompletadas();
                break;
            case '4':       //LISTAR TAREAS PENDIENTES
                console.clear();
                console.log('==========================='.green);
                console.log('LISTA DE TAREAS PENDIENTES');
                console.log('==========================='.green);
                tareas.listarTareasPendientes();
                break;
            case '5':       //COMPLETAR TAREA
                console.clear();
                console.log('=========================='.green);
                console.log('     COMPLETAR TAREA      ');
                console.log('=========================='.green);
                const id1 = await listadoTareaBorrar( tareas.getListadoArr , true );
                const decision1 = await mensajeConfirmar( '¿Esta seguro de querer marcar como completado la tarea seleccionada?' );
                if( decision1 ){
                    tareas.completarTarea( id1 );
                }
                break;
            case '6':       //ELIMINAR TAREA
                console.clear();
                console.log('=========================='.green);
                console.log('      ELIMINAR TAREA      ');
                console.log('=========================='.green);
                const id2 = await listadoTareaBorrar( tareas.getListadoArr , false );
                const decision2 = await mensajeConfirmar( '¿Esta seguro de querer borrar la tarea seleccionada?' );
                if( decision2 ){
                    tareas.borrarTarea( id2 );
                }
                break;
            default:
                break;
        }
        if( opcion !== '0' )
            await pausa();
        
        guardarDB( tareas.getListadoArr );

    } while ( opcion !== '0' );
    
    
}


//tareas.__listado[tarea.id] = tarea;


main();