var hello = "Hello";  //Variable asignada en Forma Global, con VAR si se puede reasignar un valor
let world = "Hello World";  //Con let se asignan variables que no se pueden reasignar y pueden cambiar su valor despues. Se debe usar en ciclos, funciones, bloques de codigo, etc
const helloWorld = "Hello World!"; //Con const se asignan variables globales que nuncva van a cambiar de valor.

const anotherFunction = () => {  //Funcion flecha que ejecuta impresiones en consola de las variables arriba declaradas
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
    
anotherFunction();

const helloWorldFunction = () => { 
    globalVar = "Hello World Function!"; //Es mala practica usar globalVar para definir una variable local que se puede usar de forma global
    console.log(globalVar);
}

helloWorldFunction();

const anotherFunction2 = () => {
    var localVar = globalVar = "Im global"; //Es mala practica usar esta metodo de localVar = globalVar para usar una variable local como una variable global
    console.log(localVar);
}

anotherFunction2();




