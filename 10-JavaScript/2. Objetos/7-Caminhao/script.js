const caminhao = {
    capacidadeTanque: 200,
    combustivelAtual: 50,

    abastecer(litros){
        if(this.combustivelAtual + litros > this.capacidadeTanque){
            return `ABASTECIMENTO NEGADO: O tanque vai transbordar! Cabem apenas ${this.capacidadeTanque - this.combustivelAtual} litros.`
        } else {
            this.combustivelAtual += litros
            return `SUCESSO: Tanque abastecido. Combustivel atual: ${this.combustivelAtual} litros.`
        }
    },

    viajar(km){
        litrosNecessarios = km * 2
        if(litrosNecessarios > this.combustivelAtual){
            return `VIAGEM CANCELADA: Combustivel insuficiente para ${km} km.`
        } else {
            this.combustivelAtual -= litrosNecessarios
            return `SUCESSO: Viagem de ${km} km concluida. Combustível restante: ${this.combustivelAtual} litros`
        }
    }
}

console.log(caminhao.abastecer(200))
console.log(caminhao.viajar(100))