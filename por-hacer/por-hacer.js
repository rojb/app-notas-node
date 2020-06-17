const fs = require('fs');
let listadoPorHacer = [];

let guardarBD = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/db.json', data, (err) => {
        if (err) throw Error('No se pudo grabar', err);
    })
}
let cargarBD = () => {
    try {
        listadoPorHacer = require('../db/db.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}
let getListado = () => {
    cargarBD();
    return listadoPorHacer;
}
let crearTarea = (descripcion) => {
    cargarBD();
    let tarea = {
        descripcion,
        completado: false
    }
    listadoPorHacer.push(tarea);
    guardarBD();
    return tarea;
}
const actualizar = (descripcion, completado = true) => {
    cargarBD();
    let index = listadoPorHacer.findIndex((elemento) => elemento.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarBD();
        return true;
    }
    return false;
}
const borrar = (descripcion) => {
    cargarBD();
    let index = listadoPorHacer.findIndex((elemento) => elemento.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarBD();
        return true;
    }
    return false;
}
module.exports = {
    crearTarea,
    getListado,
    actualizar,
    borrar
}