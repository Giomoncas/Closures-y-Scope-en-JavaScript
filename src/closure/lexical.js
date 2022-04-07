const buildCount = (i) => {
    let count = i;
    const displayCount = () => {  //Funcion que suma de a uno
        console.log(count++);
    };
    return displayCount;
}

const myCount = buildCount(1);
myCount();
myCount();
myCount();  //Cada vez que se invoca la funcion esta recuerda el valor que tenia antes 

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();
myOtherCount();  //Cada vez que se invoca la funcion esta recuerda el valor que tenia antes