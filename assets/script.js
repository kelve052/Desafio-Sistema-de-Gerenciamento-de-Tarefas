const inputTarefa = document.getElementById('input-tarefa')
const inputData = document.getElementById('input-data')
const tabela = document.getElementById('tabela')
const pMensagemErroTarefa = document.getElementById('p-mensagem-erro-tarefa')
const pMensagemErroData = document.getElementById('p-mensagen-erro-data')

const arrayTarefas = []
const getLivros = () => {
  arrayTarefas = JSON.parse(localStorage.getItem('livros')) || []
}

console.log(arrayTarefas)
const setLivros = () => {
  localStorage.setItem('livros', JSON.stringify(arrayTarefas))
}

const adiconarTarefa = (tarefa, data) => {
  setTimeout(() => {
    inputTarefa.className = 'input'
    inputData.className = 'input'
  }, 800);
  if (tarefa && data) {
    const tdTarefa = document.createElement('td')
    const tdData = document.createElement('td')

    tdTarefa.innerText = tarefa
    tdData.innerText = data

    tdTarefa.className = 'dados-livro'
    tdData.className = 'dados-livro'

    const linhaDeCadaRarefa = document.createElement('tr')
    linhaDeCadaRarefa.appendChild(tdTarefa)
    linhaDeCadaRarefa.appendChild(tdData)

    tabela.appendChild(linhaDeCadaRarefa)
  } else {
    if (!tarefa) {
      pMensagemErroTarefa.style.color = '#ffa600'
      inputTarefa.className = 'input input-tremer'
    }
    if (!data) {
      pMensagemErroData.style.color = '#ffa600'
      inputData.className = 'input input-tremer'
    }
  }
}

inputTarefa.addEventListener('input', ()=>{
  pMensagemErroTarefa.style.color = 'transparent'
})
inputData.addEventListener('input', ()=>{
  pMensagemErroData.style.color = 'transparent'
})





//conmando do botão adiconar
const btnAdicionar = document.getElementById('btn-adicionar')

btnAdicionar.addEventListener('click', (e) => {
  e.preventDefault()
  adiconarTarefa(inputTarefa.value, inputData.value)
})
