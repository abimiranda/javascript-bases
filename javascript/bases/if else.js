// let a =4;

// /////////////////////
 function space(){
 console.log('--------------------');
 }

// function cuantoValeA(){
//     if (a>3){
//     console.log('a =',a);
//     console.log(a, " es mayor a 3");
//     }else {console.log('a = ',a);
//     console.log(a, "es menor a 3");
//     }    
// }

// console.log('a punto de ejecutarse la funcion cuanto vale a:')
// cuantoValeA();

// space();

const hoy = new Date();
console.log('hoy',hoy);//fecha completa
console.log('hora',hoy.getTime());
console.log('año' ,hoy.getFullYear());
console.log('dia' ,hoy.getDay());
console.log('mes' ,hoy.getMonth());

space();

//acceder a x dia de la semana sin usar condicionales
//en este caso lo hacemos con {} y accedemos segun su par llave:valor
dia = 3;
const diasLetras = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

console.log('el dia n°', dia,'de la semana es',diasLetras[3].toUpperCase() || 'Dia no definido');

space();
//y en este caso accderemos segun con un array
const diasLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];
console.log('el dia n°',dia,'de la semana es',diasLetras2[dia].toUpperCase());