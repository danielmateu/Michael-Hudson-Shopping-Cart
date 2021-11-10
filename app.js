const objetos = [ ];

    const obj = {name:'Zapato',price:9.99, qty:3 };
   /*
    console.log(obj);
    console.log(obj.name);
    console.log(obj.price);
    console.log(obj.qty);
    console.log(obj.price * obj.qty);
    */
    
    function addItem(name,price){
        const item = {
            name:name,
            price:price,
            qty:1}
        objetos.push(item);
    }

    function showItems(){
        //console.log(objetos);
        console.log(`Tienes ${objetos.length} objetos`)
    }

    addItem('Manzana',0.99);
    addItem('Naranja',1.99);
    addItem('Pera',0.59);
    addItem('Mandarina',1.59);

    showItems();