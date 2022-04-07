const helloWorld = () => {
  const hello = "Hello World";  //Variable definida de manera local dentro de la funcion helloWorld
  console.log(hello);
}

helloWorld();
console.log(hello);  //Aca muestra un error ya que la variable hello esta definida dentro de la funcion helloWorld de manera local

var scope = "Im global"; //Variable definida de forma global

const functionScope = () => {
  var scope = "Im local";  //Variable definida de forma local
  const func = () => {
  return scope;
  }
  console.log(func());
};

functionScope();  //Muestra como resultado el contenido de la variable local de la funcion functionScope
