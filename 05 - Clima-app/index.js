const { leerInput, inquirerMenu, pausa } = require("./helpers/inquirer");
const Busqueda = require("./models/busquedas");



const main = async() =>{
    
    let option;
    const busqueda = new Busqueda();
    do {
        option = await inquirerMenu();
        switch ( option ) {
            case 1:
                //MOSTRAR MENSAJE
                const lugar = await leerInput('Ingrese el nombre de la ciudad que desee buscar: ');
                await busqueda.ciudad( lugar );
                //BUSCAR LUGARES

                //SELECCIONAR EL LUGAR

                //CLIMA

                //MOSTRAR RESULTADOS

                console.log('\nInformacion de la ciudad\n'.green);
                console.log('Ciudad: ');
                console.log('Latitud: ');
                console.log('Longitud: ');
                console.log('Temperatura: ');
                console.log('Mínima: ');
                console.log('Máxima: ');
                
                break;
            case 2:
                
                break;
            case 3:
                
                break;
            default:
                break;
        }
        if( option !== 3 )
            await pausa();


    } while ( option !== 3 );

}

main();