//Creamos la carpeta config donde ingresaremos nuestro modulo de comandos
//Creamos el archivo yargs.js donde ingresaremos nuestros comandos
//Creamos las variables constantes que se usaran como parametros para nuestras funciones
//descripcion para la entrada que representa el titulo de la tarea
const descripcion = {
    //Realizamos que este parametro sea obligatorio
    demand: true,
    //definimos un alias como d para poder usarlo mediante la sintaxis -d
    alias: 'd',
    //describimos que realiza nuestro parametro
    desc: "Descripción de la tarea por hacer"
};

//Realizamos otra variable para el parametro de completado, el mismo que definirá si realizamos o no la tarea
const completado = {
    //Este comando será true en el campo demand para que obligue al usuario usar este parametro
    demand: true,
    //El alias es con lo cual podremos acceder al uso de este parametro con la sintaxis -c
    alias: 'c',
    //Describimos el parametro para que se muestre en pantalla y el usuario comprenda la utilidad de este parametro
    //Cabe resaltar que que para el estado de esta variable el usuario debe ingresar true o false 
    desc: "listar las tareas realizadas o pendientes(true-false)"
};


//Creamos los comandos que usaremos para las manipulaciones de las tareas
//en la constante argv se realizará el llamado del modulo yargs, mismo que debe estar instalado previamente
//En caso de no tener instalado el modulo es necesario ejecutar el siguiente comando en la consola de node
//npm install yargs
//Una vez instalado este modulo argv nos permitirá el uso de sus complementos
const argv = require('yargs')
    //Definimos el comando crear para permitir al usuario crear una nueva tarea
    .command('crear', 'Crear una tarea', {
        //Como parametro de este comando solicitamos al usuario que ingrese una descripcion acompañada del comando.
        descripcion
    })
    //El comando actualizar permite al usuario modificar el estado de la tarea donde para 
    //true será la tarea realizada y false para las tareas pendientes
    .command('actualizar', 'Actualiza una tarea', {
        //como parametros para este comando se necesitara una descripcion y un estado
        descripcion,
        completado
    })
    //El comando borrar sera el encargado de dar la oportunidad al usuario de eliminar aquellas tareas que las considere necesario
    .command('borrar', 'Elimina una tarea', {
        //Como parametro es lógico solicitar la descripcion, pues de este modo sabremos que tarea eliminar
        descripcion
    })
    //El comando listar permite al usuario mostrar todas las tareas que se encuentren almacenadas en el archivo data.json
    .command('listar', 'Lista una tarea hecha o pendiente', {
        //la tarea listar solicita el parametro completado, donde indicará el usuario si desea listar las tareas realizadas o pendientes    
        completado
    }).help()
    .argv;

//En esta sección del codigo, exportaremos argv para poder exportar los comandos generados
module.exports = {
    argv
}