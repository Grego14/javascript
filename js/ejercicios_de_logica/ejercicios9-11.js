// 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

let numeroAleatorio = (min = 501,max = 600) => console.info(Math.round(Math.random() * (max - min) + min));

numeroAleatorio()



// 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

let capicua = (numero = 0) => {
    if(numero == 0) return console.warn("El número ingresado no puede ser 0")
    if(!numero) return console.warn("Debes introducir un número")
    if(typeof numero !== "number") return console.warn("Debes introducir un número")

    numero = numero.toString()
    let invertir = numero.split("").reverse().join("")

    return (numero == invertir)
    ?   console.info(`El número ${numero} es capicúa se lee igual que al revés`)
    :   console.info(`El número ${numero} no es capicúa`);
}

capicua(55)



// 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

let factorial = (n = undefined) => {

    if(n === undefined) return console.warn("Debes ingresar un número.")

    if(n === 0) return console.warn("No puedes ingresar el número 0.")

    if(typeof n !== "number") return console.error("El valor ingresado no es un número.")

    if(Math.sign(n) === -1) return console.error("No puedes ingresar números negativos.")

    let resultado = 1;

    for(let i = 1; i <= n; i++){
        resultado *= i
    }
    return console.info(resultado)
}

factorial(5)