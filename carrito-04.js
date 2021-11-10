'use strict'

//FUNCIONES
var carrito = [{
    id:1,
    name:"Cepillo",
    price:4.50,
    qty:5},
];

//var item = function(){}
class Item {
    constructor(name, price, qty) {
        this.name = name;
        this.price = price;
        this.qty = qty;
    }
};

//Añadiremos los items al carrito
function addItemToCarrito(name,price,qty){

   for(let i in carrito){ //Hacemos un for in para comprobar si hay un item con el mísmo nombre
     if(carrito[i].name === name)  { //Si hay un item con el mísmo nombre, añadimos 1 a qty
         carrito[i].qty += qty;
        return; 
     }
   }

    let item = new Item(name, price,qty);//Si no lo hubiera, creamos un nuevo item y lo añadimos al carrito
    carrito.push(item);
    saveCart();
}
/*
addItemToCarrito('Cepillo', 4.50,4)
addItemToCarrito('Manzana', 1.22, 1);
addItemToCarrito('Banana', 1.72, 3);
addItemToCarrito('Pera', 1.72, 1);
addItemToCarrito('Cepillo', 4.50,4)
addItemToCarrito('Coche', 30.00, 1);
addItemToCarrito('Pera', 1.72, 3);
addItemToCarrito('Pera', 1.72, 1); //SI tenemos que añadir un item con el mismo nombre, nos creará un nuevo item, debemos crregir este "ERROR"

*/


/*
console.log(carrito);
console.log(carrito[0]);
console.log(carrito[0].name);

*/

//Eliminar Item del carrito

function removeItemFromCart(name){  //Solo eliminamos uno
    for(let i in carrito){
        if(carrito[i].name === name){ //
            carrito[i].qty --; 
            if(carrito[i].qty === 0){
                //carrito.splice(i,1); //Eliminamos el item del array si la cantidad es = 0
                removeItemFromCartAll(name);
            }
            break;
        }
    }
    saveCart()
}
/*
console.log(carrito[0].qty);
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
removeItemFromCart('Cepillo');
console.log(carrito);
*/

//Eliminamos todos los items del nombre name

function removeItemFromCartAll(name){ //Eliminamos todos los items name
    for(let i in carrito){
        if(carrito[i].name === name){
            carrito.splice(i,1);
            break;
        }
    }
    saveCart();
}

console.log(carrito.length);
console.log(carrito);
removeItemFromCartAll('Coche');

//Eliminamos todos los items del carrito

function clearCart(){
    carrito = [];
    saveCart(); 
}

//clearCart(carrito);
//console.log(carrito);

//Funcion que nos dice la cantidad de items name que tenemos en el carrito

function countCart(){   //return total count
    var cuentaTotal = 0;
    for(let i in carrito){
        cuentaTotal += carrito[i].qty;

    }
    return cuentaTotal;
}

console.log(countCart());

//Funcion que nos diga todo lo que tenemos en el carrito

function totalCart(){   //return total cost
    var totalCost = 0;
    for(let i in carrito){
        totalCost += carrito[i].price;
    }
    return totalCost;
}

console.log(totalCart())

//Mostrar el carrito en la pagina

function listCart(){   //Array of Item
    
    var cartCopy= []
        for (let i in carrito){
            var item = carrito[i];
            var itemCopy = {};
            for(let p in item){ //p = propiedad
                itemCopy[p] = item[p];
            }
            cartCopy.push(itemCopy);
        }
    return cartCopy;
    //return carrito.slice();
} 

/*
var newArray = listCart();
newArray[0].name='Iron Cobra';
console.log(newArray);

*/
/*
var a =['A','B','C'];
var b = a.slice();
b.push('D');
*/
/*
var a ={edad:22,nombre:'Dani'}
var b = a
b.nombre='Silvia';
console.log(a);
console.log(b)
*/

//Guardar el carrito - local storage

function saveCart(){ //Guarda la info del carrito en localStorage
    localStorage.setItem('shoppingCart', JSON.stringify(carrito));//localStorage.setItem('nombre',valor);
}

function loadCart(){//Carga la info del carrito del localStorage
    carrito =JSON.parse(localStorage.getItem('shoppingCart')) ;
}

loadCart();

var array = listCart();
console.log(array);