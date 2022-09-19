function saludar(nombre) {
  console.log("hola " + nombre);
  return [10, 2, 3, 4, 4];
}

const saludar2 = function (nombre) {
  console.log("Hola " + nombre);
};

const saludarFlecha = () => {
  //lambda functions
  console.log("Hola Flecha");
};

const saludarFlecha2 = (nombre) => {
  console.log("Hola " + nombre);
};

const retornoDeSaludar = saludar("Abi");
console.log(retornoDeSaludar);

saludar2("Abigail");
saludarFlecha();
saludarFlecha2("Ruth");

console.log("------sumar----------");
function sumar(a, b) {
  //recibo parametros a la funcion
  return a + b;
}
console.log(sumar(1, 2)); //envio parametros a la funcion

console.log("------sumarFlecha----------");
const sumarFlecha = (a, b) => {
  return a + b;
};
console.log(sumarFlecha(2, 3));

console.log("------sumarFlecha2----------");
const sumarFlecha2 = (a, b) => a + b; // es lo mismo que la funcion de arriba pero
//resumido en una sola linea (no escribo return) y es solo para cuando
//solo deba retornar, si tengo mas de 1 linea si va escrita con {} como la funcion
//de arriba.
console.log(sumarFlecha2(3, 3));

console.log("-------getAleatorio-------");
function getAleatorio() {
  return Math.random();
}
console.log(getAleatorio());

console.log("-------getAleatorio lambda-------");
const getAleatorioLambda = () => Math.random();
console.log(getAleatorioLambda());