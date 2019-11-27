const argv = require('./config/yargs').argv
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors')

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        tareas.listar();
        break;
    case 'actualizar':
        let actualizar = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizar);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no conocido");
        break;
}