import './style.css';

//! 1. Intercambio de Valores: Declara dos variables (a, b) y utiliza una variable auxiliar (temp) para intercambiar sus valores.

const intercambioDeValores = () => {
  let a = prompt("Introduce el valor de a:");
  let b = prompt("Introduce el valor de b:");
  
  let temp = a;
  a = b;
  b = temp;
  
  alert(`Después del intercambio: a = ${a}, b = ${b}`);
  console.log(`Después del intercambio: a = ${a}, b = ${b}`);
};

intercambioDeValores();




//!  2. Función que reciba 2 números como entrada y determine cuál es el mayor. 

const determinarMayor = () => {
  const num1 = parseFloat(prompt("Introduce el primer número:"));
  const num2 = parseFloat(prompt("Introduce el segundo número:"));

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, introduce valores numéricos válidos.");
    console.log("Por favor, introduce valores numéricos válidos.");
    return;
  }

  if (num1 > num2) {
    alert(`${num1} es mayor que ${num2}`);
    console.log(`${num1} es mayor que ${num2}`);
  } else if (num2 > num1) {
    alert(`${num2} es mayor que ${num1}`);
    console.log(`${num2} es mayor que ${num1}`);
  } else {
    alert("Ambos números son iguales.");
    console.log("Ambos números son iguales.");
  }
};

determinarMayor();



//! 3. Función que reciba un número y retorne si es un número dado es par o impar. 

const determinarParidad = () => {
  const numero = parseInt(prompt("Introduce un número:"));

  if (isNaN(numero)) {
    alert("Por favor, introduce un valor numérico válido.");
    console.log("Por favor, introduce un valor numérico válido.");
    return;
  }

  if (numero % 2 === 0) {
    alert(`${numero} es par.`);
    console.log(`${numero} es par.`);
  } else {
    alert(`${numero} es impar.`);
    console.log(`${numero} es impar.`);
  }
};

determinarParidad();




//! 4. Funcion que calcula el precio final de un producto después de aplicar un descuento basado en el precio original y el porcentaje de descuento. 

const calcularPrecioFinal = () => {
  const precioOriginal = parseFloat(prompt("Introduce el precio original del producto:"));
  const porcentajeDescuento = parseFloat(prompt("Introduce el porcentaje de descuento:"));

  if (isNaN(precioOriginal) || isNaN(porcentajeDescuento)) {
    alert("Por favor, introduce valores numéricos válidos.");
    console.log("Por favor, introduce valores numéricos válidos.");
    return;
  }

  const descuento = (precioOriginal * porcentajeDescuento) / 100;
  const precioFinal = precioOriginal - descuento;

  alert(`El precio final después de aplicar el descuento es: $${precioFinal.toFixed(2)}`);
  console.log(`El precio final después de aplicar el descuento es: $${precioFinal.toFixed(2)}`);
};

calcularPrecioFinal();





//! 5. Función para Calcular Área: Crea una función que reciba el radio de un círculo y devuelva su área.

const calcularAreaCirculo = () => {
  const radio = parseFloat(prompt("Introduce el radio del círculo:"));

  if (isNaN(radio)) {
    alert("Por favor, introduce un valor numérico válido.");
    console.log("Por favor, introduce un valor numérico válido.");
    return;
  }

  const area = Math.PI * Math.pow(radio, 2);

  alert(`El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`);
  console.log(`El área del círculo es: ${area.toFixed(2)} unidades cuadradas.`);
};

calcularAreaCirculo();




//! 6. Función para Convertir Temperatura: Crea una función que convierta de Celsius a Fahrenheit. 

const convertirCelsiusAFahrenheit = () => {
  const celsius = parseFloat(prompt("Introduce la temperatura en grados Celsius:"));

  if (isNaN(celsius)) {
    alert("Por favor, introduce un valor numérico válido.");
    console.log("Por favor, introduce un valor numérico válido.");
    return;
  }

  const fahrenheit = (celsius * 9/5) + 32;

  alert(`${celsius}° Celsius son equivalentes a ${fahrenheit.toFixed(2)}° Fahrenheit.`);
  console.log(`${celsius}° Celsius son equivalentes a ${fahrenheit.toFixed(2)}° Fahrenheit.`);
};

