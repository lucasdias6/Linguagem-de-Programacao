function Lanche(nome, preço) {
    this.nome = nome;
    this.preço = preço;


    this.descrição = function () {
        const precoFormatado = this.preço.toFixed(2).replace(".",",")
        return `${this.nome} - R$ ${precoFormatado}`
    }
       
}

const cardapio =  [new Lanche("X-Burguer", 18.50),
new Lanche("X-Salada", 20.00),
new Lanche("Sanduíche", 9.90),
];

for (const lanche of cardapio) {
    console.log(lanche.descrição());
}
console.log(cardapio[1].preço)
console.log(cardapio.lenght)