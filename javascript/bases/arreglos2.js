let espacio = console.log('-----------');

let nombres = ['Abigail','Arturo','Leon','Maria'];
console.log('largo: ', nombres.length);

let primero = nombres[2-2]; // 2-2=0, es la posicion 0 del array

let ultimo = nombres[nombres.length-1]; //es la ultima posicion del array
 
console.log(primero,",", ultimo);

console.log('-----------');

nombres.forEach((elemento, indice, arr) =>{
    console.log({elemento,indice,arr});
})

console.log('-----------');
// añado un nombre al final del arreglo y ahora modifico la longitud del mismo
let nuevaLongitud = nombres.push('Pedro');
console.log({nuevaLongitud, nombres});

console.log('-----------');

//añado al inicio del arreglo un nombre 
nuevaLongitud = nombres.unshift('Jorge');
console.log({nuevaLongitud, nombres});

console.log('-----------');

//para borrar el ultimo elemento del arreglo
let nombreBorrado = nombres.pop();
console.log("del array ", nombres, "se ha eliminado: ", nombreBorrado);

console.log('-----------');

//si quiero borrar un elemento especifico
let posicion=1;
let nombresBorrados = nombres.splice(posicion,2); // a partir de la posicion 1, borra 2 elementos
console.log({nombresBorrados, nombres});

console.log('-----------');

//en que posicion se encuentra x elemento
let leonIndex = nombres.indexOf('Leon');
console.log(leonIndex);