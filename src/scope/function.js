const fruits = () => {
    var fruit = "apple";
    console.log(fruit);
}

fruits();

const anotherFunction = () => {
    var x = 1;
    var x = 2;  //Var si reasigna el valor de la variable en el scope
    let y = 1;
    let y = 2;  //Variables declaradas con let o const no se pueden volver a reasignar
    console.log(x);
    console.log(y);
}

anotherFunction();