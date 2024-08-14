//------------------------------------
//Ejercicio 8

let calificacion = Number(prompt ("Que calificacion sacaste?"));
if(calificacion >10 && calificacion<1){
    console.log("ERROR");
} else if (calificacion >=9 && calificacion<=10){
    console.log("Excelente");
} else if (calificacion >=8 && calificacion<9){
    console.log("bien");
} else if (calificacion >=7 && calificacion<6){
    console.log("puedes mejorar");
} else if (calificacion >=6 && calificacion<7){
    console.log("apenitas");
} else {
    console.log("te ira mejor a la proxima");
}

//------------------------------------
//Ejercicio 11
//

let distancia = Number(prompt ("¿Que Distancia recorriste?"));
let litros = Number(prompt ("¿Cuantos litros consumiste?"))
let vehiculo =prompt("¿Que vehiculo conduces? carro/moto/autobus").toLocaleLowerCase();


if(vehiculo=="carro" && litros<100){
    let precio=distancia*.2+5
    console.log("el precio total es $"+precio);
} else if (vehiculo=="moto" && litros>100){
    let precio=distancia*.2+10
    console.log("El precio total es $"+precio);
}else if (vehiculo=="autobus" && litros>100){
    let precio=distancia*.1+10
    console.log("El precio total es $"+precio);
}else if (vehiculo=="autobus" && litros>100){
    let precio=distancia*.5+10
    console.log("El precio total es $"+precio);
}else{
    console.log("la opcion no esta disponible")
}
