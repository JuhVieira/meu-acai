
export class Order {
    constructor() {
    }
  //Getter
    get data() {
        return JSON.parse(localStorage.getItem('order')) 
    }  
  
    setOrder(order) {  
        this.order = order;
        return localStorage.setItem('order', JSON.stringify(order));
    }

    finishOrder() {  
        this.order = {};
        return localStorage.removeItem('order');
    }
}