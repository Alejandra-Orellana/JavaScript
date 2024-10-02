//1 - Numero par o impar

function esParOImpar(numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es un número par.");
    } else {
        console.log(numero + " es un número impar.");
    }
}

esParOImpar(7);  // 7 es un número impar.
esParOImpar(4);  // 4 es un número par.



// 2- Numero mayor o igual

function ImprimirSiEsMayor(num){
    if (num <= 14){
        return;
    }
    console.log(num)
}
ImprimirSiEsMayor(7)
ImprimirSiEsMayor(20)



// 3 - Multiplo de 5

function MultiploDe5(a,b){
    console.log(a*b)
}
MultiploDe5(5,5)




// 4 - Desde cero hasta un número
function ImprimirHasta(num){
  for (let i = 0; i <= num; i++){
    console.log(i)
  }
}
ImprimirHasta(5)




// 5 - Repetir palabras X veces

 function RepetirPalabra(palabra, cantidad){
    for (let i = 0; i < cantidad; i++){
        console.log(palabra);
    }
 }
 RepetirPalabra("Hola", 5)




 // 6 - ARRAY

 let PaisesDeAmerica = [
    'Argentina',
    'Brasil',
    'Colombia',
    'Uruguay',
    'Chile',
 ]
 console.log([PaisesDeAmerica])




 // 7 - Array menos la quinta posición

 let myArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10
 ]
 console.log(myArray)
 console.log(myArray [5])



 // 8 - array multiplicado por el número pasado por parámetro

 function MultiplicarArrayPorNumero(array, numero){
    for (let i = 0; i < array.length; i++ ){
        console.log(array[i] * numero)
    }
 }
let numero = [1, 2, 3, 4, 5 ];
MultiplicarArrayPorNumero(numero, 4)