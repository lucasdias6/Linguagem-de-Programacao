# Crie uma função chamado converter_dolar que recebe o valor_dolar e a cotação.
# A função deve retornar o valor equivalente em Reais.
# No programa principal, peça os valores ao usuário e exiba o resultado.

def converter_dolar(valor, cotacao):
    return valor * cotacao

valor = float(input("\nDigite um valor em dólar para descobrir quanto vale em reais: "))
cotacao = float(input("Digite o valor da cotação: "))

print("Ao converter R$", valor, " para dólar, você tem: ", converter_dolar(valor, cotacao))