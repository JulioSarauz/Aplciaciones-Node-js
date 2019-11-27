let opt = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: "Descripcion de la tarea por hacer"
    },
    completado: {
        default: true,
        alias: 'c',
        desc: "marcar como completado o pendiente la tera"
    }
};


const argv = require('yargs')
    .command('crear', 'Crear un archivo con la tabla de multiplicar', opt)
    .command('completado', 'Listar una tabla', opt)
    .command('borrar', 'Tareas que se borrará').help().argv;


module.exports = {
    argv
}