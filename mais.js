const form = document.getElementById('formAtividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji aprovado">'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji reprovado">'

let linhas = '';
const atividades = [];
const notas = [];
const notaMin = parseFloat(prompt('Digite a nota Minima: '));

const spanAprovado = '<span class="resultado aprovado">Aprovado</span>'
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>'


form.addEventListener('submit', function (e) {

    e.preventDefault();

    adiconaLinha();
    atualizaTabela();
    atualizarMedia();
});

function adiconaLinha() {
    const inputNomeAtividade = document.getElementById('nomeAtividade');
    const inputNotaAtividade = document.getElementById('notaAtividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} ja foi inserida`)
    } else {
        atividades.push(inputNomeAtividade.value);
    notas.push(parseFloat(inputNotaAtividade.value));

    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value}</td>`;
    linha += `<td>${inputNotaAtividade.value >= notaMin ? imgAprovado : imgReprovado }</td>`;
    linha += '</tr>'

    linhas += linha;
    }

    inputNomeAtividade.value = '';
    inputNotaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function calculaMedia() {
    let somaNotas = 0

    for (let i = 0; i < notas.length; i++) {
        somaNotas += notas[i]; 
    }

    return somaNotas / notas.length;
}

function atualizarMedia() {
    const mediaFinal = calculaMedia();

    document.getElementById('mediaFinal').innerHTML = mediaFinal
    document.getElementById('resultadoFinal').innerHTML = mediaFinal >= notaMin ? spanAprovado : spanReprovado;
}