function Jogador(nome) {
    this.nome = nome;
    this.pontos = 0;


    this.marcar= function (qtd) {
        this.pontos = this.pontos + qtd
        console.log(`${this.nome} marcou ${qtd} pontos!`)
    }
}

const  Ana = new Jogador("Ana")
const Beto = new Jogador("Beto")

console.table(Ana)
console.table(Beto)

Ana.marcar(3);             
Beto.marcar(2);            
Ana.marcar(5);             
console.log(Ana.pontos);   
console.log(Beto.pontos);  