const EventEmitter = require('node:events');

class CoffeeShop extends EventEmitter {
    constructor(){
        super();
        this.orderNumber = 0;
    }

    order(size, name){
        this.orderNumber++;
        this.emit('order', size, name);
    }

    displayOrderNumber(){
        console.log(`Order number: ${this.orderNumber}`);
    }
}

module.exports = CoffeeShop; 