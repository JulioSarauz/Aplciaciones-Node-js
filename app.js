const argv = require('./config/yargs').argv;
const tareas = require('./controlador/tareas-por-hacer');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = tareas.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        var inter = 0;
        var completo = (argv.completado === 'true');
        let listado = tareas.getLista();
        for (let tarea of listado) {
            if (tarea.completado === completo) {
                console.log("======= POR HACER =====".green);
                console.log("Tarea: ".yellow, tarea.descripcion);
                console.log("Estado: ".yellow, tarea.completado);
                inter++;
            }
        }
        if (inter === 0) {
            console.log(`No se encontraron tareas con estado ${completo}`.red);
        }
        break;
    case 'actualizar':
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = tareas.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log("Comando no reconocido");
}