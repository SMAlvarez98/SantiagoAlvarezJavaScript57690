

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

