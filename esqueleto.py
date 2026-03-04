
def funcao():
	valTot = 0.0
	valAnd = 0.0
	valVic = 0.0
	valYal = 0.0
	bolAnd = False
	bolVic = False
	bolYal = False
	
	quantComp = int(input("Quantas compras? "))

	for i in range(quantComp):
		item = input(f"informe o valor {i + 1}: ")

	print("Lista de compras:")
	print(item)


if __name__ == "__main__":
	funcao()

