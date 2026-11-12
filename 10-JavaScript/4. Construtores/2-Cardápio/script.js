function Lanche(nome, preço){
    this.nome = nome;
    this.preço = preço;

    this.descricao = function(){
        return this.nome + " - R$" + this.preço.toFixed(2).replace(".", ",");
    }
}

const cardapio = {
    xBurguer: new Lanche("X-Burger", 18.5),
    xSalada: new Lanche("X-Salada", 20),
    mistoQuente: new Lanche("Misto Quente", 9.9)
}
