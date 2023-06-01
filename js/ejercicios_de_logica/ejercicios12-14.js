// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

let primo = (numero = undefined) => {
  if (numero === undefined) return console.warn("Debes ingresar un número.");

  if (typeof numero !== "number") return console.error(`El valor ${numero} no es un número.`);

  if (Math.sign(numero) === 0) return console.error("El valor ingresado no puede ser 0.");

  if(numero === 1) return console.warn("El valor ingresado no puede ser 1.")

  if (Math.sign(numero) === -1) return console.error("El valor ingresado no puede ser un número negativo.");

  let divisible = false;

  for(let i = 2; i < numero; i++){

    if((numero % i) === 0){
      divisible = true;
      break;
    }
  }

  return(divisible)
  ? console.info(`El número ${numero} no es primo.`)
  : console.info(`El número ${numero} es primo.`);

};

primo(2);



// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

let parOImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("Debes ingresar un número.");

  if (typeof numero !== "number") return console.error(`El valor '${numero}' no es un número.`);

  if (numero === 0) return console.error("El valor ingresado no puede ser 0.");

    (numero % 2 == 0)
    ? console.info(`El número ${numero} es par.`)
    : console.info(`El número ${numero} es Impar.`);
}

parOImpar(-28)



// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

let grados = (grado = undefined, conversor = "") => {

    if(grado === undefined) return console.warn("Debes introducir el grado.")

    if(typeof grado !== "number") return console.error("El grado debe estar escrito en números.")

    if(!conversor) return console.warn("Debes introducir el conversor C: Celcius o F: Fahrenheit.")

    if(typeof conversor !== "string") return console.error(`El valor ${conversor} no es una cadena de texto.`)

    if(conversor === "C") return console.info(`Grado Celcius ${grado} a Fahrenheit: ${(grado * 9/5) + 32}`)

    if(conversor === "F") return console.info(`Grado Fahrenheit ${grado} a Celcius: ${(grado - 32) * 5/9}`)
}

grados(20,"C")
grados(20,"F")
grados(0, "F")

console.log((5/9 * 0) + 32) // Celcius a Fahrenheit
console.log((0 - 32) * 5/9) // Fahrenheit a Celcius