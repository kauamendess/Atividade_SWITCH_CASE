// EXERCÍCIO 1 - FILMES
function escolherFilme() {
  let opcao = Number(document.getElementById("filme").value);
  let resultado = document.getElementById("resultadoFilme");
  let estilo;

  switch (opcao) {
    case 1:
      estilo = "Ação";
      break;
    case 2:
      estilo = "Comédia";
      break;
    case 3:
      estilo = "Drama";
      break;
    case 4:
      estilo = "Terror";
      break;
    case 5:
      estilo = "Ficção Científica";
      break;
    case 6:
      estilo = "Romance";
      break;
    default:
      resultado.innerText = "Opção inválida!";
      resultado.style.color = "red";
      return;
  }

  resultado.innerText = "Seu estilo de filme favorito é: " + estilo;
  resultado.style.color = "green";
}

// EXERCÍCIO 2 - MÚSICA
function escolherMusica() {
  let opcao = Number(document.getElementById("musica").value);
  let resultado = document.getElementById("resultadoMusica");
  let genero;

  switch (opcao) {
    case 1:
      genero = "Rock";
      break;
    case 2:
      genero = "Pop";
      break;
    case 3:
      genero = "Hip Hop";
      break;
    case 4:
      genero = "Eletrônica";
      break;
    case 5:
      genero = "Jazz";
      break;
    case 6:
      genero = "Clássica";
      break;
    default:
      resultado.innerText = "Opção inválida!";
      resultado.style.color = "red";
      return;
  }

  resultado.innerText = "Seu gênero musical preferido é: " + genero;
  resultado.style.color = "green";
}

// EXERCÍCIO 3 - TEMA LIVRE
function escolherTema() {
  let opcao = Number(document.getElementById("tema").value);
  let resultado = document.getElementById("resultadoTema");
  let mensagem;

  switch (opcao) {
    case 1:
      mensagem = "Você escolheu Tecnologia 💻. Explore programação e inovação!";
      break;
    case 2:
      mensagem =
        "Você escolheu Esportes ⚽. Que tal aprender mais sobre treinos e saúde?";
      break;
    case 3:
      mensagem = "Você escolheu Jogos 🎮. Desenvolva seus próprios games!";
      break;
    case 4:
      mensagem =
        "Você escolheu Estudos 📚. Continue evoluindo seu conhecimento!";
      break;
    default:
      resultado.innerText = "Opção inválida!";
      resultado.style.color = "red";
      return;
  }

  resultado.innerText = mensagem;
  resultado.style.color = "green";
}
