class Product 

{
    constructor(item, amount, size){ 

        let stock = this; 

        stock.Product = item; 

        stock.voorraad = parseFloat(amount); 

        stock.size = size;
    } 

    showStock(){
        console.log(` kleur = ${this.Product} , size = ${this.size}`);
    }
         
        verhoogStockMet(count){ 

        let raise = this; 

            raise.count = parseFloat(count); 

            console.log((this.stock += raise.count)); 

        } 

          
} 

let Product1 = new Product("T-shirt classic rood", 1, "Small"); 
let Product2 = new Product("T-shirt classic wit", 2, "Medium"); 
let Product3 = new Product("T-shirt classic blauw", 3, ";Large"); 

Product2.stock;

Product3.showStock();
