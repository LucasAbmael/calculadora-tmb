// Para Homens: 66 + (13,7 x peso) + (5,0 x altura) - (6,8 x idade)

// Para Mulheres: 665+(9,6 x peso) + (1,8 x altura) - (4,7 x idade)

function calc() {
    let idade = Number(document.getElementById('idade').value);
    let peso = Number(document.getElementById('peso').value);
    let altura = Number(document.getElementById('altura').value);
    let genero = document.getElementById('genero');
    let res = document.querySelector('.res');
    
    if (idade == '' || peso == '' || altura == '') {
        alert("Por favor, preencha todos os campos para efetuar o cálculo corretamente!")
    } else {
        if (genero.value == "gen") {
            alert("Escolha o seu Gênero!")
        } else if (genero.value == "H") {
            var calculo = 66 + (13.7 * peso) + (5.0 * altura) - (6.8 * idade);
            res.innerHTML = `${calculo}`;
        } else if (genero.value == "M") {
            var calculo = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);
            res.innerHTML = `${calculo}`;
        }
    }
}
