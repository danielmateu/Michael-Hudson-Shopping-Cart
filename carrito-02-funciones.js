'use strict'

//SCOPE - determina donde una variable es visible

//var global = "Hello"; //Podemos acceder a la variable en cualquier momento
let global = 10; //No está disponible en la función

function mifuncion(){
    var global = "Hello"; //Accederemos a la variable tan solo llamando a la funcion concreta
    console.log("Global: " + global);
}

//var global = 10;

mifuncion();
console.log("Global: " + global);
