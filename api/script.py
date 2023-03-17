import json

# Cria um dicionário
database = {"nome": "João", "idade": 30, "cidade": "São Paulo"}

# Abre o arquivo database.json no modo de escrita
with open("database.json", "w") as file:
    # Escreve o dicionário no arquivo
    json.dump(database, file)

print("Dados salvos com sucesso!")
