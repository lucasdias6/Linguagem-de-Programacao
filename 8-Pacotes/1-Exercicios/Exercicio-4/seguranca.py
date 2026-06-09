# Exercício 4: O Formulário de Login do Sistema (Nível: Fácil)
# Objetivo: Compreender como enviar uma informação coletada por input no arquivo principal para uma função simples de validação que está guardada em um módulo local.
# Enunciado:
# Crie um arquivo chamado seguranca.py. Dentro dele, crie uma função chamada validar_login(nome, senha). Se o nome digitado for igual a "admin", e a senha for igual a “123Testar”  a função deve retornar a frase: "Acesso Liberado!". Caso contrário, deve retornar: "Acesso negado!".
# Crie um segundo arquivo chamado main.py na mesma pasta. Importe a função validar_login. No programa principal, use um input para perguntar o nome do usuário, passe esse nome para a função importada e exiba a resposta na tela.

def  validar_login(nome, senha):
    if nome == "admin" and senha == "123Testar":
        print("Acesso Liberado!")
    else:
        print("Acesso Negado!")