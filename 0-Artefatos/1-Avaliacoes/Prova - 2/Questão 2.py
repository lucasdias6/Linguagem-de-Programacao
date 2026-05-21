temperatura = 1

while temperatura:
    temperatura = float(input("Digite a temperatura: "))
    if temperatura >= 100:
        break

# Teórica Resposta: Caso a variável não seja alterada o programa vai rodar infinitamente consumindo muito desempenho do computador.