//TAREA 4
//Autor: Carlos Retamales A
//Fecha: 2022-30-10

/* Solicitado */
/*
Obtener el promedio de notas de un alumno considerando que la
suma de notas debe ser el retorno de una función y el promedio
el retorno de otra función. Las notas son: 6,8,9,2,5,10.
*/

/* Desarrollo */
// Se asume que las notas están en un arreglo y en caso de que no 
// estén se crea un arreglo con las notas y se guardarian en ese
// arreglo para poder realizar el promedio

// Declaramos las variables (notas)
var nota_1 = 6;
var nota_2 = 8;
var nota_3 = 9;
var nota_4 = 2;
var nota_5 = 5;
var nota_6 = 10;

// Declaramos el arreglo (notas)
// Tambien se puede ocupar push para agregar elementos al arreglo con un for
var notas = [nota_1, nota_2, nota_3, nota_4, nota_5, nota_6];


// Declaramos la función para sumar las notas
// Entrada: Arreglo de notas
// Salida: Suma de las notas
function suma_de_notas(notas){
    //Se declara la variable para la suma
    var suma = 0;
    //Se recorre el arreglo de notas
    for (var i = 0; i < notas.length; i++){
        suma += notas[i];
    }
    //Se retorna la suma
    return suma;
}

// Declaramos la función para obtener el promedio
// Entrada: arreglo de notas
// Salida: promedio de las notas
function promedio_de_notas(notas){
    //Se declara la variable para el promedio
    var promedio = 0;
    //Se llama a la función suma_de_notas para obtener la suma
    var suma = suma_de_notas(notas);
    //Se calcula el promedio
    promedio = suma / notas.length;
    //Se retorna el promedio
    return promedio;
}

// Llamado a la función promedio_de_notas
var promedio = promedio_de_notas(notas);
// Se muestra el promedio por consola
console.log("El promedio de las notas es: " + promedio);
// En caso de querer mostrar el resultado redondeado se puede ocupar
// la función Math.round
//console.log("El promedio de las notas es: " + Math.round(promedio));

///////////////////////////////////////////////////////////////////////////////////////
// Extra 
// Aunque no se pida en la tarea se anexa tambien la otra parte de la tarea
//  Función recursiva que realice lo siguiente:
//      a. Mostrar en consola los números del 1 al 100 de 1 en 1.
//      b. Mostrar en consola los números del 1000 al 500 de 2 en 2.

// Función recursiva para mostrar los números del 1 al 100 de 1 en 1
// Entrada: Número
// Salida: Números del 1 al 100 de 1 en 1
function funcion_recursiva_1_secundaria(numero){
    // Se muestra el número por consola 
    console.log(numero);
    // Se verifica si el número es menor a 100
    if (numero < 100){
        // Se llama a la función recursiva
        funcion_recursiva_1_secundaria(numero + 1);
    }
}

// dado que solo nos menciona que se debe mostrar los números del 1 al 100 de 1 en 1
function funcion_recursiva_1()
{
    // Se llama a la función recursiva secundaria
    funcion_recursiva_1_secundaria(1);
}

// Función recursiva para mostrar los números del 1000 al 500 de 2 en 2
// Entrada: Número
// Salida: Números del 1000 al 500 de 2 en 2
function funcion_recursiva_2_secundaria(numero){
    // Se muestra el número por consola 
    console.log(numero);
    // Se verifica si el número es mayor a 500
    if (numero > 500){
        // Se llama a la función recursiva
        funcion_recursiva_2_secundaria(numero - 2);
    }
}

//dado que solo nos menciona que se debe mostrar los números del 1000 al 500 de 2 en 2
function funcion_recursiva_2()
{
    // Se llama a la función recursiva secundaria
    funcion_recursiva_2_secundaria(1000);
}


// Llamado a las funciones recursivas (Descomentar para ver el resultado).
// a. Mostrar en consola los números del 1 al 100 de 1 en 1.
//funcion_recursiva_1();
// b. Mostrar en consola los números del 1000 al 500 de 2 en 2.
//funcion_recursiva_2();