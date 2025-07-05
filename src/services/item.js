/*CASOS DE USO DOS ITENS
-> Criar item com subtotal certo

*/

//-> Criar item com subtotal certo
async function createItem(name, price, quantity) {

    //retornar um objeto
    return {
        name,
        price,
        quantity,

        //Criando função (método)
        subtotal: () => price * quantity,
    };

}

//Exportando item padrão
export default createItem;