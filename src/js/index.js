/*
   OBJETIVO - Ao selecionar um Pokédev na listagem o cartão já aberto será fechado e o novo cartão selecionado na listagem será mostrado.
       PASSO 1 - Criar uma variável no JS pra trabalhar com a listagem dos Pokédevs.
       PASSO 2 - Identificar o evento de clique no elemento da listagem.
       PASSO 3 - Remover a classe "selecionado" do cartão que estiver aberto.
       PASSO 4 - Ao clicar em um Pokédev da listagem pegamos o id desse Pokédev pra saber qual cartão abrir.
       PASSO 5 - Remover a classe "listagemSelecionado" que marca o Pokédev selecionado na listagem.
       PASSO 6 - Adicinar a classe "listagemSelecionado" no Pokédev que for selecionado na listagem.
*/
const listaSelecaoPokedev = document.querySelectorAll(".pokedev");

listaSelecaoPokedev.forEach(pokedev => {
    pokedev.addEventListener("click", () => {
        fecharCartao();
        const idPokedevSelecionado = abrirCartao(pokedev);

        apagarSelecao();
        mostrarSelecao(idPokedevSelecionado);
    })
})

//FUNÇÕES:

function mostrarSelecao(idPokedevSelecionado) {
    const proximoPokedevListagem = document.getElementById(idPokedevSelecionado);
    proximoPokedevListagem.classList.add("listagemSelecionado");
}

function apagarSelecao() {
    const pokedevSelecionadoListagem = document.querySelector(".listagemSelecionado");
    pokedevSelecionadoListagem.classList.remove("listagemSelecionado");
}

function abrirCartao(pokedev) {
    const idPokedevSelecionado = pokedev.attributes.id.value;
    const idProximoPokedev = "cartao-" + idPokedevSelecionado;
    const proximoPokedev = document.getElementById(idProximoPokedev);
    proximoPokedev.classList.add("selecionado");
    return idPokedevSelecionado;
}

function fecharCartao() {
    const cartaoPokedevSelecionado = document.querySelector(".selecionado");
    cartaoPokedevSelecionado.classList.remove("selecionado");
}