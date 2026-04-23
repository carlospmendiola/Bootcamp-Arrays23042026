/* 1. Obtener el primer elemento del array
Enunciado: Dado un array, retorna el primer elemento del mismo. */

// let diasSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
// console.log(diasSemana [0]) 


/* 2. Obtener el último elemento del array
Enunciado: Dado un array, retorna el último elemento del mismo. */

// let diasSemana = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"];
// console.log(diasSemana [6]) 

/* 3. Agregar un elemento al inicio del array
Enunciado: Agrega un elemento al inicio de un array y devuelve el array actualizado. */
// let mesesAnio = ['febrero','marzo','abril','mayo','junio']
// mesesAnio.unshift("enero");
// console.log(mesesAnio)

/* 4. Eliminar el primer elemento del array
Enunciado: Elimina el primer elemento de un array y devuelve el array resultante. */
// let componentesBeatles = ["John","Paul","Ringo","George"]
// componentesBeatles.shift();
// console.log(componentesBeatles)

/* 5. Agregar un elemento al final del array
Enunciado: Agrega un elemento al final de un array y devuelve el array actualizado. */
// let mascomponentesBeatles = ["John","Paul","Ringo"]
// mascomponentesBeatles.push("George");
// console.log(mascomponentesBeatles)

/* 6. Eliminar el último elemento del array
Enunciado: Elimina el último elemento de un array y devuelve el array resultante. */
// let menoscomponentesBeatles = ["John","Paul","Ringo","George"]
// menoscomponentesBeatles.pop();
// console.log(menoscomponentesBeatles)

/* 7. Combinar dos arrays
Enunciado: Dado dos arrays, combínalos en uno solo y retorna el resultado. */
// let beatles = ["John","Paul","Ringo","George"]
// let police = ["andy","stewart","sting"]
// let mix = beatles.concat(police);
// console.log(mix)

/* 8. Encontrar si un array incluye un elemento
Enunciado: Dado un array y un elemento, verifica si el array contiene ese elemento. */
// let esdelosBeatles = ["John","Paul","Ringo","George"]

/* console.log(esdelosBeatles.includes("George"));
console.log(esdelosBeatles.includes("Sting")); */

/* 9. Buscar el índice de un elemento
Enunciado: Dado un array y un elemento, encuentra el índice de la primera aparición de dicho elemento. */
// let buscarBeatles = ["John","Paul","Ringo","George"]
// let buscar = buscarBeatles.indexOf("George");
// console.log(buscar)

/* 10. Reemplazar un elemento en un array
Enunciado: Dado un array, reemplaza un elemento en un índice específico por otro y devuelve el array modificado. */
// let remplazarBeatle = ["John","Paul","Ringo","George"]
// remplazarBeatle[2] = "Andy";
// console.log(remplazarBeatle)

/* 11. Sumar todos los elementos del array
Enunciado: Dado un array de números, suma todos sus elementos y devuelve el resultado. */
// let sumaElementos = [45,55,65,75,85]
// const valorInicial = 0;
// const sumaDesdeInicio = sumaElementos.reduce(
//   (sumador, valorActual) => sumador + valorActual,
//   valorInicial,
// );

// console.log(sumaDesdeInicio);

/* 12. Multiplicar todos los elementos del array
Enunciado: Dado un array de números, multiplica cada elemento por un valor específico y devuelve el nuevo array. */
// let multiplicaElementos = [45,55,65,75,85]
// const multiInicial = 1;
// const multiDesdeInicio = multiplicaElementos.reduce (
//   (multiplicador, multiActual) => multiplicador * multiActual,
//   multiInicial,
// );

// console.log(multiDesdeInicio);
/* 13. Filtrar números mayores a un valor
Enunciado: Dado un array de números y un valor, devuelve un nuevo array con los números que sean mayores a ese valor. */
/* let listadoNumeros = [45,55,65,75,85]
const result = listadoNumeros.filter((numero) => numero > 65);
console.log(result) */

/* 14. Verificar si todos los elementos son mayores a un número
Enunciado: Dado un array de números y un valor, verifica si todos los elementos del array son mayores a ese valor. */
// let otrosNumeros = [45,55,65,75,85]
// const resultado = otrosNumeros.every ((num) => num >50);
// console.log (resultado)

/* 15. Obtener el primer elemento que cumple una condición
Enunciado: Dado un array de números y un valor, encuentra el primer número que sea mayor al valor dado. */
// let encontrarNumero = [1,2,3,6,10,22]
// const resultado = encontrarNumero.find ((numero) => numero >5)
// console.log(resultado)

/* 16. Imprimir cada elemento del array
Enunciado: Dado un array de números, recorre el array e imprime cada uno de sus elementos en la consola. */
// let imprimirNumeros = [22,42,52,62,72,82,92]
// imprimirNumeros.forEach((elemento) => console.log(elemento));

/* 17. Crear un array con el doble de cada número
Enunciado: Dado un array de números, genera un nuevo array en el que cada número sea el doble de su valor original. */
// let dobleNumero = [12,22,32,42,52,62]
// const resultado = dobleNumero.map(function(numero) {
//   return (numero * 2)
// })
// console.log(resultado)

/* 18. Convertir un array de nombres en mayúsculas
Enunciado: Dado un array de nombres (strings), genera un nuevo array donde cada nombre esté en mayúsculas. */
let nombresMayusculas = ["john","paul","ringo","george"]
const mayusculas = nombresMayusculas.map(function(letras) {
  return (letras.toUpperCase())
})
console.log(mayusculas)
