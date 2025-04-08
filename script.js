var divFilme = document.querySelector(".filmes")
var filmes = ["O Senhor dos Anéis", "Vingadores: Ultimato", "Matrix", "Harry Potter", "O Rei Leão"]

for(var inicio = 0; inicio <= filmes.length; inicio++) {
    divFilme.innerHTML += `<p>${filmes[inicio]}</p>`
}