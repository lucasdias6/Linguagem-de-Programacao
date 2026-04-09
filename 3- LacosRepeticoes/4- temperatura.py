# A Defesa Civil de Itajaí registrou as temperaturas médias de 7 dias: 22, 15, 14, 25, 17, 28, 13
# Crie um programa que percorra essa lista e, ao final, informe o usuário quantos desses dias tiveram temperaturas abaixo de 18°C e a temperatura média da semana.

temperaturas = [22, 15, 14, 25, 17, 28, 13]
contador = 0
media = 0
dias = 0

for x in temperaturas:
    media = media + x
    dias = dias + 1
    if x < 18:
        print("Temperatura do dia: ", x,"°C")
        contador += 1

print("Número de dias com temperaturas abaixo de 18°C: ", contador)
print("Temperatura média: {:.2f}°C".format(media/dias))