// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

let funcionQueCuentaCaracteres = (texto = "") =>
    (!texto)
    ? console.warn("Debes introducir algo")
    : console.log(texto.length);

funcionQueCuentaCaracteres("Hola Mundo")



// 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

let funcionQueCortaCaracteres = (texto = "",cortar = undefined) => {
    (!texto)
    ? console.warn("Debes ingresar algún texto")
    : (!cortar)
    ? console.warn("Debes ingresar el número a cortar")
    : (isNaN(cortar))
    ? console.warn("Solo puedes ingresar números")
    : console.log(texto.slice(0,cortar))
    return console.log(texto.slice(0,cortar))
}

funcionQueCortaCaracteres("Hola Mundo", 4)



// 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].

let funcionQueDevuelveArray = (texto, separador = ' ') => {
    (!texto)
    ? console.warn("Debes ingresar un texto")
    : console.log(texto.toString().split(separador));
}

funcionQueDevuelveArray("hola que tal")



// 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

let funcionQueRepite = (texto = "",repetir = undefined) => {
    (!texto)
    ? console.warn("Debes ingresar un texto")
    : (!repetir)
    ? console.warn("Debes ingresar la cantidad de veces a repetir el texto")
    : (Math.sign(repetir) == 0)
    ? console.error("No puedes ingresar el número 0")
    : (Math.sign(repetir) === -1)
    ? console.error("No se admiten números negativos")
    : console.log(texto.repeat(repetir));
}

funcionQueRepite("Hola Mundo", 3)