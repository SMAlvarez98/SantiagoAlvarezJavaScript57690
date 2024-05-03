// Declaracion de variables.
const precio = 421741
const precio3 = precio / 3
const precio6 = precio / 6
const precio12 = precio / 12
const precio18 = precio / 18

// Se le pide al usuario mediante la funcion prompt, que ingrese su nombre.
let usuario= prompt("Bienvenido a Guitarras Alvarez. Por favor ingresa tu nombre");
alert("Bienvenido/a " + usuario);
// Se le informa al usuario el precio final del producto. A continuacion, mediante la funcion prompt, se le pide que ingrese la cantidad de cuotas.
let cuotas = parseInt (prompt('El precio final de la guitarra modelo Gandorcha SG 3000 es de 421741 ¿En cuantas cuotas le gustaría pagarlo? (0, 3, 6, 12, 18)'));
// Ciclo condicional basado en la cantidad de cuotas que el cliente desee.
while (cuotas != 0 && cuotas != 3 && cuotas != 6 && cuotas != 12 &&  cuotas != 18) {
    // Bloque de ejecucion
    prompt('Por favor, ingrese un numero de cuotas valido (0, 3, 6, 12, 18)');
    // Condicion de salaida
    cuotas = prompt ('Por favor, ingrese un numero de cuotas valido (0, 3, 6, 12, 18)')
}

function calcularPrecioFinal(){
    if (cuotas == 0) {
        alert('El precio final es de ' + precio)
    }
    if (cuotas == 3) {
        alert('El precio final es de ' + precio3.toFixed(2))
    }
    if (cuotas == 6) {
        alert('El precio final es de ' + precio6.toFixed(2))
    }
    if (cuotas == 12) {
        alert('El precio final es de ' + precio12.toFixed(2))
    }
    if (cuotas == 18) {
        alert('El precio final es de ' + precio18.toFixed(2))
    }
}
calcularPrecioFinal()






//condicion, si es verdadera, si es falsa

// un solo = es asignar == es comparacion. Es como una pregunta (tal cosa es igual a tal otra)
//=== es una comparacion estricta compara tanto el caracter como el tipo de dato
// \n = br en html



/* let nombre = prompt("ingresa tu nombre")

alert("bienvenido/a " + nombre) */

/* let numero = prompt("ingresa un numero")
let resultado=(numero > 5)
if(resultado){
    alert("es mayor a 5")
}else{
    alert("no es mayor")
} */

/* let nombre = prompt("ingresa tu nombre")
if(nombre !="" && nombre !=numer){
    alert("Ingresaste " + nombre)
}else{
    alert("dale virgo, escribi algo")
} */

/* alert("vendo algo, escucho ofertas")
let ofertaBasse = 2000
let ofertaUsuario = parseInt(prompt ("ingresa tu oferta"))
if(ofertaUsuario >= ofertaBasse){
    alert("gracias por tu compra")
}else if(ofertaUsuario < ofertaBase){
    alert("sos un rata, sali de aca")
}else if(ofertaUsuario >= 1800 && ofertaUsuario > 2000){
    alert("estirate un poco más")
}else{
    alert("no entiendo lo que me decis")
} */


/* let numero = parseInt(prompt("Ingresa un numero"))
if(numero >= 10 && numero <= 20){
    alert("El numero ingresado está entre 10 y 20. Tu numero es: " + numero)
}else{
    alert("el numero ingresado NO está entre 10 y 20. Tu numero es " + numero)
} */


/* let edad = parseInt(prompt("ingresa tu edad"))
if(edad >= 18 && edad < 65){
    alert("podes trabajar con nosotros")
}else{
    alert("no podes trabajar con nosotros")
} */

/* let numero1 = parseInt(prompt("ingresá el primer numero"))
let numero2 = parseInt(prompt("ingresá el segundo numero"))

if(numero1 %2 === 0 && numero2 % 2 === 0){
    alert("ambos numeros son pares")
}else{
    alert("uno o ambos numeros son impares")
} */

