# Um parque de diversões exige que uma criaça tenha
# pelo menos 1,40m de altura para andar na montanha - russa
# e que ela seja maior de 15 anos
# vamos criar um sensor digital para o operador do brinquedo?

print("\nBem vindo à Montanha-Russa")
print("Desubra se voce pode entrar")

altura = float(input("\nDigite sua altura: "))
idade = int(input("Digite sua idade: "))

if altura >= 1.40 and idade >= 15:
    print("Voce pode entrar na montanha-russa")
else:
    print("Voce nao pode entrar na montanha-russa")