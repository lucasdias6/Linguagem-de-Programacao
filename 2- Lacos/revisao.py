idade = int(input("Digite sua idade: "))

if idade <= 12:
    print("Escalao: Infantil")
elif idade <= 17:
    print("Escalao: Juvenil")
else:
    print("Escalao: Adulto")