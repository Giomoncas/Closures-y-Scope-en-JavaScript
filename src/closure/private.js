const person = () => {
    var saveName = "Name";
    return {
        getName: () => {  //Metodo que nos muestra el contenido de la variable saveName
            return saveName;
        },
        setName: (name) => { //Metodo que nos modifica el valor de la variable saveName por al valor que se incluye al invocar la funcion
            saveName = name;
        },
    };
};

newPerson = person();
console.log(newPerson.getName());  //Accede al metodo de la funcion person y muestra el valor de la variable saveName
newPerson.setName("Giovanni");  //Accede al metodo de la funcion person para cambiar el valor de la variable saveName
console.log(newPerson.getName());  //Accede al metodo de la funcion person y muestra el valor de la variable saveName modificada anteriormente