class Lampada {
    constructor(comodo){
        this.comodo = comodo
        this.ligada = false;
    }

    ligar(){
        if (this.ligada){
            console.log(`A luz do/a ${this.comodo} já está ligada.`);
        } else {
            this.ligada = true;
            console.log(`Luz do/a ${this.comodo} ligada`);
        }
    }

    desligar(comodo){
        if (!this.ligada){
            console.log(`A luz do/a ${this.comodo} já está desligada.`);
        } else {
            this.ligada = false;
            console.log(`Luz do/a ${this.comodo} desligada`);
        }
    }

    alternar(comodo){
        if (!this.ligada){
            this.ligada = true
            console.log(`A luz do/a ${this.comodo} está ligada.`);
        } else {
            this.ligada = false;
            console.log(`Luz do/a ${this.comodo} desligada`);
        }
    }
}

const sala = new Lampada("sala");
const cozinha = new Lampada("cozinha");

sala.ligar();          // ?
sala.ligar();          // ?
cozinha.alternar();    // ?
cozinha.alternar();    // ?
cozinha.desligar();    // ?
console.log(sala.ligada, cozinha.ligada);  // ?