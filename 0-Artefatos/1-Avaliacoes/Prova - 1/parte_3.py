idade = int(input("Digite sua idade: "))

if idade < 12:
    print("Escalão: Infantil")
elif idade <= 17:
    print("Escalão: Juvenil")
else:
    print("Escalão: Adulto")

    seguro_saude = input("Você possui seguro de saúde?: ")
    
    if seguro_saude == "nao":
        print("Atenção: Seguro saúde obrigatório para adultos.")