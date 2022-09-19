const heroes=['batman','iron man','superman','hulk'];

console.log('for tradicional'.toUpperCase());

for(let i=0 ; i<heroes.length ; i++){
    console.log(heroes[i]);
}

console.log('for in'.toUpperCase());
for(let i in heroes){
console.log(heroes[i]);
}


console.log('for of'.toUpperCase());
for(let heroe of heroes){ //se utiliza el singular del array
console.log(heroe);
}

