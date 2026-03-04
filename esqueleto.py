def funcao():
	valTot = 0.0
	valAnd = 0.0
	valVic = 0.0
	valYal = 0.0
	totOpe = 0.0

	numPes = 0

	bolAnd = ""
	bolVic = ""
	bolYal = ""
	
	quantComp = int(input("Quantas compras? "))

	for i in range(quantComp):
		bolAnd = "n"
		bolVic = "n"
		bolYal = "n"
		numPes = 0

		item = input(f"informe o valor {i + 1}: ")
		quant = input(f"informe a quantidade {i + 1}: ")
		totOpe = float(item) * int(quant)

		bolAnd = str(input("Andri paga? [S/N]: "))
		if bolAnd == "S" or bolAnd == "s":
			numPes = numPes + 1
			print("AP")
		
		bolVic = str(input("Victor paga? [S/N]: "))
		if bolVic == "S" or bolVic == "s":
			numPes = numPes + 1
			print("VP")
		
		bolYal = str(input("Yalei paga? [S/N]: "))
		if bolYal == "S" or bolYal == "s":
			numPes = numPes + 1
			print("YP")

		totOpe = totOpe/numPes

		if bolAnd == "S" or bolAnd == "s":
			valAnd += totOpe

		if bolVic == "S" or bolVic == "s":
			valVic += totOpe

		if bolYal == "S" or bolYal == "s":
			valYal += totOpe
					

	valTot = valAnd+valVic+valYal

	print("Quem paga quanto?")
	print("Andri paga: R$",round(valAnd,2))
	print("Victor paga: R$",round(valVic,2))
	print("Yalei paga: R$",round(valYal,2))
	print("Total: R$",round(valTot,2))

if __name__ == "__main__":
	funcao()

