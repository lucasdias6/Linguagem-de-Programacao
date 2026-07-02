def classificar_carga(peso):
    if peso < 10:
        return "Carga Leve"
    elif peso >= 10 and peso <= 20:
        return "Carga Média"
    else:
        return "Carga Pesada"