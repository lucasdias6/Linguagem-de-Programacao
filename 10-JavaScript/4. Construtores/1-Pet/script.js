function Pet(nome, especie, idade){
    this.nome = nome;
    this.especie = especie;
    this.idade = idade;
};

const orelha = new Pet("Orelha", "cachorro", 3);
const benjamin = new Pet("Benjamin", "gato", 5);
const oliver = new Pet("Oliver", "peixe", 1);

console.table(orelha);
console.table(benjamin);
console.table(oliver);