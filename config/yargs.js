const descripcion = {
    demand: true,
    alias: 'd',
    description: 'Descripción de la tarea.'
}
const completado = {
    alias: 'c',
    default: true,
    description: 'Marca como completado o pendiente la tarea.'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer o tarea.', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra un elemento dada una decripción', {
        descripcion
    })
    .help()
    .argv;
module.exports = {
    argv
}