/* let edadParaVotar = parseInt(prompt("Ingresá tu edad para saber si podes votar"))
if(edadParaVotar >= 16 && edadParaVotar <18 ){
    alert("Para vos, votar es optativo")
}else if (edadParaVotar >=18 && edadParaVotar <= 69){
    alert("Es obligatorio que vayas a votar")
}else if (edadParaVotar >= 70){
    alert("Quedate en casa abuelo")
}else{
    alert("Paraaa tenes " + edadParaVotar + " años y queres votar? Nah, volvete al pelotero nene")
} */

// CLASE 3 --------------------------

// for (desde; hasta; actualizacion)



/* for(let i =1; i<5; i++){
    console.log("Hola JavaScript " + i);
}
*/

/* let numero = parseInt(prompt("ingresa un numero"))

for (let i=1; i<=10; i++){
    let resultado = numero * i
    alert("Al multiplicar " + numero + " por " + i + " nos da como resultado: " + resultado)
} */


/* for(let i = 1; i <= 10; i++) {
    if(i == 5){
        break;
    }
    alert(i);
} */

/* //Repetimos con While hasta que el usuario ingresa "ESC"
while(entrada != "ESC"){
    alert("El usuario ingresó " + entrada)
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC
    entrada = prompt("Ingresar otro dato")
} */

/* let iterar = true
while(iterar === true){
    console.log("imprimo mensaje por consola");
    iterar = confirm("Queres seguir en el bucle?")  //siempre hay que poner dos "cosos" en el while? tipo para que uno si o si sea la salida
} */

/* let contraseña = 1234
do{
    let pass = prompt("Ingresá tu contraseña")
}while(contraseña != pass) */


/* let identificar = true
let intentos = 1

do{
    let usuario = prompt("ingresá el usuario (solo tenes 3 intentos")
    if(usuario == null){
        break
    }
    if(usuario == "Pedro Ramos" && intentos <=3){
        alert("Bienvenido bichito de luz a mi corazon")
        identificar = false
    }else{
        intentos++
        if(intentos >3){
            alert("Rajá de aca, vos no sos mi bichito de luz")
        }
    }

}while(identificar) */

// CLASE 4 FUNCIONES --------------------------------------------------

/* function saludar(){
    let nombre = prompt("Ingrese su nombre")
    alert("Bienvenido " + nombre)
}

saludar() */

/* const iva = 1.21

function calcularIva(importe){ //creo una funcion con un parametro llamado importe
    if(parseFloat(importe)){ //convierto a numero
        let resultado = importe * iva //calculo iva
        alert("El importe más IVA es: " + resultado)//muestro el iva
    }
    
}


function calcularPrecioFinal(){
    let precioDelProducto = parseFloat(prompt("ingresa el precio del producto"))
    calcularIva(precioDelProducto)
    alert("El importe final es: " + resultado)
}

calcularPrecioFinal() */

// CLASE 5 OBJETOS ------------------------------------------------------

//Objetos literales. El objeto esta encerrado en una variable

/* const computadora1 = {
    //clave:valor
    marca:"Lenovo",
    procesador: "rayzen 7 5700",
    ram:32,
    
}
const computadora2 = {
    //clave:valor
    marca:"Samsung",
    procesador: "intel i 9 10t",
    ram:32,

}
const computadora3 = {
    //clave:valor
    marca:"Lenovo",
    procesador: "rayzen 7 5700",
    ram:32,

}

//No se pueden ver los objetos por alert porque solo acepta datos de tipo string

console.log(computadora1);

//Para mostrarlo por alert hay que hacer así

alert(computadora2.marca) //De esa forma solo muestra la clave solicitada del objeto

 */



// FUNCION CONSTRUCTORA

/* function Persona(nombre, edad, profesion){
    this.nombre = nombre
    this.edad = edad
    this.profesion = profesion
    this.hablar = function(){
        alert(`Hola, mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}`)
    }
}

let persona1 = new Persona("Gerardo", 30, "Mecanico de tractores")
let persona2 = new Persona("Lara", 24, "Docente")
let persona3 = new Persona("Ataulfo", 32, "Tanatoplactor")

persona1.hablar()
persona2.hablar()
persona3.hablar()

//alert(persona1.nombre) */

