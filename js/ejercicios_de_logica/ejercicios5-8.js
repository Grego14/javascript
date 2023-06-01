// 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let funcionQueDevuelveArray = (texto, separador = '') => {
    (!texto)
    ? console.warn("Debes ingresar un texto")
    : console.log(texto.split(separador).reverse().join(""));
}

funcionQueDevuelveArray("Hola Mundo")



// 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

let funcionQueCuenta = (texto = "", textoABuscar = "") => {
    if(!texto) console.warn("Debes ingresar el texto a examinar.")

    if(!textoABuscar) console.warn("Debes ingresar la palabra a buscar.")

    let posicion = texto.indexOf(textoABuscar);

    let cuenta = 0;

    while ( posicion != -1 ) {
       cuenta++;
       posicion = texto.indexOf(textoABuscar, posicion+1);
    }
    return console.log(`La palabra ${textoABuscar} se encuentra ${cuenta} veces en el texto.`)
}

funcionQueCuenta("hola mundo adios mundo", "mundo")



// 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

let palindromo = (frase = "") => {

    if(!frase) return console.warn("Debes introducir la frase a comprobar.");

    frase = frase.toLowerCase()

    let fraseInvertida = frase.split("").reverse().join("");

    (frase === fraseInvertida)
    ? console.info(`La frase ${frase} es un palíndromo`)
    : console.error(`La frase ${frase} no es un palíndromo`);
}

palindromo("SAlas")



// 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

let funcionQueElimina = (texto = "", textoAEliminar) => {
    if(!texto) console.warn("Debes introducir el texto")

    if(!textoAEliminar) console.warn("Debes ingresar el/los caracteres a remplazar")

    let regex = new RegExp(textoAEliminar, "ig");

    return console.info(texto.replace(regex, ""))
}

funcionQueElimina("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")