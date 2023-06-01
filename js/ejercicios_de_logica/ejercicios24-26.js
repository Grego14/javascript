// 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.

const ascDesc = (arreglo = undefined) => {

  if(arreglo === undefined) return console.warn(`Debes ingresar un arreglo con números.`)

  if(!(arreglo instanceof Array)) return console.error(`El valor ${arreglo} no es un arreglo.`)

  if(arreglo.length === 0) return console.error(`El arreglo no puede estar vacio`)

  for (const item of arreglo) {
    if(typeof item !== "number") return console.error(`El valor '${item}' no es un número`)
  }

  let arreglo2 = arreglo.map((a) => a)

    return console.info({
      asc: arreglo.sort(),
      desc: arreglo2.sort((a,b) => b - a)
    })
}

ascDesc()
ascDesc({})
ascDesc(false)
ascDesc([])
ascDesc([7,5,7,8,6,"105"])
ascDesc([7,5,7,8,6])



// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

const eliminarDuplicados = (arr = undefined) => {

  if (arr === undefined) return console.warn(`Debes ingresar un arreglo.`);

  if (!(arr instanceof Array))
    return console.error(`El valor ${arr} no es un arreglo.`);

  if (arr.length === 0)
    return console.error(`El arreglo no puede estar vacio.`);

    let arr2 = new Set(arr)

    return console.log(arr2)

};

eliminarDuplicados()
eliminarDuplicados("123")
eliminarDuplicados([])
eliminarDuplicados([1,2,3,3,"3"])
eliminarDuplicados(["x", 10, "x", 2, "10", 10, true, true])



// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const promedio = (arr = undefined) => {
    if (arr === undefined) return console.warn(`Debes ingresar un arreglo.`);

    if (!(arr instanceof Array))
      return console.error(`El valor ${arr} no es un arreglo.`);

    if (arr.length === 0)
      return console.error(`El arreglo no puede estar vacio.`);

    let arr2 = arr.reduce((vI,vA) => {
      return ((vI + vA))})

    return console.log(arr2 / arr.length)
}
promedio()
promedio({})
promedio(true)
promedio([])
promedio([9,8,7,6,5,4,3,2,1,0])