// CLASES

/* class Coche{
    constructor(marca, color){
        this.marca = marca
        this.color = color
    }
}

let ferrari = new Coche("Ferrari", "Rojo") */

// FOR IN

/* const persona = {
    nombre: "Javier"
    edad: 79,
    profesion: "Desarrollador"
}
for(const x in persona){
    console.log(persona.x);
} */

// CLASE 6 ARRAYS ------------------------------------------------
//Los arrays van con []

/* let lista = ["harina", "huevos", "lechuga",123,true]
//indices       0          1         2      3   4

alert(lista[2]) */

/* let frutas = ["manzana", "pera", "banana", "sandia"]
//               0         1         2         3

frutas[2]="kiwi" */

/* let lista1 = [1,2,3]
let lista2 = [4,5,6]
let respuesta = lista1[1]+lista2[2] */

/* const numeros = [1,2,3,4,5,6]
for(let i=0; i < 5; i++){
    console.log(numeros[i]);
} */



/* let frutas = ["manzana", "pera", "banana", "sandia",54,54,354,153,435,453,4,54,531,534,54,35,43,4,54,84,84,35,432,153,1,864,87,54,5,4,87,654,35,165,74,87,564,534,5]

console.log(frutas); */

/* for(let i =0; i<frutas.length;i++){
    console.log(frutas[i]);
} */

/* let carritoDeCompras = ["manzana", "pera", "banana", "sandia"]

console.log(carritoDeCompras);
//carritoDeCompras.push //agrega uno nuevo

carritoDeCompras.pop() //elimina el ultimo

carritoDeCompras.shift()// saca el primero
carritoDeCompras.unshift */

//splice permite eliminar elementos de un array en cualquier posicion

/* const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
nombres.splice(1, 2) //desde la posicion 1, elimina 2 para adelante. Pedro el 1 Miguel el 2

console.log(nombres);
//["Rita", "Ana", "Vanesa"] */

//Join: permite generar un string con todos los elementos del array --------

/* const nombres = ["Luis", "Ana", "Julia", "Juan"]

console.log(nombres.join(", "));
//Luis, Ana, Julia, Juan
console.log(nombres.join("*"));
//Luis*Ana*Julia*Juan */

//Concat: concatenar arrays ------------------

/* const perros = ["Puppy", "Ronnie"]
const gatos = ["Mishi", "Garfield", "Zuri"]
const mascotas = perros.concat(gatos)
console.log(mascotas);
//["Puppy", "Ronnie", "Mishi", "Garfield", "Zuri"] */



//Slice: devuelve una copia de una parte del array dentro de un nuevo array empezando por el inicio hasta el fin

/* const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
const masculinos = nombres.slice(1,3) //crea una copia desde la posicion 1 hasta la 3 SIN INCLUIR LA POSICION 3
//masculinos contiene ["Pedro", "Miguel"] */



//IndexOf: Nos permite obtener el indice de un elemento del array. Recibe por parametro el elemento que queremos buscar y en caso de existir nos dice en que indice está. Si el elemento no existe, nos tira un elemento negativo

/* const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
console.log(nombres.indexOf("Rita"));// 0
console.log(nombres.indexOf("Ana"));//  3
console.log(nombres.indexOf("julieta"));// -1 */

//Includes: Vas al array y te fijas si se incluye el parametro que le mandamos

/* const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
console.log(nombres.includes("Rita"));     // ture
console.log(nombres.includes("Miguel"));   // true
console.log(nombres.includes("Julieta"));  // false */

//reverse: Invierte el orden del array-------------------------------------

/* const nombres = ["Rita", "Pedro", "Miguel", "Ana", "Vanesa"]
nombres.reverse()
console.log(nombres);
// ['Vanesa', 'Ana', 'Miguel', 'Pedro', 'Rita'] */





