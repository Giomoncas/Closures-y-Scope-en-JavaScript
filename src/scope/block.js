const fruits = () => {
    if(true)
    {
        var fruits1 = "apple";  //Si muestra el resultado ya que es una variable con VAR 
        let fruits2 = "banana"; 
        const fruits3 = "kiwi"; 
        console.log(fruits2); //si muestra el resultado ya que es una variable con LET y esta en el mismo bloque
        console.log(fruits3); //si muestra el resultado ya que es una variable con CONST y esta en el mismo bloque
    }
    console.log(fruits1); //Si muestra el resultado ya que es una variable con VAR       
    console.log(fruits2); //No muestra el resultado ya que es una variable con LET
    console.log(fruits3); //No muestra el resultado ya que es una variable con CONST      
       
}

fruits();

let x = 1;  //Variable LET global
{
    let x = 2;  //Variable LET local
    console.log(x);  //Muestra la variable let local
}

console.log(x); //Muestra la variable let global


var y = 1;  //Variable VAR global
{
    var y = 2;  //Variable VAR local
    console.log(y);  //Muestra la variable VAR global
}

console.log(y); //Muestra la variable VAR global

const anotherFunction = () => {
    for(let i = 0; i < 10; i++) {
        setTimeout(() => {
        console.log(i);
        },1000);
    }
}

anotherFunction();

