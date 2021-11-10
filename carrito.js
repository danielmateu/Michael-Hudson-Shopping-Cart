'use strict'

var carrito = [ ];

var item ={ 
id:1,
nombre:'Manzana',
precio:1.22,
qty:3,
dsc:10};

carrito.push(item);

console.log(carrito);
console.log(carrito[0]);
console.log(carrito[0].nombre);
console.log(carrito[0].precio);

console.log(carrito[0].preu); //undefined.name