const inquirer = require('inquirer');
require('colors');

const mensajes =    [ 
                        { value: '1' , name: `${'1.'.green} Crear Tarea` },
                        { value: '2' , name: `${'2.'.green} Listar Tareas`},
                        { value: '3' , name: `${'3.'.green} Listar Tareas completadas`},
                        { value: '4' , name: `${'4.'.green} Listar Tareas pendientes`},
                        { value: '5' , name: `${'5.'.green} Completar Tarea(s)`},
                        { value: '6' , name: `${'6.'.green} Borrar Tarea`},
                        { value: '0' , name: `${'0.'.green} Salir`}
                    ]

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: '¿Que desea hacer?',
        choices: mensajes
    }
] 


const inquirerMenu = async() =>{
    
    console.clear();
    console.log('======================'.green);
    console.log('Seleccione una opción'.white);
    console.log('======================\n'.green);

    const { opcion } = await inquirer.prompt(preguntas);

    return opcion;

}



const pausa = async() =>{
    const question = [
        {
            type: 'input',
            name: 'enter',
            message: `Presione ${ 'enter'.green } para continuar`,
        }
    ];
    await inquirer.prompt( question );
}


const leerInput = async( message ) =>{
    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate( value ){
                if( value.length === 0 ){
                    return 'Por favor ingrese un valor';
                }
                return true;
            }
        }
    ];
    const { desc } = await inquirer.prompt( question );
    return desc;
}

const mensajeConfirmar = async(message) =>{
    const men = [
        { value : true , name : 'SI' },
        { value : false , name : 'NO' }
    ];
    const preg = [
        { type: 'list' , name: 'opcion' , message , choices: men }
    ];
    const { opcion } = await inquirer.prompt( preg );
    return opcion;
}



const listadoTareaBorrar = async( tareas = [] , pendiente = true ) =>{
    // { value: 'tarea.id' , name: tarea.descripcion` },
    const men = [
        // { value:'' , name: '' }
    ]
    tareas.forEach( (tarea) => {
        if( pendiente ){
            if( !tarea.completadoEn ){
                men.push( { value: tarea.id , name: tarea.descripcion } );
            }
        }else{
            men.push( { value: tarea.id , name: tarea.descripcion } );
        }
        
        // men[i].value = tarea.id; men[i].name = tarea.descripcion;
    });
    const preg = [
        {
            // type: 'list',
            name: 'opcion',
            message: 'Seleccione la tarea que desee borrar: ',
            choices: men
        }
    ]
    if( pendiente ){
        preg.forEach( elem =>{
            elem.type = 'checkbox';
        } );
    }else{
        preg.forEach( elem =>{
            elem.type = 'list';
        } );
    }
    const {opcion} = await inquirer.prompt( preg );
    return opcion;
}



module.exports = {
    inquirerMenu,
    pausa,
    leerInput,
    listadoTareaBorrar,
    mensajeConfirmar
}