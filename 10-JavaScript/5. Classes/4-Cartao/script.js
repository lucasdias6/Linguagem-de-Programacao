class CartaoTransporte {
    #saldo = 0;

    constructor(dono, tarifa){
        this.dono = dono;
        this.tarifa = tarifa;
    }

    get saldo(){
        return this.#saldo;
    }

    get extrato(){
        return `${this.dono}: R$${this.#saldo.toFixed(2)}`;
    }

    recarregar(valor){
        if (valor <= 0){
            console.log(`Recarga inválida: ${valor.toFixed(2)}\nInforme um valor maior que zero.`);
        } else {
            this.#saldo += valor;
            console.log(`Recarga de R$${valor.toFixed(2)}\n${this.extrato}`);
        }
    }

    passar(){
        if(this.#saldo < this.tarifa){
            console.log(`Saldo insuficiente para ${this.dono}\nFaltam ${this.#saldo - this.tarifa}.`);
        } else {
            this.#saldo -= this.tarifa;
            console.log(`Catraca liberada\n${this.extrato}`);
        }
    }
}

const ana = new CartaoTransporte("Ana", 5.5);

console.log(ana.saldo); // imprie literalmente o saldo dela
ana.passar(); // imprime saldo insuficiente
ana.recarregar(10); // faz uma recarga de R$10,00
ana.passar(); // imprime a catraca e desconta R$5,50 do saldo dela
ana.recarregar(-5); // imprime a mensagem de recarga inválida
ana.saldo = 1000; // erro silencioso, nao faz nada nem imprime nada no terminal
console.log(ana.saldo); // o terminal retorna uma mensagem de erro porque "saldo" é uma propriedade privada
ana.tarifa = 0.01; // altera o valor da tarifa pois "tarifa" não é uma propriedade privada
ana.passar(); // imprime a catraca e desconta R$0,01 do saldo dela
console.log(ana.extrato); // retorna o extrato de "ana"

// console.log(ana.#saldo)

// resposta: "ana.saldo = 1000" tenta alterar o valor de uma propriedade 
// inexistente. por isso temos um erro silencioso. "ana.tarifa = 0.01" altera
// o valor da propriedade "tarifa" do cartão de "ana".

 