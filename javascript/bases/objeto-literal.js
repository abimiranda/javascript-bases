let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron Man',
    vivo:false,
    edad:40,
    coords:{
        lat: 34.034,
        lng: -118.70
    },
    trajes: ["Mark I","Mark V","Hulkbuster"],
    direccion:{
    zip: "10880,20200",
    ubicacion: "Malibu, California"},
    'ultima-pelicula':'Infinity War'
};

console.log(personaje);
console.log('Nombre' , personaje.nombre);
console.log("Edad", personaje["edad"]); // dos maneras de hacer lo mismo
console.log("Edad", personaje.edad);

console.log("Coords", personaje.coords);
console.log("Lat", personaje.coords.lat);

console.log("Cant de trajes", personaje.trajes.length);
console.log("Ultimo traje:", personaje.trajes[personaje.trajes.length-1]);

const x = 'vivo';
console.log(personaje[x]); // busca vivo en mi objeto y me imprime los valores

console.log('ultima-pelicula', personaje['ultima-pelicula']);

//mas detalles
delete personaje.edad;
console.log(personaje);

//si la propiedad no aparece en el objeto xq no fue definida puedo hacerlo asi
personaje.casado=true;

//vamos a tratar este objeto como areglo:
console.log('---------------------------------');
const entriesPares = Object.entries(personaje);
console.log(entriesPares);

console.log('---------------------------------')

//como personaje es una constante significa que no puedo modificarle un valor directo
//asi como personaje={} o personaje=123 etc
//Si quiero dejarle sus valores fijos, sin poder modificar algo del objeto hago:
Object.freeze(personaje); //freeze hace alusion a freezar, congelar este objeto tal como está


//esto los convierte en arreglos
console.log('----------propiedades------------');
const propiedades= Object.getOwnPropertyNames(personaje); //accedo a las llaves 
console.log(propiedades);

console.log('----------valores------------');//accedos a los valores
const valores= Object.values(personaje); 
console.log(valores);