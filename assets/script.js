const inputTarefa = document.getElementById('input-tarefa')
const inputData = document.getElementById('input-data')


const arrayTarefas = []
const getLivros = () => {
  arrayTarefas = JSON.parse(localStorage.getItem('livros')) || []
}

console.log(arrayTarefas)
const setLivros = () => {
  localStorage.setItem('livros', JSON.stringify(arrayTarefas))
}

const adiconarTarefa = (tarefa, data) => {

  const tdTarefa = document.createElement('td')
  const tdData = document.createElement('td')

  tdTarefa.innerText = tarefa
  tdData.innerText = data

  tdTarefa.className = 'dados-livro'
  tdData.className = 'dados-livro'

  const linhaDeCadaRarefa = document.createElement('tr')
  linhaDeCadaRarefa.appendChild(tdTarefa)
  linhaDeCadaRarefa.appendChild(tdData)
}





//conmando do botão adiconar
const btnAdicionar = document.getElementById('btn-adicionar')

btnAdicionar.addEventListener('click', (e) => {
  e.preventDefault()
})
