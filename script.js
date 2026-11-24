// ========================================
// BOTÕES DE CURTIDA
// ========================================

const botoes = document.querySelectorAll(".botao-reacao");

botoes.forEach(function (botao) {

    let curtiu = false;

    botao.addEventListener("click", botaoClicado);

    function botaoClicado() {

        console.log("Fui clicado!");

        let texto = botao.querySelector("span");

        if (curtiu === false) {

            texto.textContent++;

            curtiu = true;

        } else {

            texto.textContent--;

            curtiu = false;

        }

    }

});


// ========================================
// MODO ESCURO
// ========================================

const botaoTema = document.getElementById("botao-tema");

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");


    // Verifica se o modo escuro está ativado

    if (document.body.classList.contains("tema-escuro")) {

        botaoTema.textContent = "☀️ Modo claro";

    } else {

        botaoTema.textContent = "🌙 Modo escuro";

    }

});