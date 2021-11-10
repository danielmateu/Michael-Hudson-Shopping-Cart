'use strict'



function mifuncion (mensaje, qty){
    for (let i=0;i<qty;i++){
        console.log(mensaje);
    }

}

mifuncion('Hello World', 1);
mifuncion('Que dius tu?', 5);
mifuncion('AAA', 3);
mifuncion('BBB', 2);

function square(num){
    return num * num;
    
}

console.log(square(3));

