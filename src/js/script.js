const inputBusca = document.querySelector('#input-cep')
const btnBusca = document.querySelector('#btn-cep')
const dadosBuscados = document.querySelector('.data-cep')

function procuraCep() {
    const cep = inputBusca.value 

        fetch(`http://viacep.com.br/ws/${cep}/json/`)
        .then(data => {
            if(!data.ok) {
                throw new Error ('Error na conexao via internet')
            }

            return data.json();
        })
        .then(data => {
            mostrarDadosNaTela(data)
        })
} 

function mostrarDadosNaTela(dados) {
    inputBusca.value = '';
    dadosBuscados.innerHTML = '';

    dadosBuscados.innerHTML += `
        <ul>
            <li><b>Rua: </b> ${dados.logradouro}</li>
            <li><b>UF: </b> ${dados.uf}</li>
            <li><b>Bairro: </b> ${dados.bairro}</li>
            <li><b>DDD: </b> ${dados.ddd}</li>
        </ul>
     `;
}
