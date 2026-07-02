from porto import classificar_carga

for x in range(1,5):
    peso = float(input("Digite o peso do contêiner em toneladas: "))
    tipo = classificar_carga(peso)
    print(tipo)