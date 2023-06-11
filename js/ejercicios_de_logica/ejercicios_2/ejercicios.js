// Programa que pida dos números y que nos diga cual es mayor, menor y si son iguales; si los valores indicados no son números o son menores o igual a cero nos lo vuelva a pedir

const mayorMenorIgual = (value1, value2) => {
  while (isNaN(value1) || value1 <= 0) {
    value1 = prompt("Ingresa un número.");
  }

  while (isNaN(value2) || value2 <= 0) {
    value2 = prompt("Ingresa otro número.");
  }

  if (value1 > value2) {
    alert(`${value1} es mayor a ${value2}`);
  } else if (value1 < value2) {
    alert(`${value1} es menor a ${value2}`);
  } else {
    alert(`${value1} es igual a ${value2}`);
  }
};

//mayorMenorIgual()

// Utilizando un bucle, mostrar la suma y la media de los números introducidos hasta introducir un número negativo y ahi mostrar el resultado.

const sumaMedia = (values) => {
  let arr = [];

  while (Math.sign(values) !== -1) {
    values = +prompt("Introduce un número.");
    arr.push(values);
  }

  let total = arr.filter((el) => Math.sign(el) === 1);

  let total2 = total.reduce((pv, cv) => {
    return pv + cv;
  });

  console.info(
    `Numeros introducidos: ${total}\nmedia: ${total2 / total.length}`
  );
};

//sumaMedia();

// Hacer un programa que muestre todos los números entre dos números introducidos por el usuario.

const rango = (value1, value2) => {
  while (isNaN(value1) || value1 <= 0) {
    value1 = +prompt("Ingresa un número.");
  }

  while (isNaN(value2) || value2 <= 0) {
    value2 = +prompt("Ingresa otro número.");
  }

  if (value2 < value1 || value2 === value1)
    alert("El segundo valor debe ser mayor al primer valor.");

  while (value1 < value2) {
    value1++;
    console.info(value1);
  }
};

//rango()

// Mostrar todos los números impares que hay entre dos números introducidos por el usuario.

const mostrar = (value1, value2) => {
  let impares = [[], []];

  while (isNaN(value1)) {
    value1 = prompt("Ingresa un número.");
  }

  while (isNaN(value2)) {
    value2 = prompt("Ingresa otro número.");
  }

  for (const item of value1) {
    if (item % 2 == 1) {
      impares[0].push(item);
    }
  }
  for (const item of value2) {
    if (item % 2 == 1) {
      impares[1].push(item);
    }
  }
  return console.info(
    `Números impares del primer valor introducido: ${impares[0]}\nNúmeros impares del segundo valor introducido: ${impares[1]}`
  );
};

//mostrar()

// Programa que muestre todos los números divisores de un número que el usuario introduce.

const divisores = (value) => {
  let arr = [];

  while (isNaN(value)) {
    value = prompt("Ingresa un número.");
  }

  for (let i = 1; i < value; i++) {
    if (value % i == 0 || value % i == value) {
      arr.push(i);
    }
  }
  return alert(`Números divisores del número ${value}: ${arr}`);
};

//divisores()

// Programa que nos diga si un número es par o impar; Usando ventana Prompt; Si no es valido que pida el número denuevo.

const parImpar = (value) => {
  while (isNaN(value)) {
    value = prompt("Ingresa un número.");
  }

  if (value % 2 == 0) {
    alert(`El número ${value} es par.`);
  } else {
    alert(`El número ${value} es impar.`);
  }
};

// parImpar();

// Tabla de multiplicar de un número introducido por pantalla.

const tabla = (num) => {
  while(isNaN(num)){
    num = prompt("Ingresa un número.")
  }

  console.info(`Tabla del número ${num}:`)
  for (let i = 1; i < 11; i++) {
    console.log(`x${i} ${num * i}`)
  }
}

// tabla()

// Calculadora: Pida dos números por pantalla; Si el número introducido esta mal que vuelva a pedir; En el cuerpo de la pagina, en una alerta y por la consola el resultado de sumar, restar, multiplicar y dividir esas dos cifras; refactorizar el codigo para encapsularlo todo en funciones reutilizables.



/*Programa que pida 6 números por pantalla y los introduzca en un array
Mostrar el array entero (todos sus elementos) en el cuerpo de la pagina y en la consola (usando funciones)
Ordenar el array y mostrarlo
Invertir el orden del array y mostrarlo
Mostrar cuantos elementos tiene el array*/

// Busqueda de un valor introducido por el usuario que nos diga si se encuentra en el array o no.
