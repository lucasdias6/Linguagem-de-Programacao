idade = int(input("Digite sua idade: "))
tem_licenca = str(input("Você tem licenca? Digite Sim ou Nao: "))

if tem_licenca == "sim":
    tem_licenca = True
else:
    tem_licenca = False

resultado = idade >= 18 and tem_licenca

print("Pode dirigir: ",resultado)

print(type(tem_licenca))
print(type(idade))
print(type(resultado))