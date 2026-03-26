print("\nEmpréstimo")

# entrada de dados
idade = int(input("Digite sua idade: "))
renda_mensal = float(input("Digite sua renda mensal: "))
valor_emprestimo = float(input("Digite o valor do emprestimo: "))
numero_parcelas = int(input("Digite o numero de parcelas em meses: "))

#processamento lógico
valor_parcelas = valor_emprestimo / numero_parcelas

#saida de dados
print("\nIdade: ",idade)
print("Renda mensal: ",renda_mensal)
print("Valor do empréstimo: ",valor_emprestimo)
print("Numero de parcelas: ",numero_parcelas)
print("Valor das parcelas: ",valor_parcelas)

if idade >= 21 and idade <= 65 and renda_mensal >= 2500 and valor_parcelas <= (renda_mensal * 0.3):
    print("Voce foi aprovado para o emprestimo.")
else:
    print("Voce nao foi aprovado para o emprestimo.")