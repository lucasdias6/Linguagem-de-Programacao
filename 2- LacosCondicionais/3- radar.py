print("\nRADAR")

velocidade_carro = int(input("\nInforme a velocidade do carro: "))

multa = (velocidade_carro - 80) * 7

if velocidade_carro <= 80:
    print("O veículo está dentro do limite e nenhuma ação é tomada!")
else:
    print("O seu carro foi multado! Valor da multa: ",multa)