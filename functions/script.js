username = prompt("Username:")
password = prompt("Password:")

var users = ["tony", "bob", "john"]

if (username === "tony" || username === "bob" || username === "john") && (password === "lol" || password === "mdr" || password === "ptdr") {
  alert("Bienvenue")
} else {
  alert("Mauvais Login/Mot de passe !!")
}

/*
JS pour verifier l'age
age = prompt("Quel est ton age ?")
if (age < 18) {
  alert("Pas majeur, tu ne peut pas conduire goodbye")
  document.location.href="http://www.gulli.fr."
} else {
  alert("Bienvenue")
  document.write("<center><h1>Tu es majeur tu peut conduire</h1></center>")
}
*/
