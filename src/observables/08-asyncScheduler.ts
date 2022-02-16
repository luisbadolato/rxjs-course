import { asyncScheduler } from 'rxjs';

//  asynchScheduler es +- la unión de setTimeout y setInterval
//  setTimeout(() => {}, 3000);
//  setInterval(() => {}, 3000);

const saludar = () => console.log('Hola Inmundo');
const saludarNombre = (nombre) => console.log(`Hola ${nombre}`);
const saludarNombreCompleto = ({nombre, apellido}) => console.log(`Buenas, ${nombre} ${apellido}`);

// Así funciona como setTimeout
asyncScheduler.schedule(saludar, 2000);

// Así se puede parametrizar, pero es verboso
asyncScheduler.schedule(() => saludarNombre('Imbésil'), 3000);

// Así mandamos 'state' a la función del 1er parámetro
asyncScheduler.schedule(saludarNombre, 4000, 'Ridículo');

// Así mandamos 'state' complejo a la función del 1er parámetro
asyncScheduler.schedule(saludarNombreCompleto, 5000, {nombre:'Peazo', apellido:'Mierda'});


const subscription = asyncScheduler.schedule(function(state){
    console.log('State', state);
    this.schedule(state+1, 1000)
}, 3000, 0);

// Unsubscribe para evitar memory leaks
// setTimeout es feo pero claro
setTimeout(() => subscription.unsubscribe(), 7000);

// Unsubscribe mediante asyncSchduler, mismo efecto
asyncScheduler.schedule(() => subscription.unsubscribe(), 8000);