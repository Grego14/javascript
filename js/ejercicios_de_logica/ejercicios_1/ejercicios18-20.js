// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.

let vocalesConsonantes = (texto = undefined) => {
  if (texto === undefined || texto === "") return console.warn("Debes introducir un texto.");
  if (typeof texto !== "string") return console.error(`El valor '${texto}' no es una cadena de texto.`);

  let vocales = texto.match(/[aeiouáéíóúü]/ig)
  let consonantes = texto.match(/[qwrtypsdfghjklñzxcvbnm]/ig)

    if(vocales === null){
        vocales = 0;
    }
    if(consonantes === null){
        consonantes = 0;
    }

  if(vocales !== null && consonantes !== null) return console.info(`El texto '${texto}' tiene ${(vocales.length || vocales)} vocales y ${(consonantes.length || consonantes)} consonantes`)
};

vocalesConsonantes("Hola Mundo")
vocalesConsonantes()
vocalesConsonantes(true)
vocalesConsonantes("HLHL")
vocalesConsonantes("àèühola")
vocalesConsonantes()
vocalesConsonantes("hola")
vocalesConsonantes("")
vocalesConsonantes({})
vocalesConsonantes('')
vocalesConsonantes(Boolean)
vocalesConsonantes(``)



// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

const validarNombre = (nombre = "") => {
  if (!nombre) return console.warn("Debes introducir un nombre.");
  if (typeof nombre !== "string")
    return console.error(`El valor '${nombre}' no es una cadena de texto.`);

  let expReg = /^[A-Za-zÑñáÁéÉíÍóÓúÚüÜ\s]+$/g.test(nombre);

  return expReg
    ? console.info(`Tu nombre es ${nombre}`)
    : console.error(`Tu nombre es invalido.`);
};

validarNombre()
validarNombre(true)
validarNombre({})
validarNombre("Hola 123")
validarNombre("Mr Ipsum")



// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

const validarEmail = (email = "") => {
    if(!email) return console.warn("Debes introducir un correo.")
    if(typeof email !== "string") return console.error(`El valor '${email}' no es una cadena de texto.`)

    let expReg = /^[A-Za-zÑñáÁéÉíÍóÓúÚüÜ$.-_]+(@gmail.com|@hotmail.com)$/g.test(email)

    return (expReg)
    ? console.info(`Tu correo es ${email}`)
    : console.error(`Tu correo es invalido.`);
}

validarEmail()
validarEmail(true)
validarEmail({})
validarEmail("Grego_10.94$Ñ@gmail.com")
validarEmail("Grego_10.94$Ñ@hotmail.com")