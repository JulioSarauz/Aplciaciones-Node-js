//Para la respectiva ejecución y verificación del programa, crearemos el archivo app.js 
//donde ejecutaremos las funciones creadas en el controlador
//empesaremos importando todo lo necesario ara la ejecución del programa
//argv llamara al archivo yargs donde creamos los comandos y parametros que ingresará el usuario
const argv = require('./config/yargs').argv;
//tareas realiza el llamado a tareas-por-hacer, archivo donde se encuentran las funciones necesarias para el programa
const tareas = require('./controlador/tareas-por-hacer');
//colors es el llamado al modulo de colors para permitir la impresion en consola con colores diferentes
const colors = require('colors');
//en la variable comando le daremos el valor del comando entrante por el usuario
let comando = argv._[0];
//realizaremos un switch del comando, con esto permitimos realizar varias tareas dependiendo de lo ingresado por el usuario
switch (comando) {
    //crearemos el caso de crear, para permitir la creacion de nuevas tareas
    case 'crear':
        //en la variable tarea damos el valor que nos devolverá la funcion crear, misma que se encuentra alojada en tareas
        let tarea = tareas.crear(argv.descripcion);
        //imprimimos por pantalla el resultado de nuestra creación
        //la funcion nos devolvera la tarea que creamos con el estado por defecto
        console.log(tarea);
        //rompemos la cadena del caso para permitir crear un nuevo caso
        break;
        //el caso listar se ejecutara en el momento que el usaurio ingrese como 'listar' en la consola
    case 'listar':
        //creamos una variable inter inicializada en 0, esta variable nos permitirá saber si existen o no tareas que mostrar
        var inter = 0;
        //la variable completo tendrá el valor ingresado por el usuario al digitar el parametro -c 
        //el valor dependerá del true o false ingresado posterior al comando -c
        var completo = (argv.completado === 'true');
        //listado es el vector donde obtendra todas las tareas almacenadas en el data.json
        let listado = tareas.getLista();
        //interamos una variable tarea que recorra todo el vector y poder acceder a tarea por tarea
        for (let tarea of listado) {
            //En caso de que la tarea que se encuentren en el estado ingresado por el usuario se presentara por pantalla
            if (tarea.completado === completo) {
                //imprimimos un titulo de color verde
                console.log("======= POR HACER =====".green);
                //se muestra la tarea almacenada 
                console.log("Tarea: ".yellow, tarea.descripcion);
                //mostraremos el estado que tenga la tarea
                console.log("Estado: ".yellow, tarea.completado);
                //aumentamos el valor de la variable inter, de esta manera podemos decir que existen valores por mostrar
                inter++;
            }
        }
        //en caso de que la variable inter se encuentre de valor 0, se le mostrará al usuario un mensaje que le diga
        //que no existen tareas en el estado solicitado
        if (inter === 0) {
            console.log(`No se encontraron tareas con estado ${completo}`.red);
        }
        //rompemos el caso all finalizar estas tareas realizadas
        break;
        //El caso de actualizar modificará el estado de la tarea creada previamente
    case 'actualizar':
        //la variable actualizado tomara el valor de la funcion que solicita como parametros la descripcion de la tarea a cambiar
        //y el estado nuevo que queremos que tenga la tarea
        let actualizado = tareas.actualizar(argv.descripcion, argv.completado);
        //imprimimos el estado de la tarea que se realizó
        console.log(actualizado);
        //rompemos el caso
        break;
        //para el caso borrar permitiremos al usuario eliminar las tareas que desee
    case 'borrar':
        //la variable borrado tomara el valor de la funcion que solicita como parametro la descripcion de la tarea
        let borrado = tareas.borrar(argv.descripcion);
        //imprimirmos el estado que tomo la ejecucion de nuestra tarea
        console.log(borrado);
        //Salimos del caso mediante el break
        break;
        //para el caso de no reconocer el comando ingresado como alguno de los presentes, el usuario será comunicado 
        //con un mensaje por defecto
    default:
        //el mensaje por defecto que se le mostrara en caso de no reconocer el comando ingresado es el siguiente:
        console.log("Comando no reconocido");
}