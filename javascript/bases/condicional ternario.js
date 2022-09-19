/* Dia de semanas abrimos a las 11,
pero los fines de semanas abrimos a las 9 */

const dia=0; // predeterminado: -- 0:domingo | 1:luens | 2:martes
const horarioActual=10;

let horarioApertura;
let mensaje;//está abierto, está cerrado, abrimos a las XX 

 if(dia===0 || dia===6){ //igual en tipo de dato
      console.log('Hoy es fin de semana, abrimos a las', horarioApertura=9);
  }else{
     console.log('Hoy abrimos a las',horarioApertura=11);
 }
