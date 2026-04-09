valor_produto = float(input("Digite o valor do produto: "))

print("\nDigite 1 para pagamento à vista. Contém 10% de desconto.")
print("Digite 2 para pagamento parcelado em 3x.")

pagamento = int(input("\nQual a forma de pagamento?: "))

pagamento_a_vista = valor_produto - (valor_produto * 0.1)
pagamento_parcelado = valor_produto / 3

if pagamento == 1:
    print("Valor final: R$",pagamento_a_vista)
elif pagamento == 2:
    print("Valor final: R$",valor_produto)
    print("Valor das parcelas: R$",pagamento_parcelado)
else:
    print("Erro: forma de pagamento inválida.")