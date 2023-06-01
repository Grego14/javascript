// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.

let conversor = (numero = undefined, base = undefined) => {

    if(numero === undefined) return console.warn("Debes introducir el número a convertir.")
    if(typeof numero !== "number") return console.error(`El valor ${numero} no es valido.`)

    let regex = /(2|10)/

    if(base === undefined) return console.warn("Debes introducir la base binaria '2' o decimal '10'.")
    if(typeof base !== "number") return console.error(`La base ${base} no es valida.`)
    if(!regex.test(base)) return console.error("Solo esta permitida la conversión a base binaria '2' o decimal '10'.")

    return (base === 2)
    ? console.info(`${parseInt(numero,base)} base 10`)
    : console.info(`${(numero.toString(2))} base 2`);
}

conversor(100,2)
conversor(4,10)



// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.

let porcentaje = (cantidad = undefined, porciento = undefined) => {
    if(cantidad === undefined) return console.warn("Debes introducir una cantidad.")
    if(typeof cantidad !== "number") return console.error("La cantidad debe ser un número.")
    if(Math.sign(cantidad) === -1) return console.error("La cantidad no puede ser un número negativo.")
    if(Math.sign(cantidad) === 0) return console.error("La cantidad no puede ser 0")

    if(porciento === undefined) return console.warn("Debes introducir el porcentaje.")
    if(typeof porciento !== "number") return console.error("El porcentaje debe ser un número.")
    if(Math.sign(porciento === -1)) return console.error("El porcentaje no puede ser un número negativo.")

    let porcentaje = ((porciento*cantidad) / 100);

    return console.info(cantidad - porcentaje)
}

porcentaje(1000,20)



// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).

let fecha = (date = undefined) => {

    if(date === undefined){
        return console.warn("Debes introducir una fecha.")
    }else if(!(date instanceof Date)) {
        return console.warn("El valor ingresado no es valido")
    }

    let fecha = new Date().getFullYear() - date.getFullYear()

    if(Math.sign(fecha) === -1) return console.info(`Faltan ${Math.abs(fecha)} años para el ${date.getFullYear()}.`)
    if(Math.sign(fecha) === 0) return console.info(`Estamos en el ${date.getFullYear()}.`)
    if(Math.sign(fecha) === 1) return console.info(`Han pasado ${fecha} años desde el ${date.getFullYear()}.`)
}

fecha(new Date(1984,4,23))
fecha(new Date())