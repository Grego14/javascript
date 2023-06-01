// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].

const arrayElevado = (array = undefined) => {

    if(array === undefined) return console.warn("Debes introducir un array con los números a elevar al cuadrado.")

    if(!(array instanceof Array)) return console.error(`El valor ${array} no es un array.`)

    if(array.includes(0)) return console.error("El número 0 no es valido.")

    if(array.length === 0) return console.error("El array no puede estar vacio.")

  for (const item of array) {
      if(typeof item !== "number"){
        return console.error(`El valor ${item} no es un número.`)
      }
  }

    let elevado = array.map(function(x){
      return Math.ceil(Math.pow(x,2))
  })

  return console.info(elevado)
}

arrayElevado()
arrayElevado({})
arrayElevado(true)
arrayElevado([])
arrayElevado([1,4,5,0.1])
arrayElevado(["1"])



// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1,, 5 4, 99, -60]) devolverá [99, -60].

const altoBajo = (array = undefined) => {

    if(array === undefined) return console.warn("Debes introducir un array con los números.")

    if(!(array instanceof Array)) return console.error(`El valor ${array} no es un array.`)

    if(array.length === 0) return console.error("El array no puede estar vacio.")

        return console.info(`${[Math.max(...array)]}  ${[Math.min(...array)]}`)

}

altoBajo()
altoBajo("Hola")
altoBajo({})
altoBajo([])
altoBajo([1, 4, 5, 99, -60])



// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const paresImpares = (array = undefined) => {
  if (array === undefined) return console.warn("Debes ingresar el array.");

  if (!(array instanceof Array))
    return console.error(`El valor ${array} No es un array.`);

  if (array.length === 0)
    return console.error("El array no puede estar vacio.");

  let pares = [],
    impares = [];

  let obj = {
    pares,
    impares,
  };

  for (let i = 0; i < array.length; i++) {
    if (i % 2 == 0) {
      pares.push(array[i]);
    } else {
      impares.push(array[i]);
    }
  }
  return console.info(obj)
};

paresImpares();
paresImpares(true);
paresImpares({});
paresImpares([]);
paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);