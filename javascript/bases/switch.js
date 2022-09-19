const dia = 1; // 0:domingo ..

switch(dia){ //dia es la variable de control
    case 0:
        console.log('domingo');
        break; // salimos del switch si se cumple esta condicion, sino, sigue recorriendo los otros casos
    case 1:
        console.log('lunes');
        break;
    case 2:
        console.log('martes');
        break;
    case 3:
        console.log('miercoles');
        break;
    case 4:
        console.log('jueves');
        break;
    case 5:
        console.log('viernes');
        break;
    case 6:
        console.log('sabado');
        break; 
    default: //sino es ninguno de los casos anteriores, por default hará lo siguiente
        console.log('dia debe tener un valor entre 0 y 6!');
}