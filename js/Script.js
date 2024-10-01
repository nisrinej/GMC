class Product{
    constructor (id, name, price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
product1 = new Product(1, 'basket', 100 )

class ShoppingCartItem{
    constructor(product, quantity){
        this.product = product
        this.quantity = quantity
    }

    getTotalPrice(){
        return this.product.price * this.quantity
    }
}

class ShoppingCart{
    constructor( items = []){
        this.items = items
    }

    addItem(item){
        if(existantElement = this.items.find(i=> i.product.id === item.product.id)){
            existantElement.quantity += item.quantity
        }
        else{
            this.items.push(item)
        }
    }

    removeItem(product){
        this.items = this.items.filter(i=> i.product.id != product.id)
    }      

    getTotalItem(){
        return this.items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.quantity,
            0,
        )
    }

    getTotalPrice(){
        return this.items.reduce(
            (accumulator, currentValue) => accumulator + currentValue.getTotalPrice(),
            0,
        )
    }
}
