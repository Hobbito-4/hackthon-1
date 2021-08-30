//ejercicio 1 //
let admin, nombre; // Puedes declarar dos variables a la vez.
nombre = "John";
admin = name;
console.log(admin); // usando alert me sale error
// ejercicio 2
//Crea una variable con el nombre de nuestro planeta. ¿Cómo nombraría una variable así?
let ourPlanetName = "Tierra";
//Cree una variable para almacenar el nombre de un visitante actual de un sitio web.¿Cómo nombrarías esa variable?
let UserName = "Juan"
//ejercicio 3
const birthday = '18.04.1982';
const age = someCode(birthday)  
//¿Sería correcto usar mayúsculas para birthday? para age? ¿O incluso para ambos? 
//birthday si se puede escribir en mayuscula
// age es constante por eso debe mantener en minuscula

//ejercicio 4
let name = "Ilya";
console.log( `hello ${1}` ); // ? hello  1 
console.log( `hello ${"name"}` ); // ? hello name
console.log( `hello ${name}` ); // ? hello ilya
// con alert da error
//ejercicio 5
let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;


//ejercicio 6
function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
//ejercicio 7
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); 
//ejercicio 8
let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
  };
  
  multiplyNumeric(menu);
  
  // Después de la llamada
  menu = {
    width: 400,
    height: 600,
    title: "Mi menú"
  };
  function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
  }