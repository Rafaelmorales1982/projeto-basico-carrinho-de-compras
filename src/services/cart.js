//Assinaturas dos métodos
//Quais ações meu carrinho pode fazer?
//->adicionar item no carrinho
//->deletar item  do carrinho
//->remover um item
//->calcular o total


//caso de uso
// -> adicionar item no carrinho
async function addItem(userCart, item) {
    //adicionando item no array que esta dentro index.js
    userCart.push(item);

}


//deletar(excluir) item do carrinho usuário do carrinho e nome do item
async function deleteItem(userCart, name) {
const index = userCart.findIndex((item) => item.name === name);

if(index !== -1){
    userCart.splice(index, 1);//deletando item encontrado
}

}



//remover um item botão para diminuir quantidade do item
async function removeItem(userCart, item) {
    //encontrar o indice do item
 const indexFound = userCart.findIndex((p) => p.name === item.name)

 // Caso não encontre o item
 if(indexFound == -1){
    console.log("Item não encontrado");
    return;
 }

 //item maior > 1 subtrair um item, item = 1 deletar o item
  if(userCart[indexFound].quantity > 1 ) {
    userCart[indexFound].quantity -= 1;
    return;
  }

  //caso item = 1 deletar o item
  if(userCart[indexFound].quantity == 1 ) {
    userCart.splice(indexFound, 1);
    return;
  }
}

//calcular o total do carrinho

async function calculateTotal(userCart) {
    console.log("\n 😎 Shopee Cart Total IS: ");
    //Pegar todos os subtotais do carrinho que esta dentro item.js e somar 
   const result = userCart.reduce((total, item) => total + item.subtotal(), 0);

   console.log(result);
}

//Exibir que esta dentro do carrinho
async function displaycart(userCart){
 console.log("\n Shopee Cart List: ");
 userCart.forEach((item, index) => {
    
    console.log(`${index + 1}. ${item.name} - R$ ${item.price}  | ${item.quantity} | Subtotal ${item.subtotal()}`);

 });



}
//Lista de desejo
//mostrar na tela os inomes dos itens lista desejo

async function displayMyWhishList(userCart) {
console.log("\n 🎁 Minha lista de desejo (Produtos) Shopee")

userCart.forEach((item, index ) => {
    console.log(`${index + 1} Produto: ${item.name}`);
});

}





// exportando todas as funções
export {
    addItem,
    deleteItem,
    removeItem,
    calculateTotal,
    displaycart,
    displayMyWhishList
}