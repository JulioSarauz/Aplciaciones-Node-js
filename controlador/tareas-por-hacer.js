//Creamos la carpeta controlador, esta bosandonos en el modelo "VIEW, MODEL, CONTROLLER", y separar los modulos y funciones
//dentro de la carpeta se creará un archivo tareas-por-hacer.js en odnde se incorporarán las funciones para utilizar en el programa
//importamos el modulo fs mismo que en caso de no encontrarse se instala con el siguiente comando
//npm install fs
//debemos ejecutar en la consola de Node js
const fs = require('fs');
//la variable tareasPorHacer tomara el valor de un vector vacio donde se guardarán las tareas en RAM
let tareasPorHacer = [];

//Creamos la funcion constante cargarDB en la cual se realizará el llamado de las tareas almacenadas en nuestro archivo json
const cargarDB = () => {
    //intentamos hacer el llamado de las tareas
    try {
        //el vector vacio tomará las tareas que se encuentre almacenados en la carpeta db archivo data.json
        tareasPorHacer = require('../db/data.json');
        // atrapamos el error en caso de surgir algun problema con la lectura del archivo
        //o en caso de que el archivo se encuentre vacio
    } catch (error) {
        //Si surgió algun error el vector se quedará como vacio
        tareasPorHacer = [];
    }
}

//la funcion guardarDB almacenara las tareas ingresadas por el usuario
const guardarDB = () => {
    //en la variable data transformara en modelo json el vector tareas por hacer
    let data = JSON.stringify(tareasPorHacer);
    //utilizando el modulo fs generamos el archivo data.json dentro de la carpeta db
    fs.writeFile('db/data.json', data, (err) => {
        //en caso de que exista un error se le informará a usuario que no se pudo guardar la tarea
        if (err) throw new Error('No se pudo guardar', err);
    });
}

//creamos la funcion crear solicitando como parametro una descripcion
const crear = (descripcion) => {
    //antes de crear la tarea debemos hacer una carga de la base de datos
    //es decir, leer el archivo data.json
    cargarDB();
    //generamos una variable tarea la cual tendra los datos de la nueva tarea
    let tarea = {
        //la descripcion es el nombre de la tarea que el usuario desea almacenar
        //Nota: en la actual version se reconoce y no produce error pues es lo mismo que ingresar
        //descripcion = desripcion
        descripcion,
        //por defecto al crear una nueva tarea esta se encontrará en estad de no realizada, es decir falso
        completado: false
    };
    //en el vector se incorpora la nueva tarea aumentando a las tareas previamente ingresadas 
    tareasPorHacer.push(tarea);
    //los datos nuevos en el vector se almacenara en el archivo con la función guardarDB
    guardarDB();
    //retornamos la tarea que se ingreso por el usuario en caso de no existir algun problema
    return tarea;
}

//creamos la funcion que retorne la lista de tareas en forma de vector
const getLista = () => {
    //con la funcion cargarDB llamamos a las tareas alamacenadas en nuestro json
    cargarDB();
    //devolvemos el vector con todas las tareas que se encuentren almacenadas 
    return tareasPorHacer;
}

//creamos la funcion actualizar, la cual pedirá como entrada la descripcion y el nuevo estado de la misma
const actualizar = (descripcion, completado = true) => {
    //cargamos las tareas y rellenamos el vector tareasPorHacer
    cargarDB();
    //en la variable index se utilizara la funcion propia de node js find index, la cual mediante la creacion de una funcion flecha
    //se devolvera la posicion en el vector de la tarea para atualizar
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    //si en index es mayor igual a cero quere decir que existe una tarea con la descripcion ingresada por el usuario
    if (index >= 0) {
        //en la misma posicion de la tarea se cambiara el estado del completado con el valor entrante, por defecto true
        tareasPorHacer[index].completado = completado;
        //guardamos nuevamente el vector modificado en el archivo data.json
        guardarDB();
        //retornamos un true que indique que la operacion tuvo exito
        return true;
    }
    //retornamos false en caso de que no exista la tarea ingresada
    return false;

}


//creamos la funcion borrar, la cual es una funcion flecha que solicita la descripcion para poder porceder
const borrar = (descripcion) => {
    //cargamos la base de datos para que nuestro vector tome los valores de todas las tareas almacenadas
    cargarDB();
    //creamos la variable nuevo listado en la cual se realizara un filtrado
    //el filter tambien es una funcion porpia de node js propias de los arreglos de node js
    //como parametros para finter enviamos una funcion flecha que tome todas las tareas excepto con la que coincide con la ingresada
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    //si la longitud de las tareas es igual al nuevo vector quiere decir que no existio cambios
    if (tareasPorHacer.length === nuevoListado.length) {
        //retornamos false pues no se encontro la descripcion ingresada
        return false;
        //en caso de que los vectores tengan diferente longitud quiere decir que si existió cambios en la operación
    } else {
        //el vector de tareas por hacer que contiene todas las tareas almacenadas en data.json
        //se reemplazará con el valor del nuevo vector que ya no contiene la tarea ingresada
        tareasPorHacer = nuevoListado;
        //almacenamos en el archivo el nuevo vector sin la tarea ingresada
        guardarDB();
        //retornamos verdadero en caso que todo se ejecuto normalmente
        return true;
    }
}

//utilizando module exports eviaremos todas las funciones a todos los archivos que hagan el llamado de este modulo
module.exports = {
    //todas las funciones que creamos seran exportadas para su futuro uso
    crear,
    getLista,
    actualizar,
    borrar
}