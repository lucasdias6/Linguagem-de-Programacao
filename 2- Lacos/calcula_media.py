# Crie um programa que pede para o usuário digitar 3 notas de um aluno. Em seguida o programa deve calcular a média e mostrar na tela
 
nota1 = float(input("\nDigite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))

media = (nota1 + nota2 + nota3) / 3

print("A média do aluno é: {:.2f}".format(media))
if media >= 6:
        print("Aprovado!")
else:
    print("Reprovado!")