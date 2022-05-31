//Escribe un programa que escriba en la pantalla un texto que diga “Hello World”.
let helloWorld= document.getElementById ('hello');
console.log('Hello World');
helloWorld.innerHTML=('Hello World');


/* linea 2: Correlaciono mi variable de JS con un elemento de html
linea 3: verifico que sale en la consola. (no me preocupo por como imprimirlo en navegador. Si sale en consola el JS es correcto.)
linea 4: Le doy contenido a mi variable de JS que al estar conectada con el html me lo trasladara al html*/

/*Escribe un programa que escriba en la pantalla el resultado de sumar 3 + 5.*/
console.log('jardin de infantes');
let adding = document.getElementById ('adding')
let num1=3
let num2=5
adding.innerHTML = ('La suma de 3 + 5 es ' + (num1+num2))


/*Escribe un programa que pida el nombre del usuario con un prompt o utilizando un input y escriba un texto que diga “Hola nombreUsuario"*/

let nombreDeUsuario = document.getElementById ('userName')
console.log (nombreDeUsuario)

let userName = prompt ('Ingrese su nombre de usuario')

nombreDeUsuario.innerHTML = ('Hola ' + userName)

/*Escribe un programa que pida un número, pida otro número y escriba el resultado de sumar estos dos números. parseInt parseFloat */
