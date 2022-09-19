const nombres=['Abi','Anto','Josu','Juan','Antonio'];

let i=0;

while(i < nombres.length){
    console.log(nombres[i]);
    i++;
}

console.log('todos los nombres impresos');
console.log('fin ciclo while');


//el do se va a ejecutar al menos 1 vez, luego lee
//la condiciones dentro del while y seguirá en el
//ciclo segun corresponda

let j=0;
do{
    console.log(nombres[j]);
    j++;
}while(j<nombres.length);

console.log('fin ciclo do while');