convertirCelsiusAFahrenheit();





//! 7. Bucle for: Utiliza un bucle for para imprimir los números del 1 al 10. 

const imprimirNumeros = () => {
  let resultado = "Números del 1 al 10:\n";
  for (let i = 1; i <= 10; i++) {
    resultado += i + "\n";
  }
  alert(resultado);
  console.log("Números del 1 al 10:\n" + resultado);
};

imprimirNumeros();



//! 8. Bucle while: Utiliza un bucle while para pedir al usuario números hasta que ingrese un número negativo.

const pedirNumerosHastaNegativo = () => {
  let numero;
  do {
    numero = parseFloat(prompt("Introduce un número (negativo para terminar):"));
    if (isNaN(numero)) {
      alert("Por favor, introduce un valor numérico válido.");
      console.log("Por favor, introduce un valor numérico válido.");
    } else if (numero >= 0) {
      alert(`Has introducido: ${numero}`);
      console.log(`Has introducido: ${numero}`);
    }
  } while (numero >= 0);

  alert("Has terminado de introducir números.");
  console.log("Has terminado de introducir números.");
};

pedirNumerosHastaNegativo();


//! 9. Tabla de Multiplicar: Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10.

const mostrarTablaDeMultiplicar = () => {
  const numero = parseInt(prompt("Introduce un número para mostrar su tabla de multiplicar:"));

  if (isNaN(numero)) {
    alert("Por favor, introduce un valor numérico válido.");
    console.log("Por favor, introduce un valor numérico válido.");
    return;
  }

  let tabla = `Tabla de multiplicar del ${numero}:\n`;
  for (let i = 1; i <= 10; i++) {
    tabla += `${numero} x ${i} = ${numero * i}\n`;
  }

  alert(tabla);
  console.log(tabla);
};

mostrarTablaDeMultiplicar();


//! 10. Suma de Números Pares: Calcula la suma de los números pares del 1 al 100.

const sumarNumerosPares = () => {
  let suma = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  alert(`La suma de los números pares del 1 al 100 es: ${suma}`);
  console.log(`La suma de los números pares del 1 al 100 es: ${suma}`);
};

sumarNumerosPares();


//! 11. Objeto Persona: Crea un objeto persona con propiedades como nombre, edad, ciudad y un método presentarse() que muestre un mensaje de presentación.

const crearPersona = () => {
  const nombre = prompt("Introduce tu nombre:");
  const edad = parseInt(prompt("Introduce tu edad:"));
  const ciudad = prompt("Introduce tu ciudad:");

  const persona = {
    nombre,
    edad,
    ciudad,
    presentarse() {
      const mensaje = `Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y vivo en ${this.ciudad}.`;
      alert(mensaje);
      console.log(mensaje);
    }
  };

  persona.presentarse();
};

crearPersona();


//! 12. Array de Objetos: Crea un array de objetos persona y utiliza un bucle para mostrar la información de cada persona.

const mostrarInformacionPersonas = () => {
  const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Cordoba" },
    { nombre: "Ana", edad: 30, ciudad: "Santa Fe" },
    { nombre: "Luis", edad: 35, ciudad: "Jujuy" }
  ];

  let informacion = "Información de las personas:\n";
  personas.forEach(persona => {
    const info = `Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`;
    informacion += info + "\n";
    console.log(info);
  });

  alert(informacion);
};

mostrarInformacionPersonas();


//! 13. Función para Calcular Promedio: Crea una función que reciba un array de números y devuelva su promedio.



const calcularPromedio = () => {
  const numeros = prompt("Introduce una serie de números separados por comas:").split(",").map(Number);

  if (numeros.some(isNaN)) {
    alert("Por favor, introduce una serie de valores numéricos válidos.");
    console.log("Por favor, introduce una serie de valores numéricos válidos.");
    return;
  }

  const suma = numeros.reduce((total, num) => total + num, 0);
  const promedio = suma / numeros.length;

  alert(`El promedio de los números introducidos es: ${promedio.toFixed(2)}`);
  console.log(`El promedio de los números introducidos es: ${promedio.toFixed(2)}`);
};

calcularPromedio();


