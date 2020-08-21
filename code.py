# answer = input("question ?")

# def create_message(answer):
#   # votre algorithme
#   return message

# print(message)

def create_message(answer):
  if answer < 10 and answer > 0:
    message = messages[0]
  elif answer >= 10 and answer < 20:
    message = messages[1]
  elif answer >= 20:
    message = messages[2]
  return message

# Faire un tableau des résultats possibles
messages = [
 "On est dans mon frigo",
 "On peut commencer à mettre des tongs",
 "On va tous à Tahiti (et Pierre est ?)"
]

# Afficher ces résultats
print("Tu seras dans une de ses catégories :")
for message in messages:
  print("- " + message)


answer = int(input("Ta température ?\n> "))
message = create_message(answer)
print(message)
