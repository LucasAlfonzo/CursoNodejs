const { setTimeout } = require('timers/promises');

require('colors');

const mostrarMenu = async() =>{
    return new Promise (resolve => {
        console.clear();
        console.log('======================'.green);
        console.log('Seleccione una opción'.green);
        console.log('======================\n'.green);
        console.log( `${'1'.green}. Crear Tarea` );
        console.log( `${'2'.green}. Listar Tareas` );
        console.log( `${'3'.green}. Listar Tareas completadas` );
        console.log( `${'4'.green}. Listar Tareas pendientes` );
        console.log( `${'5'.green}. Completar Tarea(s)` );
        console.log( `${'6'.green}. Borrar Tarea` );
        console.log( `${'0'.green}. Salir\n` );
    

        const readLine = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        });
    
        readLine.question('Seleccione una opcion: ', (option) => {
            readLine.close();
            resolve(option);
        });
        

    });
    

}

const pausa = () =>{
    return new Promise( resolve => {

        const readLine = require('readline').createInterface({
            input : process.stdin,
            output : process.stdout
        });
    
        readLine.question(`Presione ${ 'Enter'.green } para continuar  `, (option) => {
            readLine.close();
            resolve();
        });
    } );
}
module.exports = {
    mostrarMenu,
    pausa
}
