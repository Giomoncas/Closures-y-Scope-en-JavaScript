var a = "Hello";
function hello()
{
    let b = "Hello World";
    const c = "Hello World!";
    if(true)
    {
        let d = "Hello World!!"; 
        debugger    
    }
}

hello();

const moneyBox = (coins) => {
    debugger  
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
}

moneyBox(5);
moneyBox(10);

// Estructura Closure

const moneyBoxClosure = (coins) => { 
    debugger 
    var saveCoins = 0;
    const countCoins = (coins) => {  
        debugger
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

let myMoneyBox = moneyBoxClosure();
myMoneyBox(5);
myMoneyBox(10);
myMoneyBox(20);
