print("\nCALCULADORA\n")

valor_1 = float(input("Digite o primeiro valor: "))
operacao = input("Digite a operação: ")
valor_2 = float(input("Digite o segundo valor: "))

soma = valor_1 + valor_2
subtracao = valor_1 - valor_2
multiplicacao = valor_1 * valor_2
divisao = valor_1 / valor_2

match operacao:
    case "+":
        print("Resultado: ", soma)
    case "-":
        print("Resultado: ", subtracao)
    case "*":
        print("Resultado: ", multiplicacao)
    case "/":
        print("Resultado: ", divisao)
    case _:
        print("Erro: operação inválida")