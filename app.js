const argv = require('./config/yargs').argv;
const color = require('colors');
const porHacer = require('./por-hacer/por-hacer');


let comando = argv._[0];
switch (comando) {
    case 'crear':
        console.log(porHacer.crearTarea(argv.descripcion));
        break;
    case 'listar':
        let listado = porHacer.getListado();
        for (let item of listado) {
            console.log('=====Por Hacer====='.green);
            console.log(item.descripcion);
            console.log('Estado: ', item.completado);
            console.log('==================='.green);
        }
        console.log('Listar tareas');
        break;
    case 'actualizar':
        console.log(porHacer.actualizar(argv.descripcion, argv.completado));
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}