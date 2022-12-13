function incluirRegistro() {

    let nomeParticipante = document.getElementById('nome').value

    if (nomeParticipante != "") {

        let tabela = document.getElementById('tabelaPartipantes')
        let numeroLinhas = tabela.rows.length
        let linha = tabela.insertRow(numeroLinhas)
        let campo1 = linha.insertCell(0)
        let campo2 = linha.insertCell(1)
        let campo3 = linha.insertCell(2)
        let campo4 = linha.insertCell(3)
        let campo5 = linha.insertCell(4)
        campo1.innerHTML = nomeParticipante
        campo2.innerHTML = document.getElementById('email').value
        campo3.innerHTML = document.getElementById('telefone').value
        campo4.innerHTML = document.getElementById('localidade').value
        campo5.innerHTML = "<button class='btn btn-danger' onclick= 'removerLinha(this)' >Remover</button>"
        document.getElementById('nome').value = ""
        document.getElementById('email').value = ""
        document.getElementById('localidade').value = ""
        document.getElementById('uf').value = ""
        document.getElementById('logradouro').value = ""
        document.getElementById('cep').value = ""
        document.getElementById('telefone').value = ""
    }

    else {
        alert('Nome inválido')
    }
}

function removerLinha(linha) {
    console.log(linha.parentNode.parentNode)
    let i = linha.parentNode.parentNode.rowIndex
    console.log(i)
    document.getElementById('tabelaPartipantes').deleteRow(i)

}

function pesquisacep(cep) {
    let cepfinal = cep




    if (cepfinal != "") {
        let script = document.createElement('script')
        script.src = 'https://viacep.com.br/ws/' + cepfinal + '/json/?callback=callback_name'
        document.body.appendChild(script)

    }

}



function callback_name(objetocep) {


    document.getElementById('logradouro').value = (objetocep.logradouro)
    document.getElementById('localidade').value = (objetocep.localidade)
    document.getElementById('uf').value = (objetocep.uf)

}