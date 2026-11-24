function Heroi(nome) {
    this.nome = nome;
    this.vida = 100;


    this.mostrarStatus = function () {
        console.log(`${this.nome} está com ${this.vida}`)
    }

    this.levarDano = function (dano) {
        this.vida = this.vida - dano
        if (this.vida <= 0) {
            this.vida = 0
            console.log(`${this.nome} foi derrotado!`)
        } else {
            this.mostrarStatus()
        }

    }
}

const Geralt = new Heroi("Geralt")
const Carpeado = new Heroi("Carpeado")

Geralt.levarDano(30);
Carpeado.levarDano(50);
Geralt.levarDano(80);
Carpeado.mostrarStatus();