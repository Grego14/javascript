/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*.
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/

class Pelicula {
    constructor({id, titulo, director, año, pais, generos, calificacion}) {
      (this._id = id),
        (this._titulo = titulo),
        (this._director = director),
        (this._año = año),
        (this._pais = pais),
        (this._generos = generos),
        (this._calificacion = calificacion);
  
      this.validarID(id);
      this.validarTitulo(titulo);
      this.validarDirector(director);
      this.validarAño(año);
      this.validarPais(pais);
      this.validarGeneros(generos);
      this.validarCalificacion(calificacion);
    }
  
    validarString(propiedad,valor){
      if(valor === undefined) return console.error(`El ${propiedad} no puede estar vacio.`)
      if(typeof valor !== "string") return console.error(`El ${propiedad} debe ser una cadena de texto.`)
    }
  
    validarArreglo(propiedad,valor){
      if(!(valor instanceof Array)) return console.warn(`Debes introducir los ${propiedad} dentro de un arreglo.`)
      for (const i of valor) {
        if(typeof i !== "string") return console.error(`El valor '${i}' en la posición ${valor.indexOf(i) + 1} debe ser una cadena de texto.`)
      }
      if(valor.length === 0) return console.error(`El arreglo ${propiedad} no puede estar vacio.`)
    }
  
    fichaTecnica() {
      return `ID: ${this._id}\nTitulo: ${this._titulo}\nDirector: ${this._director}\nAño: ${this._año}\nPais: ${this._pais}\nGeneros: ${this._generos}\nCalificación: ${this._calificacion}`
    }
  
    static generosAceptados() {
      console.log(
        "Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western."
      );
    }
  
    validarID(id) {
      let regex = /^([a-z]{2})(\d{7})$/;
      this.validarString("ID",id)
      if (!regex.test(id)) {
        console.error(`El ID debe estar formado por 2 letras minusculas iniciales y seguido de 7 números.`);
      }
    }
  
    validarTitulo(titulo) {
      this.validarString("Titulo",titulo)
      if (titulo !== undefined && titulo.length > 100) return console.warn("El titulo de la pelicula no debe superar los 100 caracteres.");
    }
  
    validarDirector(director) {
  
      this.validarString("Director",director)
      if (director !== undefined && director.length > 50)
        return console.warn("El nombre del director no debe superar los 50 caracteres.");
    }
  
    validarAño(año) {
      if(año === undefined) return console.warn("Debes introducir el año de la pelicula.");
      if(typeof año !== "number") return console.error(`El año debe ser un número.`)
      if(Math.sign(año) === -1) return console.error(`El año no puede ser un número negativo`)
      if (Number.isInteger(año) === false) return console.error("El año de la pelicula debe ser un número entero.");
  
      let longitud = año.toString()
  
      if(año !== undefined && longitud.length > 4 || longitud.length < 4) return console.error(`El año de la pelicula no puede ser menor o mayor a los 4 dígitos.`)
    }
  
    validarPais(pais) {
      this.validarArreglo("Paises",pais)
  }
  
    validarGeneros(generos) {
  
      this.validarArreglo("Generos",generos)
  
      if(generos !== undefined){
        for (const item of generos) {
          if (typeof item !== "string") {
            console.error(`El valor ${item} debe ser una cadena de texto`);
          }
        }
      }
  
        let generosPermitidos =
          /(Action|Adult|Adventure|Animation|Biography|Comedy|Crime|Documentary|Drama|Family|Fantasy|Film Noir|Game-Show|History|Horror|Musical|Music|Mystery|News|Reality-TV|Romance|Sci-Fi|Short|Spor|Talk-Show|Thriller|War|Western)/i;
      
        generos.forEach((element, index) => {
          if (!generosPermitidos.test(element)) {
            console.error(
              `El genero ${element} en la posición '${index + 1}' no está en la lista de generos de pelicula permitidos.`
            );
          }
        });
    }
  
    validarCalificacion(calificacion = undefined) {
      let regex = /^(10|\d(\.\d)?|[0-9](\.\d)?)$/;
  
      if (calificacion === undefined)
        return console.warn("Debes introducir la calificación de la pelicula.");
      if (typeof calificacion !== "number")
        return console.error("La calificación debe estar escrita en números.");
      if (Math.sign(calificacion) === -1)
        return console.error("La calificación no puede ser un número negativo.");
      if (!regex.test(calificacion))
        return console.error(
          "La calificación puede ser apartir de 0 hasta 10 usando 1 decimal mientras el número sea menor a 10."
        );
    }
  }
  
  let peliculas = [{
    id: "tt6718170",
    titulo: "The Super Mario Bros. Movie",
    director: "Aaron Horvath, Michael Jelenic, Pierre Leduc",
    pais: ["Estados Unidos"],
    generos: ["Animation","Adventure","Comedy"],
    año: 2023,
    calificacion: 7.2
  },{
    id: "tt2243973",
    titulo: "Hannibal",
    director: "Bryan Fuller",
    pais: ["Estados Unidos", "Canadá", "Reino Unido"],
    generos: ["crime","drama","horror"],
    año: 2013,
    calificacion: 8.5
  },{
    id: "tt2661044",
    titulo: "The 100",
    director: "Jason Rothenberg",
    pais: ["Estados Unidos","Canadá"],
    generos: ["Drama","Mystery","Sci-Fi"],
    año: 2014,
    calificacion: 7.6
  }]
  
  const instancias = [];
  
  for (let i = 0; i < 3; i++) {
    const { id,titulo,director,pais,generos,año,calificacion} = peliculas[i];
    const pelicula = new Pelicula({id,titulo,director,pais,generos,año,calificacion});
    instancias.push(pelicula);
  }
  
  console.log(instancias[0].fichaTecnica())
  console.log(instancias[1].fichaTecnica())
  console.log(instancias[2].fichaTecnica())