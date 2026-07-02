from moeda import converter_dolar

for x in range(1,4):
    dolar = float(input("Digite o valor do produto em dólar: "))
    reais = converter_dolar(dolar)
    print("O valor desse produto em reais é: R$", reais)
    