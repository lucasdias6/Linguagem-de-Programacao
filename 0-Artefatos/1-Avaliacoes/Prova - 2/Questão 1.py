codigo = int(input("\nDigite um número de 1 a 5 para descobrir a categoria da carga: "))

match codigo:
    case 1 | 2 | 3:
        print("Carga Geral/Manufaturados")
    case 4 | 5:
        print("Produtos Perecíveis/Refrigerados")
    case _:
        print("Código Inválido - Consultar Supervisor")