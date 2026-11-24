class Pet{
    constructor(nome, especie, idade) {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    apresentar(){
        return `Oi, eu sou o ${this.nome}!\nEspécie: ${this.especie}\nIdade: ${this.idade}`;
    }
}

const orelha = new Pet("Orelha", "cachorro", 3);
const carpeado = new Pet("Carpeado", "cavalo", 5);
const oliver = new Pet("Oliver", "galinha", 1);

console.log(orelha.apresentar()); // retorna o método "Pet.apresentar()" no Pet orelha
console.log(oliver.apresentar()); // retorna o método "Pet.apresentar()" no Pet oliver
console.log(carpeado.apresentar()); // retorna o método "Pet.apresentar()" no Pet carpeado
console.log(typeof orelha); // retorna o tipo da classe Pet
// const benjamin = Pet("Benjamin", "gato", 2) Erro

