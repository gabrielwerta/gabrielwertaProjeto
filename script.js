//constantes
const botaoDesafio = document.getElementById("botao-desafio");
const telaPropostaDesafio = document.getElementById("proposta-desafio");
const telaDesafio = document.getElementById("desafio");
const respostaDesafio = document.getElementById("resposta-desafio");
const botaoEnviarResposta = document.getElementById("botao-enviar-resposta");
const telaConteudoRevelado = document.getElementById("conteudo-revelado");

//código para esconder telas que serão mostradas após o desafio
telaDesafio.style.display = "none";
telaConteudoRevelado.style.display = "none";

//função que faz mostrar o desafio ao apertar no botão
botaoDesafio.addEventListener("click", () => {
    telaDesafio.style.display = "block";
    botaoDesafio.style.display = "none";
    telaPropostaDesafio.style.display = "none";
});

botaoEnviarResposta.addEventListener("click", () => {
    const respostaDoUsuario = respostaDesafio.value.trim().toLowerCase();

    if (respostaDoUsuario === "grão") {
        telaConteudoRevelado.style.display = "block";
        telaDesafio.style.display = "none";
    } else {
        alert("Resposta incorreta. Tente novamente!");
    }
});
