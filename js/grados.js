let grados = (grado = undefined, conversor1 = undefined, conversor2 = undefined) => {

    let regex = /(C|F|K)/

    if(grado === undefined) return console.warn("Debes introducir el grado.")

    if(typeof grado !== "number") return console.error("El grado debe estar escrito en números.")

    if(conversor1 === undefined) return console.warn("Debes introducir la unidad a convertir.")

    if(typeof conversor1 !== "string") return console.error(`El valor ${conversor1} no es una cadena de texto.`)

    if(conversor1.length !== 1 || !regex.test(conversor1)) return console.error("Solo esta permitido los conversores C: Celcius, F: Fahrenheit y K: Kelvin.")
    
    if(conversor2 === undefined) return console.warn("Debes introducir la unidad a la cual será convertida.")

    if(typeof conversor2 !== "string") return console.error(`El valor ${conversor2} no es una cadena de texto.`)

    if(conversor2.length !== 1 || !regex.test(conversor2)) return console.error(`Solo esta permitido los conversores C: Celcius, F: Fahrenheit y K: Kelvin.`)

    if(conversor1 === "C" && conversor2 === "F"){
        console.info(`${grado} ºC a Fahrenheit ${((grado * 9/5) + 32).toFixed(2)} ºF`)
    }else if(conversor1 === "C" && conversor2 === "K"){
        console.info(`${grado} ºC a Kelvin ${((grado + 273.15)).toFixed(2)} K`)
    }else if(conversor1 === "F" && conversor2 === "C"){
        console.info(`${grado} ºF a Celcius ${((grado - 32) * 5/9).toFixed(2)} ºC`)
    }else if(conversor1 === "F" && conversor2 === "K"){
        console.info(`${grado} ºF a Kelvin ${((grado - 32) * 5/9 + 273.15).toFixed(2)} K`)
    }else if(conversor1 === "K" && conversor2 === "C"){
        console.info(`${grado} K a Celcius ${((grado - 273.15)).toFixed(2)} ºC`)
    }else if(conversor1 === "K" && conversor2 === "F"){
        console.info(`${grado} K a Fahrenheit ${((grado - 273.15) * 9/5 + 32).toFixed(2)} ºF`)
    }
}

console.log("Celcius a Fahrenheit y Kelvin")

grados(10,"C","F")

grados(10,"C","K")

console.log("Fahrenheit a Celcius y Kelvin")

grados(10,"F","C")

grados(10,"F","K")

console.log("Kelvin a Celcius y Fahrenheit")

grados(10,"K","C")

grados(10,"K","F")