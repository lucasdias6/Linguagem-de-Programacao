#Este desafio exige que o aluno combine cálculos matemáticos
#com múltiplos testes lógicos.

#Um cliente concede empréstimos apenas se o cliente atender
#a três requisitos:

# Ter entre 21 e 65 anos.
# Ter uma renda mensal de pelo menos R$ 2.500,00
# O valor da parcela não pode ultrapassar 30% da renda

print("\nEmpréstimo")

# entrada de dados

idade = int(input("Digite sua idade: "))
renda_mensal = float(input("Digite sua renda mensal: "))
valor_emprestimo = float(input("Digite o valor do emprestimo: "))
numero_parcelas = int(input("Digite o numero de parcelas em meses: "))

#processamento
valor_parcelas = valor_emprestimo / numero_parcelas
resultado = idade >= 21 and idade <= 65 and renda_mensal >= 2500 and valor_parcelas <= (renda_mensal * 0.3)

print("\nIdade: ",idade)
print("Renda mensal: ",renda_mensal)
print("Valor do empréstimo: ",valor_emprestimo)
print("Numero de parcelas: ",numero_parcelas)
print("Valor das parcelas: ",valor_parcelas)
print("Voce e elegivel para o emprestimo: ", resultado)
