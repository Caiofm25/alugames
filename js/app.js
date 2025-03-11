let gamesAlugados;
let links = document.querySelectorAll(".dashboard__item__button")

links.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault()
  })
})

function exibirJogosAlugados() {
  console.log(`O total de jogos alugados é: ${gamesAlugados}`)
}

function alterarStatus(id) {
  let item = document.getElementById(`game-${id}`);
  let image = item.querySelector(".dashboard__item__img");
  let botao = item.querySelector(".dashboard__item__button")
  if(image.classList.contains("dashboard__item__img--rented")) {
    if(confirm(`Você tem certeza que deseja devolver o jogo ${item.querySelector(".dashboard__item__name").textContent}?`)) {
    botao.textContent = "Alugar";
    image.classList.remove("dashboard__item__img--rented");
    botao.classList.remove("dashboard__item__button--return");
    gamesAlugados--
  }
  } else {
    botao.textContent = "Devolver"
    image.classList.add("dashboard__item__img--rented");
    botao.classList.add("dashboard__item__button--return");
    gamesAlugados++
  }
  exibirJogosAlugados();
}

document.addEventListener("DOMContentLoaded", function() {
  gamesAlugados = document.querySelectorAll(".dashboard__item__img--rented").length;
  exibirJogosAlugados();
});
