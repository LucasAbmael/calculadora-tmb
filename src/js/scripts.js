
const opcoesSelect = document.getElementById("opcoes");

var genero = 0
console.log(genero)

opcoesSelect.addEventListener("change", function () {
    // Obter o valor selecionado
    const valorSelecionado = opcoesSelect.value;

    // Exibir o valor selecionado no console
    console.log("Opção selecionada: " + valorSelecionado);

    if (valorSelecionado === "genero") {
        // Exibir valor para a opção 1
        genero = 0
        console.log(genero)

    } else if (valorSelecionado === "homem") {
        // Exibir valor para a opção 2
        genero = 1
        console.log(genero)

    } else if (valorSelecionado === "mulher") {
        // Exibir valor para a opção 3
        genero = 2
        console.log(genero)

    }
});

function confirmar() {

    if (genero == 0) {
        window.alert('Escolha um gênero válido para efetuar o cálculo!')
    } else if (genero == 1) {
        var idadestr = document.getElementById('idade')
        var pesostr = document.getElementById('peso')
        var alturastr = document.getElementById('altura')
        var r = document.getElementById('resultado')

        const modal = document.getElementById('janela-modal')
        const mudarCor = document.getElementById('resultado')
        modal.classList.add('abrir')

        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
                modal.classList.remove('abrir')
            }
        })

        var idade = Number(idadestr.value)
        var peso = Number(pesostr.value)
        var altura = Number(alturastr.value)

        var calculo = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade)
        r.innerHTML = `${calculo.toFixed(2)} calorias`
    } else if (genero == 2) {
        var idadestr = document.getElementById('idade')
        var pesostr = document.getElementById('peso')
        var alturastr = document.getElementById('altura')
        var r = document.getElementById('resultado')

        const modal = document.getElementById('janela-modal')
        modal.classList.add('abrir')

        modal.addEventListener('click', (e) => {
            if (e.target.id == 'fechar' || e.target.id == 'janela-modal') {
                modal.classList.remove('abrir')
            }
        })

        var idade = Number(idadestr.value)
        var peso = Number(pesostr.value)
        var altura = Number(alturastr.value)

        var calculo = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade)
        r.innerHTML = `${calculo.toFixed(2)} calorias`
    }
}

const input1 = document.getElementById("idade");
const input2 = document.getElementById("peso");
const input3 = document.getElementById("altura");
const btnEnter = document.getElementById("btn-enter");

// Adicionar um listener para o evento "keyup" no primeiro input
input1.addEventListener("keyup", function (event) {
    // Verificar se a tecla pressionada foi "Enter"
    if (event.keyCode === 13) {
        // Dar foco no próximo input
        input2.focus();
    }
});

// Adicionar um listener para o evento "keyup" no segundo input
input2.addEventListener("keyup", function (event) {
    // Verificar se a tecla pressionada foi "Enter"
    if (event.keyCode === 13) {
        // Dar foco no próximo input
        input3.focus();
    }
});

// Adicionar um listener para o evento "keyup" no terceiro input
input3.addEventListener("keyup", function (event) {
    // Verificar se a tecla pressionada foi "Enter"
    if (event.keyCode === 13) {
        // Submeter o formulário (ou fazer outra ação desejada)
        opcoesSelect.focus()
    }
});