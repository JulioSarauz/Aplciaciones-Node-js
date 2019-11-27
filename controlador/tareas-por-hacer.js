const fs = require('fs');
const colors = require('colors')

let tareasPorHacer = [];

const cargarDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
    } catch (error) {
        tareasPorHacer = [];
    }
}
const leerDB = () => {
    try {
        tareasPorHacer = require('../db/data.json');
        for (x of tareasPorHacer) {
            console.log("====== POR HACER =======".green);
            console.log("Tarea:".red, x.descripcion.blue);
            console.log("Estado: ".red, `${x.compleatado}`.blue);
        }
        return tareasPorHacer;
    } catch (error) {
        tareasPorHacer = [];
    }
}

const guardarDB = () => {
    let data = JSON.stringify(tareasPorHacer);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('No se pudo guardar', err);
    });
}

const crear = (descripcion) => {
    cargarDB();
    let tarea = {
        descripcion,
        compleatado: false
    };
    tareasPorHacer.push(tarea);
    guardarDB();
    return tarea;
}
const listar = () => {
    leerDB();
}


const actualizar = (descripcion, compleatado = true) => {
    cargarDB();
    let index = tareasPorHacer.findIndex(tarea => tarea.descripcion === tarea.descripcion);
    if (index >= 0) {
        tareasPorHacer[index].compleatado = compleatado;
        guardarDB();
        return true;
    }
    return false;
}
const borrar = (descripcion) => {
    cargarDB();
    let nuevoListado = tareasPorHacer.filter(tarea => tarea.descripcion !== descripcion);
    if (tareasPorHacer.length === nuevoListado.length) {
        return false;
    } else {
        tareasPorHacer = nuevoListado;
        guardarDB();
        return true;
    }
}
module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}