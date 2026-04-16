# Peça para o usuário digitar números inteiros. 
# O programa deve continuar pedindo números até que o usuário digite 0. 
# Ao final, mostre a soma de todos os números digitados. (exceto o 0)

i = 1
contador = 0

while i != 0:
    i = int(input("Digite um número: "))
    contador += i
    if i == 0:
        break
print("A soma dos números digitados é: ",contador)