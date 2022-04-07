const moneyBox = (coins) => {  //Funcion que trata de ser una alcancia pero no guarda lo que se le va guardando cada vez que se llama
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

// Estructura Closure

const moneyBoxClosure = (coins) => {  //Funcion que trata de ser una alcancia pero no guarda lo que se le va guardando cada vez que se llama
    var saveCoins = 0;
    const countCoins = (coins) => {  //Combinar una funcion y el ámbito donde se declara
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBoxClosure();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);
