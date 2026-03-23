# Crie um programa que peça dois número
# para o usuário, divida eles e escreva 
# o resultado na tela
while True:
    d = "DIVISAO"
    print("\n{:=^20}".format(d))

    x = float(input("\nEscolha o primeira valor: "))
    y = float(input("Escolha o segundo valor: "))

    d = x / y

    print("O resultado de x / y é: {}".format(d))
    c = input("Deseja continuar?: ")
    if c == "nao":
        break