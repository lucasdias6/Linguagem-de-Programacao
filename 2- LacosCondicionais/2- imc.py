print("\nIMC")

peso = float(input("\nDigite seu peso em kg: "))
altura = float(input("Digite sua altura em metros: "))

imc = peso / (altura * altura)

if imc <= 18.5:
    print("\nIMC: ",imc, ". Você está abaixo do peso ideal.")
elif imc < 25:
    print("\nIMC: ",imc, ". Você está dentro do peso ideal.")
elif imc < 30:
    print("\nIMC: ",imc,". Você está dentro da faixa de sobrepeso")
else:
    print("\nIMC: ",imc,". Você está dentro da faixa de obesidade.")