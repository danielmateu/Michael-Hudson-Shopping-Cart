'use strict'

var carrito = [{
    id:1,
    name:"Cepillo",
    precio:4.50,
    qty:5},
];
//var item = function(){}
class Item {
    constructor(name, precio, qty) {
        this.name = name;
        this.precio = precio;
        this.qty = qty;
    }
}

var cepillo = new Item("Cepillo", 1.99,1); //{name:'Cepillo',price:1.99,qty:1}
//id,nombre, precio,cantidad

carrito.push(new Item("Manzana",2.13,3));


console.log(carrito);