//Importando item.js
//1°
import createItem from "./services/item.js";
//Importando todos cart.js
import * as cartService from "./services/cart.js";


//4° Array vai ser iniciado sem valor - depois vai ser utilizado método push() para adicionar item
const myCart = [];

//lista de desejo
const myWhishList = [];

//Bem-vindo ao seu carrinho Shopee!
console.log("Welcome to the your Shopee Cart!");

//2° Criando uma const e adicionar os elementos , nome, preço, quantidade onde vai ser recebido pela function createItem item.js
// para realizar subtotal exemplo item1 20.99 * 1 depois item2 39.99 * 3 
const item1 = await createItem("Hotwheels Ferrari", 20.99, 1);
const item2 = await createItem("Hotwheels Lamborghini", 39.99, 3);

//Adicionando item no carrinho
await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);

//Remover item
await cartService.removeItem(myCart, item2);





//adicionando na minha lista de desejo
await cartService.addItem(myWhishList, item2);




//mostrando itens do carrinho
await cartService.displaycart(myCart);

//mostrando minha lista de desejo
 await cartService.displayMyWhishList(myWhishList);



//3° imprimindo o subtotal de cada item 
console.log("\n 🐱‍🏍 Subtotal de cada item");
console.log(item1.subtotal());
console.log(item2.subtotal());

//excluindo item
// await cartService.deleteItem(myCart, item1.name);
// await cartService.deleteItem(myCart, item2.name);



await cartService.calculateTotal(myCart);//pegando a função que esta dentro cart.js

