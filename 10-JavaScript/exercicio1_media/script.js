// Entrada de dados (Váriaveis)
nomeAluno = "aluno ficticio";
const nota1 = 10;
const nota2 = 7.0;
const nota3 = 4.2;

// Processamento de dados

const media = (nota1 + nota2 + nota3) / 3

// Saída de dados
console.log("=====================================");
console.log('RELATÓRIO ESCOLAR DE: ${nomeAluno}');
console.log("=====================================");
console.log(`Notas: ${nota1} | ${nota2} | ${nota3}`);
console.log(`Média Final: ${media.toFixed(2)}`);

// Tomada de decisão ('Hoisting')
if (media >= 7.0) {
    console.log("SITUAÇÃO: Aprovado")
} else if (media >= 5.0) {
    console.log("SITUAÇÃO: Recuperação")
} else {
    console.log("SITUAÇÃO: Reprovado")
}