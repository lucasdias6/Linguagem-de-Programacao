print("\nDigite 1 para Sol \nDigite 2 para chuva \nDigite 3 para Nublado \nDigite 4 para neve")
clima = int(input("Digite um número: "))

match clima:
    case 1 | 3:
        print("Leve um óculos escuro.")
    case 2 | 4:
        print("Não esqueça o guarda-chuva ou casaco.")
    case _:
        print("Númnero inválido.")