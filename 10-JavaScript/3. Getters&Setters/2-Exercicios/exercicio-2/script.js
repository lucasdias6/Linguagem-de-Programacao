const conta = {
    _titular: "Orelha",
    _saldo: 500,

    get saldo(){
        return `R$ ${this._saldo} disponíveis.`;
    },

    set saldo(novoSaldo){
        if (novoSaldo < 0){
            console.log("\nTRANSAÇÃO RECUSADA: Saldo insuficiente.");
        } else {
            this._saldo += novoSaldo;
            console.log(`\nTRANSAÇÃO APROVADA`);
            console.log(`SALDO: R$${this._saldo}`);
        }
    }
}

conta.saldo = -600;
conta.saldo = 100;

