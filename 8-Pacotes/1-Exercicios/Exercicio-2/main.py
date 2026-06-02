from conversores import pes_para_metros

pes = float(input("Digite a altura de um container em pés: "))

metros = pes_para_metros(pes)

# usando strings formatadas com duas casas decimais
print(f"A altura desse container em metros é: {metros:.2f}m.")
