from cinema import  calc_bilhete

variavel_total = 0
idade = -1
preco = 0

while idade != 0:

    idade = int(input("Digite a sua idade (0 para sair): "))

    if idade > 0: 
        preco = calc_bilhete(idade)
        print("Total a pagar: ", preco)
        variavel_total += preco
    else:
        break
    
print("Caixa do dia: ", variavel_total)